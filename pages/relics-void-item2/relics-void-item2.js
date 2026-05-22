const sectionData = [
  {
    title: '虚空遗物',
    groups: [
      [
        { label: '全部', chipIndex: 0 }
      ],
      [
        { label: '所有古纪', chipIndex: 1 },
        { label: '古纪 C14', chipIndex: 2 },
        { label: '古纪 C7', chipIndex: 3 },
        { label: '古纪 E2', chipIndex: 4 },
        { label: '古纪 G14', chipIndex: 5 },
        { label: '古纪 K12', chipIndex: 6 },
        { label: '古纪 N18', chipIndex: 7 },
        { label: '古纪 N19', chipIndex: 8 },
        { label: '古纪 Q2', chipIndex: 9 }
      ],
      [
        { label: '所有前纪', chipIndex: 10 },
        { label: '前纪 A10', chipIndex: 11 },
        { label: '前纪 A9', chipIndex: 12 },
        { label: '前纪 D8', chipIndex: 13 },
        { label: '前纪 E7', chipIndex: 14 },
        { label: '前纪 L4', chipIndex: 15 },
        { label: '前纪 N11', chipIndex: 16 },
        { label: '前纪 V13', chipIndex: 17 },
        { label: '前纪 V15', chipIndex: 18 },
        { label: '前纪 X1', chipIndex: 19 }
      ],
      [
        { label: '所有中纪', chipIndex: 20 },
        { label: '中纪 C7', chipIndex: 21 },
        { label: '中纪 K9', chipIndex: 22 },
        { label: '中纪 N24', chipIndex: 23 },
        { label: '中纪 P10', chipIndex: 24 },
        { label: '中纪 S20', chipIndex: 25 },
        { label: '中纪 T10', chipIndex: 26 },
        { label: '中纪 V11', chipIndex: 27 },
        { label: '中纪 V9', chipIndex: 28 }
      ],
      [
        { label: '所有后纪', chipIndex: 29 },
        { label: '后纪 C11', chipIndex: 30 },
        { label: '后纪 D6', chipIndex: 31 },
        { label: '后纪 S20', chipIndex: 32 },
        { label: '后纪 S8', chipIndex: 33 },
        { label: '后纪 T13', chipIndex: 34 },
        { label: '后纪 V10', chipIndex: 35 },
        { label: '后纪 V14', chipIndex: 36 },
        { label: '后纪 Y1', chipIndex: 37 },
        { label: '后纪 Y3', chipIndex: 38 }
      ]
    ],
    chips: ['全部', '所有古纪', '古纪 C14', '古纪 C7', '古纪 E2', '古纪 G14', '古纪 K12', '古纪 N18', '古纪 N19', '古纪 Q2', '所有前纪', '前纪 A10', '前纪 A9', '前纪 D8', '前纪 E7', '前纪 L4', '前纪 N11', '前纪 V13', '前纪 V15', '前纪 X1', '所有中纪', '中纪 C7', '中纪 K9', '中纪 N24', '中纪 P10', '中纪 S20', '中纪 T10', '中纪 V11', '中纪 V9', '所有后纪', '后纪 C11', '后纪 D6', '后纪 S20', '后纪 S8', '后纪 T13', '后纪 V10', '后纪 V14', '后纪 Y1', '后纪 Y3']
  },
  {
    title: '奖励轮次',
    chips: ['全部', 'A', 'B', 'C', '无轮次']
  },
  {
    title: '任务类型',
    chips: ['全部', '?', 'Infested资源回收', '中断', '传承种收割', '佩里塔叛乱', '元素转换', '刺杀', '前哨战', '叛逃', '圣殿突袭', '奥影母艇', '扬升', '拦截', '挖掘', '捕获', '无尽回廊', '歼灭', '爆发', '生存', '破坏', '祈运坛防御', '移动防御', '突袭', '虚空决战', '虚空洪流', '虚空覆涌', '资源储藏舱', '赏金', '追击', '间谍', '防御']
  },
  {
    title: '任务区域',
    chips: ['全部', '?', '冥王星', '双衍王境', '土星', '圣殿', '地球', '天王星', '扎里曼', '月球', '木星', '欧罗巴', '水星', '海王星', '深溯池', '火卫一', '火卫二', '火星', '虚空', '谷神星', '赛德娜', '赤毒要塞', '金星', '阋神星', '霍瓦尼亚', '面纱比邻星域']
  }
]

const tableHeaders = ['遗物名称', '任务区域', '人物类型', '任务节点', '掉落信息']
const DEFAULT_VISIBLE_COUNT = 200

const tableRows = require('./tableRows')

function buildVisibleRows(rows, limit = DEFAULT_VISIBLE_COUNT) {
  if (rows.length <= limit) {
    return rows
  }

  const buckets = [[], [], [], []]

  rows.forEach((row) => {
    if (row.relicName.startsWith('前纪')) {
      buckets[0].push(row)
      return
    }

    if (row.relicName.startsWith('古纪')) {
      buckets[1].push(row)
      return
    }

    if (row.relicName.startsWith('中纪')) {
      buckets[2].push(row)
      return
    }

    if (row.relicName.startsWith('后纪')) {
      buckets[3].push(row)
      return
    }
  })

  const visibleRows = []
  let bucketIndex = 0

  while (visibleRows.length < limit && buckets.some((bucket) => bucket.length)) {
    const bucket = buckets[bucketIndex % buckets.length]
    if (bucket.length) {
      visibleRows.push(bucket.shift())
    }
    bucketIndex += 1
  }

  return visibleRows
}

const filterMap = {
  '虚空遗物': {
    all: '全部',
    match: (row, label) => {
      if (label === '全部') {
        return true
      }

      if (label.startsWith('所有')) {
        return row.relicName.startsWith(label.replace('所有', ''))
      }

      return row.relicName === label
    }
  },
  '奖励轮次': {
    all: '全部',
    match: (row, label) => {
      if (label === '全部') {
        return true
      }

      const match = row.dropInfo.match(/[ABC]/)
      if (label === '无轮次') {
        return !match
      }

      return match ? match[0] === label : false
    }
  },
  '任务类型': {
    all: '全部',
    match: (row, label) => label === '全部' || row.missionType === label
  },
  '任务区域': {
    all: '全部',
    match: (row, label) => label === '全部' || row.region === label
  }
}

Page({
  baseRows: tableRows,
  data: {
    collapsed: false,
    tableHeaders,
    visibleRows: [],
    sections: sectionData.map((section) => ({
      ...section,
      activeChipIndex: 0
    }))
  },
  onLoad() {
    this.setData({
      visibleRows: buildVisibleRows(this.baseRows)
    })
  },
  handleCollapseToggle() {
    this.setData({
      collapsed: !this.data.collapsed
    })
  },
  handleChipSelect(event) {
    const { sectionIndex, chipIndex } = event.currentTarget.dataset
    const currentSectionIndex = Number(sectionIndex)
    const currentChipIndex = Number(chipIndex)
    const sections = this.data.sections.map((section, index) => {
      if (index !== currentSectionIndex) {
        return section
      }

      return { ...section, activeChipIndex: currentChipIndex }
    })
    const tableRows = this.getFilteredRows(sections)

    this.setData({
      sections,
      visibleRows: buildVisibleRows(tableRows)
    })
  },
  getFilteredRows(sections) {
    return this.baseRows.filter((row) => sections.every((section) => {
      const sectionFilter = filterMap[section.title]
      if (!sectionFilter) {
        return true
      }

      const activeChip = section.groups
        ? section.groups.flat().find((chip) => chip.chipIndex === section.activeChipIndex)
        : section.chips[section.activeChipIndex]

      if (!activeChip) {
        return true
      }

      return sectionFilter.match(row, activeChip.label || activeChip)
    }))
  }
})
