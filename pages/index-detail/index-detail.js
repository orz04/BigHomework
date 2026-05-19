const tennoList = require('../../data/indexs')
const { resolveCloudImages } = require('../../utils/cloud-image')

const platinumIcon = '/images/resourceimg/Platinum.png'

const basicInfoLabels = [
  { key: 'health', label: '生命值' },
  { key: 'shield', label: '护盾' },
  { key: 'armor', label: '护甲' },
  { key: 'energy', label: '能量' },
  { key: 'sprintSpeed', label: '冲刺速度' },
  { key: 'helminthElement', label: '源身元素', iconKey: 'helminthElementIcon' }
]

const defaultForging = {
  components: [],
  prices: []
}

function buildBasicInfo(tenno) {
  return basicInfoLabels.map((item) => ({
    label: item.label,
    value: tenno[item.key] || '待补充'
  }))
}

function buildForging(forging = defaultForging) {
  return {
    components: forging.components || defaultForging.components,
    prices: forging.prices || defaultForging.prices
  }
}

function collectForgingImagePaths(tenno, forging) {
  const paths = [tenno.image, platinumIcon]

  forging.components.forEach((component) => {
    ;(component.materials || []).forEach((material) => {
      paths.push(material.icon)
    })
  })

  forging.prices.forEach((price) => {
    paths.push(price.icon, price.currencyIcon)
  })

  return paths.filter(Boolean)
}

function applyForgingImageMap(tenno, forging, imageMap) {
  return {
    ...tenno,
    image: imageMap[tenno.image] || tenno.image,
    basicInfo: buildBasicInfo(tenno),
    forging: {
      components: forging.components.map((component) => ({
        ...component,
        materials: (component.materials || []).map((material) => ({
          ...material,
          icon: imageMap[material.icon] || material.icon
        }))
      })),
      prices: forging.prices.map((price) => ({
        ...price,
        icon: imageMap[price.icon] || price.icon,
        currencyIcon: imageMap[price.currencyIcon] || price.currencyIcon
      }))
    },
    acquisition: tenno.acquisition || { paragraphs: ['入手方式待补充'], drops: [], note: '' }
  }
}

Page({
  data: {
    tenno: null,
    missing: false,
    platinumIcon
  },
  onLoad(options) {
    const title = decodeURIComponent(options.title || '')
    const tenno = tennoList.find((item) => item.title === title)

    if (!tenno) {
      this.setData({ missing: true })
      return
    }

    wx.setNavigationBarTitle({
      title: tenno.title
    })

    const forging = buildForging(tenno.forging)

    this.setData({
      tenno: {
        ...tenno,
        basicInfo: buildBasicInfo(tenno),
        forging,
        acquisition: tenno.acquisition || { paragraphs: ['入手方式待补充'], drops: [], note: '' }
      }
    })

    resolveCloudImages(collectForgingImagePaths(tenno, forging)).then((imageMap) => {
      this.setData({
        tenno: applyForgingImageMap(tenno, forging, imageMap),
        platinumIcon: imageMap[platinumIcon] || platinumIcon
      })
    })
  }
})
