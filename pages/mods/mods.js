const modData = require('../../data/mods')

Page({
  data: {
    items: modData.items
  },
  goToDetail(e) {
    const title = e.currentTarget.dataset.title
    wx.navigateTo({
      url: `/pages/mod-detail/mod-detail?title=${encodeURIComponent(title)}`
    })
  }
})
