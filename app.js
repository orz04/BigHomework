const USER_STORAGE_KEY = 'tenno_user_info'

App({
  onLaunch() {
    if (wx.cloud) {
      wx.cloud.init({
        env: 'cloud1-d5gj26hlf342afe88',
        traceUser: true
      })
    }

    try {
      const cached = wx.getStorageSync(USER_STORAGE_KEY)
      if (cached && cached.id) {
        this.globalData.userInfo = cached
      }
    } catch (error) {
      console.warn('读取本地用户信息失败', error)
    }
  },
  setUserInfo(info) {
    this.globalData.userInfo = info
    try {
      wx.setStorageSync(USER_STORAGE_KEY, info)
    } catch (error) {
      console.warn('保存用户信息失败', error)
    }
  },
  clearUserInfo() {
    this.globalData.userInfo = null
    try {
      wx.removeStorageSync(USER_STORAGE_KEY)
    } catch (error) {
      console.warn('清除用户信息失败', error)
    }
  },
  globalData: {
    appName: 'Tenno Wiki',
    userInfo: null,
    storageKey: USER_STORAGE_KEY
  }
})
