const parsedRewards = require('../../data/relics-parsed')

Page({
  data: {
    rewards: [],
    loading: false,
    hasMore: true,
    pageSize: 15,
    currentPage: 0
  },

  onLoad() {
    this.loadRewards()
  },

  loadRewards() {
    if (this.data.loading || !this.data.hasMore) return

    this.setData({ loading: true })

    setTimeout(() => {
      const { pageSize, currentPage, rewards } = this.data
      const start = currentPage * pageSize
      const end = start + pageSize
      const pageData = parsedRewards.slice(start, end)

      const newRewards = [...rewards, ...pageData]
      
      this.setData({
        rewards: newRewards,
        loading: false,
        hasMore: pageData.length === pageSize,
        currentPage: currentPage + 1
      })
    }, 50)
  },

  onScrollLower() {
    this.loadRewards()
  }
})