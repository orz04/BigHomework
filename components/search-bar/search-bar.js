Component({
  properties: {
    placeholder: {
      type: String,
      value: '搜索 Warframe 词条、MOD、遗物'
    },
    value: {
      type: String,
      value: ''
    }
  },
  methods: {
    handleInput(event) {
      const { value } = event.detail
      this.triggerEvent('change', { value })
    },
    handleConfirm(event) {
      const { value } = event.detail
      this.triggerEvent('search', { value })
    },
    handleTap() {
      this.triggerEvent('search', { value: this.properties.value })
    }
  }
})
