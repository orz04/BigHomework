const masteryData = require('../../data/mastery')
const { resolveCloudImages } = require('../../utils/cloud-image')

function getRankIconByName(name, level) {
  const numericLevel = Number(level)

  if (String(name).includes('传奇') && numericLevel >= 31) {
    return `/images/levelimg/level${numericLevel}.png`
  }

  if (!Number.isNaN(numericLevel) && numericLevel >= 0) {
    return `/images/levelimg/level${numericLevel}.png`
  }

  const matchedLevel = String(name).match(/\d+/)
  if (!matchedLevel) {
    return ''
  }

  return `/images/levelimg/level${matchedLevel[0]}.png`
}

function buildRankTable(imageMap = {}) {
  return {
    ...masteryData.rankTable,
    rows: masteryData.rankTable.rows.map((row) => {
      const iconSrc = getRankIconByName(row.name, row.level)
      return {
        ...row,
        iconSrc: imageMap[iconSrc] || iconSrc
      }
    })
  }
}

Page({
  data: {
    intro: masteryData.intro,
    rankTable: buildRankTable(),
    groups: masteryData.groups.map((group, groupIndex) => ({
      ...group,
      expanded: groupIndex === 0,
      sections: group.sections.map((section) => ({
        ...section,
        activeExamIndex: 0
      }))
    }))
  },
  onLoad() {
    const iconPaths = masteryData.rankTable.rows.map((row) => getRankIconByName(row.name, row.level))

    resolveCloudImages(iconPaths).then((imageMap) => {
      this.setData({
        rankTable: buildRankTable(imageMap)
      })
    })
  },
  handleGroupToggle(event) {
    const { index } = event.currentTarget.dataset
    const groups = this.data.groups.map((group, currentIndex) => (
      currentIndex === index
        ? { ...group, expanded: !group.expanded }
        : group
    ))

    this.setData({ groups })
  },
  handleExamSelect(event) {
    const { groupIndex, sectionIndex, examIndex } = event.currentTarget.dataset
    const groups = this.data.groups.map((group, currentGroupIndex) => {
      if (currentGroupIndex !== groupIndex) {
        return group
      }

      return {
        ...group,
        sections: group.sections.map((section, currentSectionIndex) => (
          currentSectionIndex === sectionIndex
            ? { ...section, activeExamIndex: examIndex }
            : section
        ))
      }
    })

    this.setData({ groups })
  }
})
