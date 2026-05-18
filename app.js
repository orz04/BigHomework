App({
  onLaunch() {
    if (wx.cloud) {
      wx.cloud.init({
        env: 'cloud1-d5gj26hlf342afe88'
      })
    }
  },
  globalData: {
    appName: 'Tenno Wiki'
  }
})
