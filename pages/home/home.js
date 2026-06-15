const homeData = require('../../data/home')
const frameSections = require('../../data/indexs')
const modData = require('../../data/mods')
const primaryData = require('../../data/primary')
const secondaryData = require('../../data/secondary')
const meleeData = require('../../data/melee')

function normalizeText(value) {
  return String(value || '').trim().replace(/\s+/g, '')
}

function getEnglishInitials(title) {
  const value = String(title || '').trim()
  if (!/[A-Za-z]/.test(value)) {
    return ''
  }

  return value
    .split(/[\s\-_]+/)
    .filter(Boolean)
    .map((token) => token[0])
    .join('')
}

function getFrameDetailPage(title) {
  return `/pages/index-detail/index-detail?title=${encodeURIComponent(title)}`
}

function getModDetailPage(title) {
  return `/pages/mod-detail/mod-detail?title=${encodeURIComponent(title)}`
}

function getWeaponDetailPage(title) {
  return `/pages/weapon-detail/weapon-detail?title=${encodeURIComponent(title)}`
}

function getMeleeDetailPage(title) {
  return `/pages/melee-detail/melee-detail?title=${encodeURIComponent(title)}`
}

function tagMatches(item, keyword) {
  const tag = String(item.tag || '').toLowerCase().replace(/\s+/g, '')
  return tag.includes(keyword.toLowerCase())
}

function weaponMatches(item, keyword) {
  return (
    normalizeText(item.title).includes(keyword) || tagMatches(item, keyword)
  )
}

function getSearchResults(keyword) {
  const normalizedKeyword = normalizeText(keyword)

  if (!normalizedKeyword) {
    return homeData.quickLinks
  }

  const frameResults = frameSections
    .filter((item) => {
      const titleKey = normalizeText(item.title)
      const initials = getEnglishInitials(item.title)

      return (
        titleKey.includes(normalizedKeyword) ||
        (initials && initials.startsWith(normalizedKeyword))
      )
    })
    .map((item) => ({
      title: item.title,
      desc: '战甲详情',
      tag: 'Warframe',
      page: getFrameDetailPage(item.title)
    }))

  const modResults = modData.items
    .filter((item) => normalizeText(item.title).includes(normalizedKeyword))
    .map((item) => ({
      title: item.title,
      desc: 'MOD详情',
      tag: 'MOD',
      page: getModDetailPage(item.title)
    }))

  const primaryResults = primaryData
    .filter((item) => weaponMatches(item, normalizedKeyword))
    .map((item) => ({
      title: item.title,
      desc: '武器详情',
      tag: '主要武器',
      page: getWeaponDetailPage(item.title)
    }))

  const secondaryResults = secondaryData
    .filter((item) => weaponMatches(item, normalizedKeyword))
    .map((item) => ({
      title: item.title,
      desc: '武器详情',
      tag: '次要武器',
      page: getWeaponDetailPage(item.title)
    }))

  const meleeResults = meleeData
    .filter((item) => weaponMatches(item, normalizedKeyword))
    .map((item) => ({
      title: item.title,
      desc: '武器详情',
      tag: '近战武器',
      page: getMeleeDetailPage(item.title)
    }))

  return [
    ...frameResults,
    ...modResults,
    ...primaryResults,
    ...secondaryResults,
    ...meleeResults
  ]
}

Page({
  data: {
    keyword: '',
    quickLinks: homeData.quickLinks,
    filteredQuickLinks: homeData.quickLinks,
    hasSearched: false,
    resultCount: homeData.quickLinks.length
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },
  runSearch(keyword = this.data.keyword) {
    const filteredQuickLinks = getSearchResults(keyword)
    this.setData({
      keyword,
      filteredQuickLinks,
      hasSearched: normalizeText(keyword).length > 0,
      resultCount: filteredQuickLinks.length
    })
  },
  handleSearchChange(event) {
    this.runSearch(event.detail.value)
  },
  handleSearch(event) {
    this.runSearch(event.detail.value)
  },
  goToPage(event) {
    const { page } = event.currentTarget.dataset
    if (!page) {
      return
    }
    wx.navigateTo({
      url: page
    })
  }
})
