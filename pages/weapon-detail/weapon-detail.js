const primaryData = require('../../data/primary-detail')
const secondaryData = require('../../data/secondary-detail')

Page({
  data: {
    weapon: null,
    missing: false
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

    this.setData({
      weapon
    })
  }
})