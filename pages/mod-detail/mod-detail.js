const modData = require('../../data/mods')
const favorites = require('../../utils/favorites')

Page({
  data: {
    mod: null,
    missing: false,
    favoriteId: '',
    isFavorited: false
  },
  onLoad(options) {
    const title = decodeURIComponent(options.title || '')
    const mod = modData.items.find((item) => item.title === title)

    if (!mod) {
      this.setData({ missing: true })
      return
    }

    wx.setNavigationBarTitle({
      title: mod.title
    })

    if (mod.modSource && mod.modSource.rate) {
      const rateValue = parseFloat(mod.modSource.rate.replace('%', ''))
      mod.modSource.rateColor = rateValue <= 10 ? 'red' : 'green'
    }

    const favoriteId = `mod:${mod.title}`
    favorites.addHistory({
      id: favoriteId,
      title: mod.title,
      page: `/pages/mod-detail/mod-detail?title=${encodeURIComponent(mod.title)}`,
      tag: 'MOD'
    })

    this.setData({
      mod,
      favoriteId,
      isFavorited: favorites.isFavorited(favoriteId)
    })
  },
  onShow() {
    if (this.data.favoriteId) {
      this.setData({ isFavorited: favorites.isFavorited(this.data.favoriteId) })
    }
  },
  toggleFavorite() {
    const { favoriteId, mod } = this.data
    if (!favoriteId || !mod) {
      return
    }
    const favorited = favorites.toggleFavorite({
      id: favoriteId,
      title: mod.title,
      page: `/pages/mod-detail/mod-detail?title=${encodeURIComponent(mod.title)}`,
      tag: 'MOD'
    })
    this.setData({ isFavorited: favorited })
    wx.showToast({
      title: favorited ? '已加入收藏' : '已取消收藏',
      icon: 'none'
    })
  }
})