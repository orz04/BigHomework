const DEFAULT_AVATAR = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FkxEWnoBgLZGanQXJEFNICu7d4XJ8C6CPMxTAJUMu8w4LRA/0'
const favorites = require('../../utils/favorites')
const PREVIEW_LIMIT = 3

const app = getApp()

Page({
  data: {
    userInfo: null,
    avatarUrl: DEFAULT_AVATAR,
    nickname: '',
    loading: false,
    statusText: '',
    statusKind: '', // info | success | warn | error
    favorites: [],
    history: []
  },
  onLoad() {
    const cached = (app && app.globalData && app.globalData.userInfo) || null
    if (cached && cached.id) {
      this.applyUserInfo(cached)
    }
    // 订阅收藏/历史变更，回填本页时立刻看到最新数据
    this._unsubFavorites = favorites.onChange(() => {
      if (this._pageVisible) {
        this.refreshEntries()
      }
    })
  },
  onShow() {
    this._pageVisible = true
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
    this.refreshEntries()
  },
  onHide() {
    this._pageVisible = false
  },
  onUnload() {
    this._pageVisible = false
    if (typeof this._unsubFavorites === 'function') {
      this._unsubFavorites()
      this._unsubFavorites = null
    }
  },
  applyUserInfo(userInfo) {
    const idStr = String(userInfo.id || '')
    const idShort = idStr.length > 14 ? `${idStr.slice(0, 6)}…${idStr.slice(-6)}` : idStr
    this.setData({
      userInfo: { ...userInfo, idShort },
      avatarUrl: userInfo.avatarUrl || DEFAULT_AVATAR,
      nickname: userInfo.nickname || ''
    })
  },
  refreshEntries() {
    const favoritesList = favorites.getFavorites()
    const historyList = favorites.getHistory()

    this.setData({
      favorites: (favoritesList || []).slice(0, PREVIEW_LIMIT),
      history: (historyList || []).slice(0, PREVIEW_LIMIT).map((item) => ({
        ...item,
        timeText: this.shortTime(item.visitedAt)
      }))
    })
  },
  shortTime(timestamp) {
    if (!timestamp) {
      return ''
    }
    const diff = Date.now() - Number(timestamp)
    if (diff < 0 || Number.isNaN(diff)) {
      return ''
    }
    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour
    if (diff < minute) return '刚刚'
    if (diff < hour) return `${Math.floor(diff / minute)} 分钟前`
    if (diff < day) return `${Math.floor(diff / hour)} 小时前`
    if (diff < 30 * day) return `${Math.floor(diff / day)} 天前`
    return ''
  },
  onChooseAvatar(event) {
    const { avatarUrl } = event.detail || {}
    if (!avatarUrl) {
      return
    }
    this.setData({ avatarUrl })
  },
  onNicknameInput(event) {
    this.setData({ nickname: (event.detail && event.detail.value) || '' })
  },
  resolveOpenId() {
    return new Promise((resolve) => {
      if (!wx.cloud || typeof wx.cloud.callFunction !== 'function') {
        wx.login({
          success: (res) => resolve({ id: res.code || `local_${Date.now()}`, source: 'login-code' }),
          fail: () => resolve({ id: `local_${Date.now()}`, source: 'fallback' })
        })
        return
      }

      wx.cloud.callFunction({
        name: 'login',
        data: {}
      }).then((res) => {
        const openid = res && res.result && (res.result.openid || res.result.openId || res.result.OPENID)
        if (openid) {
          resolve({ id: openid, source: 'openid' })
        } else {
          resolve({ id: `local_${Date.now()}`, source: 'fallback' })
        }
      }).catch((error) => {
        console.warn('调用 login 云函数失败，使用 wx.login code 兜底', error)
        wx.login({
          success: (res) => resolve({ id: res.code || `local_${Date.now()}`, source: 'login-code' }),
          fail: () => resolve({ id: `local_${Date.now()}`, source: 'fallback' })
        })
      })
    })
  },
  handleLogin() {
    if (this.data.loading) {
      return
    }

    const avatarUrl = this.data.avatarUrl
    const nickname = (this.data.nickname || '').trim()

    if (!avatarUrl || avatarUrl === DEFAULT_AVATAR) {
      wx.showToast({ title: '请选择头像', icon: 'none' })
      return
    }
    if (!nickname) {
      wx.showToast({ title: '请输入昵称', icon: 'none' })
      return
    }

    this.setData({ loading: true, statusText: '正在登录…', statusKind: 'info' })

    this.resolveOpenId().then((result) => {
      const userInfo = {
        id: result.id,
        avatarUrl,
        nickname,
        source: result.source,
        loginAt: this.formatTime(new Date())
      }

      if (app && typeof app.setUserInfo === 'function') {
        app.setUserInfo(userInfo)
      }

      const tip = result.source === 'openid'
        ? '登录成功，已获取微信 OpenID'
        : '已登录（未部署 login 云函数，使用临时凭证）'

      this.applyUserInfo(userInfo)
      this.setData({
        loading: false,
        statusText: tip,
        statusKind: result.source === 'openid' ? 'success' : 'warn'
      })
      this.refreshEntries()
      wx.showToast({ title: '登录成功', icon: 'success' })
    }).catch((error) => {
      console.error('登录失败', error)
      this.setData({
        loading: false,
        statusText: '登录失败，请稍后重试',
        statusKind: 'error'
      })
      wx.showToast({ title: '登录失败', icon: 'none' })
    })
  },
  handleLogout() {
    wx.showModal({
      title: '退出登录',
      content: '确认退出当前账号吗？',
      success: (res) => {
        if (!res.confirm) {
          return
        }
        if (app && typeof app.clearUserInfo === 'function') {
          app.clearUserInfo()
        }
        this.setData({
          userInfo: null,
          avatarUrl: DEFAULT_AVATAR,
          nickname: '',
          statusText: '已退出登录',
          statusKind: 'info',
          favorites: [],
          history: []
        })
      }
    })
  },
  copyId() {
    if (!this.data.userInfo || !this.data.userInfo.id) {
      return
    }
    wx.setClipboardData({
      data: this.data.userInfo.id,
      success: () => wx.showToast({ title: 'ID 已复制', icon: 'none' })
    })
  },
  goEntry(event) {
    const { page } = event.currentTarget.dataset
    if (!page) {
      return
    }
    wx.navigateTo({
      url: page,
      fail: () => wx.showToast({ title: '页面不存在', icon: 'none' })
    })
  },
  goFavorites() {
    wx.navigateTo({
      url: '/pages/favorites/favorites',
      fail: () => wx.showToast({ title: '页面不存在', icon: 'none' })
    })
  },
  goHistory() {
    wx.navigateTo({
      url: '/pages/history/history',
      fail: () => wx.showToast({ title: '页面不存在', icon: 'none' })
    })
  },
  formatTime(date) {
    const pad = (n) => (n < 10 ? `0${n}` : `${n}`)
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
  }
})
