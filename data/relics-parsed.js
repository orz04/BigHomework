const rewardText = require('./relic-void-reward-text')

const RARITY_PRIORITY = {
  常见: 1,
  罕见: 2,
  稀有: 3
}

const ERA_PATTERN = /^(古纪|前纪|中纪|后纪|安魂|先锋)$/
const REWARD_PATTERN = /(古纪|前纪|中纪|后纪|安魂|先锋)\s+([^\s]+?(?:常见|罕见|稀有))/g
const PART_ORDER = ['枪管', '蓝图', '连接器', '枪机', '枪托']

function parseRewards(text) {
  const rows = []
  let currentItem = ''

  text.split(/\r?\n/).forEach((line) => {
    if (!line.trim()) return

    const columns = line.split('\t')
    let itemName = currentItem
    let part = columns[0]
    let rewardColumn = columns[1] || ''

    if (columns.length >= 3) {
      itemName = columns[0].trim()
      currentItem = itemName
      part = columns[1]
      rewardColumn = columns.slice(2).join(' ')
    }

    if (!itemName) return

    rows.push({
      itemName,
      part: (part || '奖励').trim(),
      rewards: parseRelics(rewardColumn)
    })
  })

  return groupRows(rows)
}

function parseRelics(text) {
  const rewards = []
  const pattern = new RegExp(REWARD_PATTERN)
  let match

  while ((match = pattern.exec(text)) !== null) {
    const era = match[1]
    const codeWithRarity = match[2]
    const rarity = codeWithRarity.endsWith('常见') ? '常见' : codeWithRarity.endsWith('罕见') ? '罕见' : '稀有'
    const code = codeWithRarity.slice(0, codeWithRarity.length - rarity.length)

    if (!ERA_PATTERN.test(era) || !code) continue

    rewards.push({
      name: `${era} ${code}`,
      rarity,
      rarityClass: `rarity-${RARITY_PRIORITY[rarity] || 1}`
    })
  }

  return rewards
}

function sortRows(rows) {
  return rows.slice().sort((left, right) => {
    const leftIndex = PART_ORDER.indexOf(left.part)
    const rightIndex = PART_ORDER.indexOf(right.part)

    if (leftIndex !== -1 && rightIndex !== -1) return leftIndex - rightIndex
    if (leftIndex !== -1) return -1
    if (rightIndex !== -1) return 1
    return left.part.localeCompare(right.part, 'zh-Hans-CN')
  })
}

function groupRows(rows) {
  const groupsByName = new Map()
  const orderedGroups = []

  rows.forEach((row) => {
    let group = groupsByName.get(row.itemName)
    if (!group) {
      group = { name: row.itemName, rows: [] }
      groupsByName.set(row.itemName, group)
      orderedGroups.push(group)
    }
    group.rows.push({ part: row.part, rewards: row.rewards })
  })

  return orderedGroups.map((group) => {
    const sortedRows = sortRows(group.rows)
    return {
      name: group.name,
      rows: sortedRows,
      rowCount: sortedRows.length
    }
  })
}

module.exports = parseRewards(rewardText)