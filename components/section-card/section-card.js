Component({
  properties: {
    title: String,
    desc: String,
    tag: String,
    page: String,
    compact: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleTap() {
      if (!this.properties.page) {
        return
      }
      wx.navigateTo({
        url: this.properties.page
      })
    }
  }
})
