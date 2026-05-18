const sections = require('../../data/indexs')
const { resolveCloudImages } = require('../../utils/cloud-image')

Page({
  data: {
    sections
  },
  onLoad() {
    const imagePaths = sections.map((item) => item.image)

    resolveCloudImages(imagePaths).then((imageMap) => {
      this.setData({
        sections: sections.map((item) => ({
          ...item,
          image: imageMap[item.image] || item.image
        }))
      })
    })
  },
  goToDetail(event) {
    const { title } = event.currentTarget.dataset
    if (!title) {
      return
    }

    wx.navigateTo({
      url: `/pages/index-detail/index-detail?title=${encodeURIComponent(title)}`
    })
  }
})
