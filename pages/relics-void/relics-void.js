Page({
  data: {},

  openItem(event) {
    const { target } = event.currentTarget.dataset
    if (!target) {
      return
    }

    wx.navigateTo({
      url: `/pages/${target}/${target}`
    })
  }
})
