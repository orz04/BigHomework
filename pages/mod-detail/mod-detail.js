const modData = require('../../data/mods')

Page({
  data: {
    mod: null,
    missing: false
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

    this.setData({
      mod
    })
  }
})