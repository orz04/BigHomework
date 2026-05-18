const homeData = require('../../data/home')
const frameSections = require('../../data/indexs')

function normalizeText(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, '')
}

function getFrameDetailPage(title) {
  return `/pages/index-detail/index-detail?title=${encodeURIComponent(title)}`
}

function getSearchResults(keyword) {
  const normalizedKeyword = normalizeText(keyword)

  if (!normalizedKeyword) {
    return homeData.quickLinks
  }

  return frameSections
    .filter((item) => normalizeText(item.title).includes(normalizedKeyword))
    .map((item) => ({
      title: item.title,
      desc: '战甲详情',
      tag: 'Warframe',
      page: getFrameDetailPage(item.title)
    }))
}

Page({
  data: {
    keyword: '',
    quickLinks: homeData.quickLinks,
    filteredQuickLinks: homeData.quickLinks,
    hasSearched: false,
    resultCount: homeData.quickLinks.length
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
