const items = require('../../data/secondary')

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
      url: `/pages/weapon-detail/weapon-detail?title=${encodeURIComponent(title)}`
    })
  }
})
