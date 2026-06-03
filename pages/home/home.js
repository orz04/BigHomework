const homeData = require('../../data/home')
const frameSections = require('../../data/indexs')
const modData = require('../../data/mods')

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

  return [...frameResults, ...modResults]
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
