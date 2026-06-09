const masteryData = require('../../data/mastery')
const { resolveCloudImages } = require('../../utils/cloud-image')

const LEVEL_ICON_MAP = {
  0: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level0.png?sign=b6f2746bda2259defd00d0b54daa4f54&t=1780131279',
  1: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level1.png?sign=108ff05357c4507364be484f022c0d8b&t=1780131608',
  2:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level2.png?sign=6a385f70500f23c6475622e280bf8673&t=1780139751',
  3:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level3.png?sign=3c0702eae70c2e08f0e99d19da253061&t=1780139844',
  4:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level4.png?sign=994e2621331c53ab3fdf8719e75b5534&t=1780139857',
  5:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level5.png?sign=887f2fbca4fafcaee64d9982fc5aa12a&t=1780139876',
  6:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level6.png?sign=46c65a98d1ffd242960475f5c72b1a9b&t=1780139886',
  7:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level7.png?sign=f07d50ea64aa7481eaf213092f4a6163&t=1780139895',
  8:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level8.png?sign=562e9ba35fdcda851f571d44213ad7ad&t=1780139909',
  9:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level9.png?sign=aef1a9999f43251ff615bdfa440c0188&t=1780139933',
  10:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level10.png?sign=b5aef7ff8bdb3c08757f0433bb4f929e&t=1780139945',
  11:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level11.png?sign=6f6214555b378ad48e74c2b34d50c73a&t=1780140140',
  12:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level12.png?sign=dd56a1f3745d07dc934f77f4475b365a&t=1780140149',
  13:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level13.png?sign=76169a7cb1a32c96ef7083f9750c3d9f&t=1780140158',
  14:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level14.png?sign=8c4f9033f9cef42cca9bad0cddb4adfc&t=1780140167',
  15:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level15.png?sign=781d22a447e97d9a4b287ccc914c852e&t=1780140175',
  16:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level16.png?sign=322c8a3f4fc4cb980a7e1c4909186541&t=1780140183',
  17:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level17.png?sign=cb3a9333dda6392c38a346dc0ced7e6c&t=1780140190',
  18:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level18.png?sign=f39e5eaed181238858c21b7e5058d234&t=1780140198',
  19:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level19.png?sign=b6b74a5ef36d39a56c8551d6d0f693f7&t=1780140205',
  20:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level20.png?sign=ef40d42bd2e1dfada827446f56e6395a&t=1780140212',
  21:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level21.png?sign=996d41298a27b8da26c98ec83eaf86d7&t=1780140332',
  22:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level22.png?sign=14d102a022527bcfe37f238f1d7999d5&t=1780140340',
  23:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level23.png?sign=791c56f65298c6d504b7875827c3ead8&t=1780140353',
  24:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level24.png?sign=42f59b31716397cfc99d42a60696bf3b&t=1780140362',
  25:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level25.png?sign=70f5e9ffe56fad854aa5d4c1925b42e8&t=1780140374',
  26:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level26.png?sign=03077884b278adddca1562789901fe7a&t=1780140383',
  27:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level27.png?sign=679fdadaa3cb4f581e81df6123044741&t=1780140402',
  28:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level28.png?sign=3abf3c49634fef01f40840fb77574fb6&t=1780140409',
  29:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level29.png?sign=f275cb927f29a8e81b3922fc45405b05&t=1780140418',
  30:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level30.png?sign=7eafc24f6adb94596dbaaee05da5c52e&t=1780140428',
  31:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level31.png?sign=4331e5ea1cf83bca650efd7ab1e3eb6d&t=1780140484',
  32:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level32.png?sign=6ab77cca79ca5841197eb79e914c948b&t=1780140492',
  33:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level33.png?sign=12b2ca838b23c5a93c9b6c36bb69c8c8&t=1780140500',
  34:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level34.png?sign=a6283dadf7daea56c4aeecbec570bd4f&t=1780140509',
  35:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level35.png?sign=6e49d75cc4a8f4ad4067bb41a9f71961&t=1780140569',
  36:'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/levelimg/level36.png?sign=9b0c7f30899dcec13e906dc356f443c8&t=1780140581'
}

function getRankIconByName(name, level) {
  const numericLevel = Number(level)

  if (!Number.isNaN(numericLevel) && LEVEL_ICON_MAP[numericLevel]) {
    return LEVEL_ICON_MAP[numericLevel]
  }

  const matchedLevel = String(name).match(/\d+/)
  if (matchedLevel) {
    const matchedNumericLevel = Number(matchedLevel[0])
    if (LEVEL_ICON_MAP[matchedNumericLevel]) {
      return LEVEL_ICON_MAP[matchedNumericLevel]
    }
  }

  return ''
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

