const resourceData = require('../../data/resources')
const { resolveCloudImages } = require('../../utils/cloud-image')

function getSectionRows(section) {
  if (section.table && Array.isArray(section.table.rows)) {
    return section.table.rows
  }

  return section.list || section.rows || []
}

function collectResourceImagePaths() {
  const paths = []

  resourceData.items.forEach((section) => {
    getSectionRows(section).forEach((item) => {
      paths.push(item.icon)
    })
  })

  return paths.filter(Boolean)
}

function applyResourceImageMap(imageMap) {
  return resourceData.items.map((section) => ({
    ...section,
    table: section.table && {
      ...section.table,
      rows: (section.table.rows || []).map((row) => ({
        ...row,
        icon: imageMap[row.icon] || row.icon
      }))
    },
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
