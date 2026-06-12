const meleeData = require('../../data/melee-detail')

Page({
  data: {
    weapon: null,
    missing: false
  },
  onLoad(options) {
    const title = decodeURIComponent(options.title || '')
    const weapon = meleeData.items.find((item) => item.title === title)

    if (!weapon) {
      this.setData({ missing: true })
      return
    }

    wx.setNavigationBarTitle({
      title: weapon.title
    })

    this.setData({
      weapon
    })
  }
})
