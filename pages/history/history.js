const favorites = require('../../utils/favorites')

Page({
  data: {
    groups: [],
    total: 0
  },
  onLoad() {
    this._unsub = favorites.onChange((event) => {
      if (event && event.type === 'history') {
        this.refresh()
      }
    })
    this.refresh()
  },
  onShow() {
    this.refresh()
  },
  onUnload() {
    if (typeof this._unsub === 'function') {
      this._unsub()
      this._unsub = null
    }
  },
  refresh() {
    const list = favorites.getHistory() || []
    this.setData({
      groups: this.groupByDate(list),
      total: list.length
    })
  },
  groupByDate(list) {
    const now = new Date()
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
    const startOfYesterday = startOfToday - 24 * 60 * 60 * 1000
    const startOfWeek = startOfToday - 6 * 24 * 60 * 60 * 1000
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime()

    const groupsMap = new Map()
    const order = []

    const pushTo = (key, label, item) => {
      if (!groupsMap.has(key)) {
        groupsMap.set(key, { key, label, items: [] })
        order.push(key)
      }
      groupsMap.get(key).items.push(item)
    }

    list.forEach((entry) => {
      const ts = Number(entry.visitedAt) || 0
      const item = { ...entry, timeText: this.shortTime(ts) }
      if (!ts) {
        pushTo('unknown', '更早', item)
        return
      }
      if (ts >= startOfToday) {
        pushTo('today', '今天', item)
      } else if (ts >= startOfYesterday) {
        pushTo('yesterday', '昨天', item)
      } else if (ts >= startOfWeek) {
        pushTo('week', '本周早些时候', item)
      } else if (ts >= startOfMonth) {
        pushTo('month', '本月早些时候', item)
      } else {
        pushTo('earlier', '更早', item)
      }
    })

    return order.map((key) => groupsMap.get(key))
  },
  shortTime(timestamp) {
    if (!timestamp) {
      return ''
    }
    const d = new Date(timestamp)
    if (Number.isNaN(d.getTime())) {
      return ''
    }
    const pad = (n) => (n < 10 ? `0${n}` : `${n}`)
    const now = new Date()
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
    if (timestamp >= startOfToday) {
      const diff = now.getTime() - timestamp
      const minute = 60 * 1000
      const hour = 60 * minute
      if (diff < minute) return '刚刚'
      if (diff < hour) return `${Math.floor(diff / minute)} 分钟前`
      return `今天 ${pad(d.getHours())}:${pad(d.getMinutes())}`
    }
    if (d.getFullYear() === now.getFullYear()) {
      return `${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
    }
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
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
  handleRemove(event) {
    const { id } = event.currentTarget.dataset
    if (!id) {
      return
    }
    favorites.removeHistory(id)
    wx.showToast({ title: '已删除', icon: 'none' })
  },
  handleClear() {
    if (this.data.total === 0) {
      return
    }
    wx.showModal({
      title: '清空浏览历史',
      content: `当前共 ${this.data.total} 条记录,清空后无法恢复。`,
      confirmText: '清空',
      confirmColor: '#dc2626',
      success: (res) => {
        if (!res.confirm) {
          return
        }
        favorites.clearHistory()
        wx.showToast({ title: '已清空', icon: 'none' })
      }
    })
  },
  goHome() {
    wx.switchTab({
      url: '/pages/home/home',
      fail: () => wx.navigateBack({ delta: 1, fail: () => {} })
    })
  }
})
