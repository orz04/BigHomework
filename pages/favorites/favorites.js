const favorites = require('../../utils/favorites')

const ALL_TAG = '__all__'

Page({
  data: {
    list: [],
    visibleList: [],
    tags: [],
    activeTag: ALL_TAG,
    total: 0
  },
  onLoad() {
    this._unsub = favorites.onChange((event) => {
      if (event && event.type === 'favorites') {
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
    const raw = favorites.getFavorites() || []
    const list = raw.map((item) => ({
      ...item,
      timeText: this.formatTime(item.createdAt)
    }))
    const tags = this.buildTags(list)
    const activeTag = tags.some((t) => t.key === this.data.activeTag)
      ? this.data.activeTag
      : ALL_TAG
    this.setData({
      list,
      tags,
      activeTag,
      total: list.length,
      visibleList: this.filterList(list, activeTag)
    })
  },
  buildTags(list) {
    const counts = new Map()
    list.forEach((item) => {
      const key = item.tag || '其他'
      counts.set(key, (counts.get(key) || 0) + 1)
    })
    const tagList = Array.from(counts.entries()).map(([key, count]) => ({
      key,
      label: key,
      count
    }))
    tagList.sort((a, b) => b.count - a.count)
    return [{ key: ALL_TAG, label: '全部', count: list.length }].concat(tagList)
  },
  filterList(list, activeTag) {
    if (!activeTag || activeTag === ALL_TAG) {
      return list
    }
    return list.filter((item) => (item.tag || '其他') === activeTag)
  },
  onTagTap(event) {
    const tag = event.currentTarget.dataset.tag
    if (!tag || tag === this.data.activeTag) {
      return
    }
    this.setData({
      activeTag: tag,
      visibleList: this.filterList(this.data.list, tag)
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
  handleRemove(event) {
    const { id } = event.currentTarget.dataset
    if (!id) {
      return
    }
    wx.showModal({
      title: '移除收藏',
      content: '确定将该词条从收藏中移除吗？',
      confirmText: '移除',
      confirmColor: '#dc2626',
      success: (res) => {
        if (!res.confirm) {
          return
        }
        favorites.removeFavorite(id)
        wx.showToast({ title: '已移除', icon: 'none' })
      }
    })
  },
  handleClear() {
    if (this.data.total === 0) {
      return
    }
    wx.showModal({
      title: '清空收藏',
      content: `当前共 ${this.data.total} 条收藏，清空后无法恢复。`,
      confirmText: '清空',
      confirmColor: '#dc2626',
      success: (res) => {
        if (!res.confirm) {
          return
        }
        favorites.clearFavorites()
        wx.showToast({ title: '已清空', icon: 'none' })
      }
    })
  },
  goHome() {
    wx.switchTab({
      url: '/pages/home/home',
      fail: () => wx.navigateBack({ delta: 1, fail: () => {} })
    })
  },
  formatTime(timestamp) {
    if (!timestamp) {
      return ''
    }
    const d = new Date(Number(timestamp))
    if (Number.isNaN(d.getTime())) {
      return ''
    }
    const pad = (n) => (n < 10 ? `0${n}` : `${n}`)
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
  }
})
