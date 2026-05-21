const resourceData = require('../../data/resources')
const { resolveCloudImages } = require('../../utils/cloud-image')

function collectResourceImagePaths() {
  const paths = []

  resourceData.items.forEach((section) => {
    ;(section.list || section.rows || []).forEach((item) => {
      paths.push(item.icon)
    })
  })

  return paths.filter(Boolean)
}

function applyResourceImageMap(imageMap) {
  return resourceData.items.map((section) => ({
    ...section,
    list: section.list && section.list.map((item) => ({
      ...item,
      icon: imageMap[item.icon] || item.icon
    })),
    rows: section.rows && section.rows.map((row) => ({
      ...row,
      icon: imageMap[row.icon] || row.icon
    }))
  }))
}

Page({
  data: {
    tags: resourceData.tags,
    items: resourceData.items
  },
  onLoad() {
    resolveCloudImages(collectResourceImagePaths()).then((imageMap) => {
      this.setData({
        items: applyResourceImageMap(imageMap)
      })
    })
  }
})
