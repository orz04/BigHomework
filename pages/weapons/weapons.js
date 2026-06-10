const items = require('../../data/weapons')

Page({
  data: {
    items
  },
  goToDetail(event) {
    const { page } = event.currentTarget.dataset
    if (!page) {
      return
    }

    wx.navigateTo({
      url: page
    })
  }
})
