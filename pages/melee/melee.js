const items = require('../../data/melee')

Page({
  data: {
    items
  },
  goToDetail(event) {
    const { title } = event.currentTarget.dataset
    if (!title) {
      return
    }

    wx.navigateTo({
      url: `/pages/melee-detail/melee-detail?title=${encodeURIComponent(title)}`
    })
  }
})
