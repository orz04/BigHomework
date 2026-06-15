Component({
  data: {
    selected: 0,
    color: '#94a3b8',
    selectedColor: '#f4c96b',
    list: [
      {
        pagePath: '/pages/home/home',
        text: '首页',
        icon: ''
      },
      {
        pagePath: '/pages/user/user',
        text: '用户',
        icon: ''
      }
    ]
  },
  methods: {
    switchTab(event) {
      const { path, index } = event.currentTarget.dataset
      if (this.data.selected === index) {
        return
      }
      wx.switchTab({ url: path })
    }
  }
})
