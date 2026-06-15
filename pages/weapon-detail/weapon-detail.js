const primaryData = require('../../data/primary-detail')
const secondaryData = require('../../data/secondary-detail')
const favorites = require('../../utils/favorites')

Page({
  data: {
    weapon: null,
    missing: false,
    favoriteId: '',
    isFavorited: false
  },
  onLoad(options) {
    const title = decodeURIComponent(options.title || '')
    let weapon = primaryData.items.find((item) => item.title === title)

    if (!weapon) {
      weapon = secondaryData.items.find((item) => item.title === title)
    }

    if (!weapon) {
      this.setData({ missing: true })
      return
    }

    wx.setNavigationBarTitle({
      title: weapon.title
    })

    const favoriteId = `weapon:${weapon.title}`
    favorites.addHistory({
      id: favoriteId,
      title: weapon.title,
      page: `/pages/weapon-detail/weapon-detail?title=${encodeURIComponent(weapon.title)}`,
      tag: weapon.slot ? `${weapon.slot}` : '武器'
    })

    this.setData({
      weapon,
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
    const { favoriteId, weapon } = this.data
    if (!favoriteId || !weapon) {
      return
    }
    const favorited = favorites.toggleFavorite({
      id: favoriteId,
      title: weapon.title,
      page: `/pages/weapon-detail/weapon-detail?title=${encodeURIComponent(weapon.title)}`,
      tag: weapon.slot ? `${weapon.slot}` : '武器'
    })
    this.setData({ isFavorited: favorited })
    wx.showToast({
      title: favorited ? '已加入收藏' : '已取消收藏',
      icon: 'none'
    })
  }
})