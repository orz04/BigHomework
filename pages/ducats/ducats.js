Page({
  data: {
    rarityOptions: [
      { label: '普通', value: 'common', ducats: 15 },
      { label: '罕见', value: 'uncommon', ducats: 45 },
      { label: '稀有', value: 'rare', ducats: 100 }
    ],
    rarityIndex: 0,
    quantity: 1,
    singleValue: 15,
    totalValue: 15
  },
  handleRarityChange(event) {
    const rarityIndex = Number(event.detail.value)
    const singleValue = this.data.rarityOptions[rarityIndex].ducats
    this.setData({
      rarityIndex,
      singleValue,
      totalValue: singleValue * this.data.quantity
    })
  },
  handleQuantityInput(event) {
    const rawValue = Number(event.detail.value)
    const quantity = rawValue > 0 ? rawValue : 1
    this.setData({
      quantity,
      totalValue: quantity * this.data.singleValue
    })
  }
})
