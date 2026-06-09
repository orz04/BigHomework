const items = require('../../data/factions')
const { resolveCloudImages } = require('../../utils/cloud-image')

Page({
  data: {
    items
  },
  onLoad() {
    const images = items.flatMap((section) => (section.groups || []).flatMap((group) => [
      group.image,
      ...(group.relations || []).map((relation) => relation.image)
    ]))

    resolveCloudImages(images).then((imageMap) => {
      this.setData({
        items: items.map((section) => ({
          ...section,
          groups: (section.groups || []).map((group) => ({
            ...group,
            image: imageMap[group.image] || group.image,
            relations: (group.relations || []).map((relation) => ({
              ...relation,
              image: imageMap[relation.image] || relation.image
            }))
          }))
        }))
      })
    })
  },
  goToGroupPage(event) {
    const { page } = event.currentTarget.dataset
    if (!page) {
      return
    }

    wx.navigateTo({
      url: page
    })
  }
})
