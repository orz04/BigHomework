const items = require('../../data/factions')
const { resolveCloudImages } = require('../../utils/cloud-image')

Page({
  data: {
    items
  },
  onLoad() {
    resolveCloudImages(items.map((item) => item.image)).then((imageMap) => {
      this.setData({
        items: items.map((item) => ({
          ...item,
          image: imageMap[item.image] || item.image
        }))
      })
    })
  }
})
