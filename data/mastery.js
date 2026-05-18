const standardRankRows = Array.from({ length: 31 }, (_, level) => {
  if (level === 0) {
    return {
      id: 'rank-0',
      icon: '图标',
      name: '无等级',
      level: '0',
      nextRequirement: '',
      totalExp: '0',
      exam: '无',
      note: ''
    }
  }

  if (level === 1) {
    return {
      id: 'rank-1',
      icon: '图标',
      name: '启蒙者',
      level: '1',
      nextRequirement: '2500',
      totalExp: '2500',
      exam: '主武器考试',
      note: 'Corpus\n等级1-3'
    }
  }

  if (level === 2) {
    return {
      id: 'rank-2',
      icon: '图标',
      name: '白银启蒙者',
      level: '2',
      nextRequirement: '7500',
      totalExp: '10000',
      exam: '副武器考试',
      note: 'Grineer\n等级1-3'
    }
  }

  if (level === 3) {
    return {
      id: 'rank-3',
      icon: '图标',
      name: '黄金启蒙者',
      level: '3',
      nextRequirement: '12500',
      totalExp: '22500',
      exam: '近战考试',
      note: 'Grineer\n等级1-3'
    }
  }

  if (level === 4) {
    return {
      id: 'rank-4',
      icon: '图标',
      name: '信徒',
      level: '4',
      nextRequirement: '17500',
      totalExp: '40000',
      exam: '生存考试',
      note: 'infested\n等级12-15'
    }
  }

  if (level === 5) {
    return {
      id: 'rank-5',
      icon: '图标',
      name: '白银信徒',
      level: '5',
      nextRequirement: '22500',
      totalExp: '62500',
      exam: '终端入侵考试',
      note: '无'
    }
  }

  if (level === 6) {
    return {
      id: 'rank-6',
      icon: '图标',
      name: '黄金信徒',
      level: '6',
      nextRequirement: '27500',
      totalExp: '90000',
      exam: '目标跟踪考试',
      note: '无'
    }
  }

  if (level === 7) {
    return {
      id: 'rank-7',
      icon: '图标',
      name: '门徒',
      level: '7',
      nextRequirement: '32500',
      totalExp: '122500',
      exam: '歼灭考试',
      note: '所有派系\n等级10-15'
    }
  }

  if (level === 8) {
    return {
      id: 'rank-8',
      icon: '图标',
      name: '白银门徒',
      level: '8',
      nextRequirement: '37500',
      totalExp: '160000',
      exam: '爬墙考试',
      note: '无'
    }
  }

  if (level === 9) {
    return {
      id: 'rank-9',
      icon: '图标',
      name: '黄金门徒',
      level: '9',
      nextRequirement: '42500',
      totalExp: '202500',
      exam: '潜行考试',
      note: 'Grineer\n等级1'
    }
  }

  if (level === 10) {
    return {
      id: 'rank-10',
      icon: '图标',
      name: '探求者',
      level: '10',
      nextRequirement: '47500',
      totalExp: '250000',
      exam: '消失的平台',
      note: 'Grineer\n等级1'
    }
  }

  if (level === 11) {
    return {
      id: 'rank-11',
      icon: '图标',
      name: '白银探求者',
      level: '11',
      nextRequirement: '52500',
      totalExp: '302500',
      exam: '计时考试',
      note: '无'
    }
  }

  if (level === 12) {
    return {
      id: 'rank-12',
      icon: '图标',
      name: '黄金探求者',
      level: '12',
      nextRequirement: '57500',
      totalExp: '360000',
      exam: '旋转平台考试',
      note: 'Grineer\n等级1'
    }
  }

  if (level === 13) {
    return {
      id: 'rank-13',
      icon: '图标',
      name: '巡猎者',
      level: '13',
      nextRequirement: '62500',
      totalExp: '422500',
      exam: '高级消失的平台',
      note: 'Grineer\n等级1'
    }
  }

  if (level === 14) {
    return {
      id: 'rank-14',
      icon: '图标',
      name: '白银巡猎者',
      level: '14',
      nextRequirement: '67500',
      totalExp: '490000',
      exam: '高级歼灭考试',
      note: 'All Factions\n等级20-25'
    }
  }

  if (level === 15) {
    return {
      id: 'rank-15',
      icon: '图标',
      name: '黄金巡猎者',
      level: '15',
      nextRequirement: '72500',
      totalExp: '562000',
      exam: 'Grineer拦截考试',
      note: '三个发射塔\n等级15-20'
    }
  }

  if (level === 16) {
    return {
      id: 'rank-16',
      icon: '图标',
      name: '苍鹰',
      level: '16',
      nextRequirement: '77500',
      totalExp: '640000',
      exam: 'Corpus防御考试',
      note: '3波次'
    }
  }

  if (level === 17) {
    return {
      id: 'rank-17',
      icon: '图标',
      name: '白银苍鹰',
      level: '17',
      nextRequirement: '82500',
      totalExp: '722500',
      exam: '高等歼灭考试',
      note: '35个目标'
    }
  }

  if (level === 18) {
    return {
      id: 'rank-18',
      icon: '图标',
      name: '黄金苍鹰',
      level: '18',
      nextRequirement: '87500',
      totalExp: '810000',
      exam: 'Corpus防御考试',
      note: '5波次\n等级27-30'
    }
  }

  if (level === 19) {
    return {
      id: 'rank-19',
      icon: '图标',
      name: '猎虎',
      level: '19',
      nextRequirement: '92500',
      totalExp: '902500',
      exam: '潜入营救',
      note: 'Grineer\n等级15'
    }
  }

  if (level === 20) {
    return {
      id: 'rank-20',
      icon: '图标',
      name: '白银猎虎',
      level: '20',
      nextRequirement: '97500',
      totalExp: '1000000',
      exam: '飞行测试',
      note: '无'
    }
  }

  if (level === 21) {
    return {
      id: 'rank-21',
      icon: '图标',
      name: '黄金猎虎',
      level: '21',
      nextRequirement: '102500',
      totalExp: '1102500',
      exam: '高级歼灭',
      note: '无'
    }
  }

  if (level === 22) {
    return {
      id: 'rank-22',
      icon: '图标',
      name: '天龙',
      level: '22',
      nextRequirement: '107500',
      totalExp: '1210000',
      exam: '竞技场',
      note: '无'
    }
  }

  if (level === 23) {
    return {
      id: 'rank-23',
      icon: '图标',
      name: '白银天龙',
      level: '23',
      nextRequirement: '112500',
      totalExp: '1322500',
      exam: '移动占领目标点',
      note: ''
    }
  }

  if (level === 24) {
    return {
      id: 'rank-24',
      icon: '图标',
      name: '黄金天龙',
      level: '24',
      nextRequirement: '117500',
      totalExp: '1440000',
      exam: '指挥官',
      note: ''
    }
  }

  if (level === 25) {
    return {
      id: 'rank-25',
      icon: '图标',
      name: '圣者',
      level: '25',
      nextRequirement: '122500',
      totalExp: '1562500',
      exam: '可部署Archwing的歼灭',
      note: ''
    }
  }

  if (level === 26) {
    return {
      id: 'rank-26',
      icon: '图标',
      name: '白银圣者',
      level: '26',
      nextRequirement: '128500',
      totalExp: '1690000',
      exam: '高级移动占领目标点',
      note: ''
    }
  }

  if (level === 27) {
    return {
      id: 'rank-27',
      icon: '图标',
      name: '黄金圣者',
      level: '27',
      nextRequirement: '132500',
      totalExp: '1822500',
      exam: '通过获取点数并上交',
      note: '100点数'
    }
  }

  if (level === 28) {
    return {
      id: 'rank-28',
      icon: '图标',
      name: '大师',
      level: '28',
      nextRequirement: '138500',
      totalExp: '1960000',
      exam: '使用浓缩的热美亚的歼灭',
      note: '7个热美亚罐'
    }
  }

  if (level === 29) {
    return {
      id: 'rank-29',
      icon: '图标',
      name: '宗师',
      level: '29',
      nextRequirement: '142500',
      totalExp: '2102500',
      exam: '限时歼灭',
      note: '100名敌人\n等级50-100'
    }
  }

  if (level === 30) {
    return {
      id: 'rank-30',
      icon: '图标',
      name: '至崇宗师',
      level: '30',
      nextRequirement: '147500',
      totalExp: '2250000',
      exam: '歼灭生存',
      note: '5波次\n等级70-140'
    }
  }

  return {
    id: `rank-${level}`,
    icon: '图标',
    name: `段位${level}`,
    level: String(level),
    nextRequirement: '达到下一段位要求',
    totalExp: '待补充',
    exam: `段位${level}考试`,
    note: '待补充'
  }
})

const legendaryRankRows = [
  {
    id: 'legend-rank-1',
    icon: '图标',
    name: '传奇1',
    level: '31',
    nextRequirement: '147500',
    totalExp: '2397500',
    exam: '主武器歼灭生存',
    note: '3波次\nGrineer\n等级80-85'
  },
  {
    id: 'legend-rank-2',
    icon: '图标',
    name: '传奇2',
    level: '32',
    nextRequirement: '147500',
    totalExp: '2545000',
    exam: '副武器歼灭生存',
    note: '3波次\nCorpus/Grinner等级80-85'
  },
  {
    id: 'legend-rank-3',
    icon: '图标',
    name: '传奇3',
    level: '33',
    nextRequirement: '147500',
    totalExp: '2692500',
    exam: '近战歼灭生存',
    note: '3波次\nCorpus/Grinner等级80-85'
  },
  {
    id: 'legend-rank-4',
    icon: '图标',
    name: '传奇4',
    level: '34',
    nextRequirement: '147500',
    totalExp: '2840000',
    exam: '生存',
    note: '2分钟\n魔胎之境infested等级1--100'
  },
  {
    id: 'legend-rank-5',
    icon: '图标',
    name: '传奇5',
    level: '35',
    nextRequirement: '147500',
    totalExp: '2987500',
    exam: '高级骇入',
    note: '骇入全部类型控制台'
  },
  {
    id: 'legend-rank-6',
    icon: '图标',
    name: '传奇6',
    level: '36',
    nextRequirement: '147500',
    totalExp: '3135000',
    exam: '？',
    note: '？'
  }
]

module.exports = {
  intro: {
    title: '段位信息',
    desc: ''
  },
  rankTable: {
    columns: ['等级图标', '等级名称', '级数', '下一等级条件', '总共所需的经验值', '考试', '附注'],
    rows: [...standardRankRows, ...legendaryRankRows]
  },
  groups: [
    {
      title: '段位考试',
      sections: [
        {
          title: '段位1-10',
          exams: [
            {
              id: 'group-rank-1-0',
              label: '0-1',
              title: '主武器考试',
              content: '在这个考试中,玩家将使用他们的主武器歼灭来犯的3波敌人.\n\n刚开始,玩家出现在8个支柱的中间,之后在规定时间内必须消灭所有目标. 玩家分别要在1:00/2:00/3:00的时间内消灭3/5/8个敌人'
            },
            ...Array.from({ length: 9 }, (_, index) => ({
              id: `group-rank-1-${index + 1}`,
              label: `${index + 1}-${index + 2}`,
              title: index === 0 ? '副武器考试' : index === 1 ? '近战考试' : index === 2 ? '生存考试' : index === 3 ? '终端入侵考试' : index === 4 ? '目标跟踪考试' : index === 5 ? '歼灭考试' : index === 6 ? '爬墙考试' : index === 7 ? '潜行考试' : index === 8 ? '消失的平台' : 'XX考试',
              content: index === 0
                ? '在这个考试中,玩家将使用他们的副武器歼灭来犯的3波敌人.\n\n刚开始,玩家出现在8个支柱的中间,之后在规定时间内必须消灭所有目标. 玩家分别要在0:45/1:00/1:15的时间内消灭3/5/8个敌人.'
                : index === 1
                  ? '在这个考试中,玩家将使用他们的近战武器歼灭来犯的3波敌人.\n\n刚开始,玩家出现在4个支柱的中间,之后在规定时间内必须消灭所有目标. 玩家分别要在0:45/1:00/1:15的时间内消灭3/5/8个敌人.'
                  : index === 2
                    ? '在这个考试中,规定时间内玩家将会面对无限的Infested.\n\n刚开始,玩家出现在4个中枢掩体堆和4个中枢掩体墙中间,尝试在对方的攻势下存活1:30.\n\n提示\n离开中心太远将会被传送回刚开始的地点.\n可以使用隐身,而不进行战斗来完成考试.\n允许无限次坠崖来躲避Infested的袭击.'
                    : index === 3
                      ? '在这个考试中,玩家必须在1:45内破解2波终端\n刚开始,玩家出现在6个终端的中间.在这里,必须破解3个Grineer终端和3个Corpus终端.\n\n提示\n入侵失败可以重复入侵,只要在规定时间内完成破解所需终端.\n灭骸之刃所装备的相关MOD可以被正常触发,如自动破解.'
                      : index === 4
                        ? '在这个考试中,玩家需要快速准确的跟踪对应目标.\n\n玩家刚开始会在一堆金属球包围的黑暗房间中,站在一个明亮的圆形平台上. 玩家的镜头将会在每一轮开始时转向第一个目标,之后其他目标将陆续发亮,玩家将要把镜头对准目标.考试要求是在整个过程结束前完成所有目标的瞄准.中途失败将会从头开始,直到考试结束. 第一波在40秒内向红色发亮的球体射击5次,第二波在60秒要求击中10次,第三波则在80秒内击中15次.\n\n提示\n当你失误一次后,原来的记录和路径将被作废.一个新球将会出现在其他地方.你需要的是稳扎稳打瞄准目标,而不是去抢之后出现的目标点\n你需要足够弹匣的武器(避免中途换弹夹).霰弹也是一个好选择,每次测试算一轮,而不是小球算一轮.\n不会因为向错误的球体射击而导致重新定向红球的位置和重新挑战该回合.'
                        : index === 5
                          ? '在这个考试中,玩家将使用他们的歼灭来犯的3波敌人.\n\n刚开始,玩家出现在8个支柱的中间. 玩家有40秒/60秒/90秒的时间来依次消灭三波来犯10/15/20名敌人. Grineer,Corpus,Infested将同时来袭. 每波结束中间间隔5秒.\n\n提示\n尽量留在房间中心.\nMiniMapMod.png敌人感应 or MiniMapMod.png侦敌雷达 能够帮助你找到敌人.'
                          : index === 6
                            ? '在这个考试中,玩家将要在墙上跑酷时射击白色的球,同时到达3个平台上.任何一次坠落都会算作一次尝试.\n\n刚开始,玩家将会出现在一个被斜坡连接的平台上,射击白球将会产生路径.玩家在墙上跑酷过程中随时射击新出现的白球.玩家将会到达一个垂直的墙壁,在墙壁上跑酷过后蹬到达另一个平台,重复两次最后完成考试.\n\n提示\n请先练习.\n请把视角调到斜上45°左右再使用旋身飞跃.\n请考虑使用慢速移动战甲如 FrostIcon272.png Frost 或 RhinoIcon272.png Rhino,他们能确保你有更充足的时间来经行行动和射击 操控.\n推荐霰弹和机枪,它们有足够的打击面.不要使用精确武器如狙击.\n已经因射击红球而出现的平台在再次尝试中不会消失.'
                            : index === 7
                              ? '在这个考试中,玩家暗杀终结3个阶段敌人.玩家有3次机会通过考试,每被发现一次算失败1次.\n\n刚开始,玩家将会在一个灰色或者橙色的房间中,只允许装备近战武器.成功暗杀将会解锁下一个阶段.敌人行动路线会越来越复杂. 共13名敌人,第一阶段有3名,第二阶段4名,第三阶段6名.\n\n提示\n战甲主动技能被禁用,但战甲的被动技能仍然可以触发,如BansheeIcon272.png Banshee的消音.\n使用枪刃、战刃等可以进行远距离攻击的近战武器击杀敌人只要不被发现具体位置也算考试通过\n借助影生处决击杀的隐身能力可以较为轻松的通过测试。\nMiniMapMod.png敌人感应或者MiniMapMod.png侦敌雷达 能够帮助你找到敌人.\n尸体不会立刻消失,如果敌人发现则触发警觉状态,从而导致挑战失败而重新挑战.\n挑战失败消耗1次机会时,会从当前进行的阶段重新开始.'
                              : index === 8
                                ? '在这个考试中,玩家站立的平台将会在几秒钟之后消失,.\n\n刚开始,玩家将会在一个圆形平台上.你必须杀死旁边一圈高地上的所有敌人.当年玩家踏入平台上时,平台将会加速闪烁,8秒后消失. 玩家有3次机会通过考试,每被掉落下平台算失败1次.\n\n提示\n敌人总数总是15个.\n推荐使用无/快弹道大弹夹的武器.\n考虑下一个所要用到的平台,换平台能够提供更多时间.\n在这个考试中，玩家可以施放或使用warframe的技能.\n戴上耳机.\n使用ZephyrIcon272.png Zephyr的TailWind130xDark.png 顺风和TitaniaIcon272.png Titania的Razorwing130xDark.png 剃刀之翼能使此段位考试非常简单.\n伊格尼斯等短射距的武器无法攻击到过远距离的敌人.\n在准备阶段开始时的平台坠落也会消耗一次挑战机会.'
                                : '考试内容'
            }))
          ]
        },
        {
          title: '段位11-20',
          exams: Array.from({ length: 10 }, (_, index) => ({
            id: `group-rank-2-${index}`,
            label: `${index + 10}-${index + 11}`,
            title: index === 0 ? '计时考试' : index === 1 ? '旋转平台考试' : index === 2 ? '高级消失的平台' : index === 3 ? '高级歼灭考试' : index === 4 ? 'Grineer 拦截考试' : index === 5 ? 'Corpus 防御考试' : index === 6 ? '高等歼灭考试' : index === 7 ? 'Corpus 防御考试' : index === 8 ? '潜入营救' : index === 9 ? '飞行考验' : 'XX考试',
            content: index === 0
              ? '在这个考试中,玩家必须在规定时间内通过障碍训练场,打球可以获得额外时间.每个球提供5秒时间.初始时间为15秒.\n\n提示\n打开"动态光照"防止黑灯瞎火.并更好分辨那些伪装和背景.\n使用高速战甲如VoltIcon272.png Volt或LokiIcon272.png Loki提高任务完成率.\n使用TitaniaIcon272.png Titania可以直接用Razorwing130xDark.png 剃刀之翼飞过所有障碍，到达升降平台后可以直接前往终点处(若偏离标准线路过远会视为失败)\n使用ZephyrIcon272.png Zephyr的TailWind130xDark.png 顺风可以绕过部分障碍物,不经过普通过程就可以到达想去的地方,尤其是最后可能会遇到墙壁.\n一定要带上连射武器.有些球会移动,而在任务途中会遇到自动移动的平台.可能打不到球得不到时间而导致任务失败.\n使用装了MiniMapMod.png烈焰风暴的伊格尼斯是最简单的方法.他没有焦点而且可以一次持续攻击一片球.\n使用加强技能效率和持续时间的WukongIcon272.png Wukong，依靠CloudWalker130xDark.png 筋斗游云可快速快速越过障碍。'
              : index === 1
                ? '在这个考试中,玩家要消灭敌人,同时注意周围环境.\n\n刚开始,玩家会在一个类似旋转木马般结构的地图中,有两个同心环的柱子连接着中心平台.两个环之间有一组激光器,缓慢旋转的同时分割着平台上的空间.\n\n任务目标是在场景中消除外盘上的敌人.同时别被激光打到.共16名敌人\n\n提示\n任务计时. (参考更新12.4)\n激光移动速度并不快,可以自行预判.\n激光伤害很高,但任务途中可以进行损耗经验复活.\nRhinoIcon272.png Rhino的IronSkin130xDark.png 钢化皮肤可以有效防止被杀.\nWukongIcon272.png Wukong的被动技能不会被算作死亡.\n考虑使用精确武器,因为敌人的距离较远.\nTitaniaIcon272.png Titania的Razorwing130xDark.png 剃刀之翼形态到达激光不会扫描的地方可以完全无视激光向敌人攻击.'
                : index === 2
                  ? '与段位10考试类似，在这个考试中，玩家需要消灭敌人，但是敌人的机动性有很大提升。这要求玩家对高机动性敌人仍有较高的命中率。\n\n刚开始玩家将会在一个被墙环绕的平台上，玩家可以穿过它们。一旦玩家接触平台，它会开始闪烁，并在几秒钟之后消失（从下方接触平台也算会触发消失倒计时）。\n\n玩家有3次尝试机会，每被掉落下平台算失败1次。在场地最中心有三层临时平台。\n\n提示\n规划好平台使用顺序.\n如果你在准备阶段开始的平台上坠落也算1次失败.\nTitaniaIcon272.png Titania可使用Razorwing130xDark.png 剃刀之翼进行飞行，不受平台消失影响'
                  : index === 3
                    ? '在这个考试中,玩家将使用他们的武器歼灭来犯的3波敌人.\n\n在敌人消失前消灭他们.Grineer,Infested,Corpus将依次来袭. 分别为10/18/15名敌人,共43名敌人.每波完成间隔5秒,并自动进入下一个区域.\n\n提示\n小心高等敌人.\n守护被禁用.\n无时间限制.'
                    : index === 4
                      ? '这个考试,和常规拦截相同.\n\n场上共三个拦截点,开始时敌人对所有的拦截点的掌控随着你的开局行动的延迟对占领的程度有所不同,在地图上呈黄色状态.一旦你开始占领,敌人会立刻生成并占领其他两个拦截点,接下来对我方拦截点展开攻击.\n\n提示\n如果你开局准备占领拦截点的时候很晚,约10秒后所有拦截点均在敌人的控制下.\n武器建议安装穿透MOD,敌人占领拦截点时操作控制台时很可能被柱子挡住视野而无法兼顾已占领的拦截点.\n请注意拦截突然出现的大波敌人.\nLokiIcon272.png Loki部署Decoy130xDark.png 诱饵可以提高其威胁等级使敌人优先朝它集火.'
                      : index === 5
                        ? '这个考试,在平台上防御Corpus 3波进攻.\n\n提示\n以 FrostIcon272.png Frost（Warframe）将帮助您轻松完成这个测试。\n每完成回合会让地图中的石柱或挡板下降使战斗视野开阔,同时敌人生成的距离会越来越长.'
                        : index === 6
                          ? '这个考试,限时杀死30个 Infested 目标.\n\n提示\n地图中很多白色的地砖,这些白色的地砖上任意一块上面会随机生成1个球体,近战攻击这个球体来获得额外8秒的时间.初始时间为20秒.\n枪刃类近战武器的射击不能破坏球体\n神威触染的抛射物直接命中能够破坏球体\n目标并不是一次刷新，注意移动并寻找光球击破'
                          : index === 7
                            ? '这个考试,在平台上防御Corpus 5 波进攻.\n\n提示\n以FrostIcon272.png Frost将帮助您轻松完成这个测试。\n每完成回合会让地图中的石柱或挡板下降使战斗视野开阔,同时敌人生成的距离会越来越长.'
                            : index === 8
                              ? '这个考试需要玩家先在不被Grineer枪兵发现的情况下破坏6个球体，然后再护送一个救援目标至脱出点。\n\n提示：\n玩家总共有3次机会可以尝试，机会用尽后考试会以失败告终。\n主武器和副武器都无法使用，你只能使用近战武器。\n不能使用技能和物品栏.\n利用可远程攻击的武器，如战刃或西格玛&南极座\n利用BansheeIcon272.png Banshee的消音被动，搭配有远程攻击但会自身会发出噪音的近战武器，如蛇刃或救赎者，可以达到不错的效果。\n利用WispIcon272.png Wisp的“分子化”被动，以及较长攻击距离的鞭类武器，只要保持在空中，就可以在不被发现的情况下快速破坏球体、营救人质。\n利用影生在处决攻击后使玩家隐身的能力，在处决第一个背对着玩家的敌人后便可以快速消灭剩下的敌人并破坏球体、营救人质。\nMiniMapMod.png敌人感应 or MiniMapMod.png侦敌雷达 能够帮助你找到敌人.\n请注意,击杀敌人并不能立刻让尸体消失,敌人仍然因为发现尸体而进入警觉状态,从而被发现而浪费一次挑战机会.应当立刻清空该区域的敌人或绕开敌人的视线来破坏球体以营救人质.'
                              : index === 9
                                ? '这个考试需要玩家在10秒内飞到终点\n\n提示：\n冲刺时双击“冲刺”按键（默认Shift）可以使Archwing向一段距离直接推进。\n每个圆环增加2秒的时间.\n使用Itzal可以轻松过关。\n可以通过给Archwing安装MiniMapMod.png超越推进达到最大加速效果。'
                                : '考试内容'
          }))
        },
        {
          title: '段位21-30',
          exams: Array.from({ length: 10 }, (_, index) => ({
            id: `group-rank-3-${index}`,
            label: `${index + 20}-${index + 21}`,
            title: index === 0 ? '高等歼灭考试' : index === 1 ? '竞技场考试' : index === 2 ? '移动拦截' : index === 3 ? '指挥官破坏' : index === 4 ? '可部署Archwing的歼灭' : index === 5 ? '移动拦截' : index === 6 ? '收集积分' : index === 7 ? '消灭敌人' : index === 8 ? '消灭敌人' : index === 9 ? '歼灭生存' : 'XX考试',
            content: index === 0
              ? '这个考试，限时杀死35个 Grineer 目标。\n\n提示\n地图中的球体可以被近战武器破坏，给予15秒时间。初试时间为20秒。\n拥有大范围杀伤技能的战甲可以轻松通过测试。'
              : index === 1
                ? '在这个考试中，玩家歼灭三波敌人12/18/24。\n\n提示\n与塞德娜竞技场模式类似。\n三波特殊BUFF为速度加成/生命消耗/敌人等级上升。\n地图中有能量球。\n因为可以使用技能 AshIcon272.png Ash LokiIcon272.png Loki等可以轻松过关。\n不允许使用任何道具。\n允许战甲拥有初始能量。'
              : index === 2
                ? '在这个考试中，玩家需要在限定时间内接近多个根据不同路径移动的拦截点，直到所有拦截点的进度达到100%。\n\n提示\n在拦截点的进度未达到100%前，远离会导致该拦截点进度降低，直至0%。\n地图中会持续刷新敌人。\n可以使用物品栏，但不能切换指挥官。\n地图中的敌人不会掉落血球，可以使用MiniMapMod.png治愈归复或侍刃类武器搭配MiniMapMod.png并合大久和弓锁定目标回复血量。\n地图中的敌人也不会掉落能量球，因此可以使用MiniMapMod.png狂暴化和MiniMapMod.png猎人肾上腺素回复能量。\n可以使用有隐身技能的战甲，例如AshIcon272.png Ash LokiIcon272.png Loki等可以轻松过关，使用WukongIcon272.png Wukong的CloudWalker130xDark.png 筋斗游云可以回复血量并跟上拦截点的移动。\n使用LimboIcon272.png Limbo 利用被动遁入虚空，完全不受敌人攻击影响的特性，专心跟着拦截点移动，也可以轻松过关。\n使用TitaniaIcon272.png Titania的Razorwing130xDark.png 剃刀之翼形态不仅可以跟得上拦截点的速度，还可以因身体变小从而让敌人对你的命中率有所降低。'
              : index === 3
                ? '在这个考试中，场景中央会出现一个黑球，并在两端产生病变虫母，你的任务就是在保全自己的情况下破坏掉中央的黑球，黑球的生命值越少，形态也会越来越小。禁用物品栏。\n\n提示\n场景中的病变虫母会不断刷新，上限2。\n场景中的病变虫母会不断生成蛆虫，如果指挥官因此缠身不断损耗生命值，可以尝试坠崖来摆脱他们，坠崖不会让当前挑战重新开始，也不会因此考试失败。\n场景中会定时刷新出蓝色能量球，用以补充指挥官的虚空能量。\n未完成“第二场梦”的玩家在考试中也会强制使用指挥官模式。\n无法使用shift来滑铲加速或闪避敌人。'
              : index === 4
                ? '此测试要求玩家利用Archwing发射器部署的Archwing在各个浮动的平台间穿梭，在时间耗尽之前杀死50个敌人。玩家可以用近战武器攻击平台上的球体来延长时间。\n\n提示：\n开始时倒计时为29秒，每破坏一个球体会增加20秒，最高30秒。\n每一个平台都会有一个会重复出现的Archwing发射器，玩家可以在消灭了平台上的敌人后利用Archwing穿梭到另一个平台上。\n利用专精技能可以不使用Archwing完成测试。\nElytron的4技能毁灭弹头可以一次性清除整个平台上的敌人。\n使用拥有大范围杀伤技能的战甲或爆炸性武器也可以轻松清空一个平台的敌人。'
              : index === 5
                ? '在这个考试中，玩家需要在限定时间内接近多个根据不同路径移动的拦截点，直到所有拦截点的进度达到100%。\n\n提示\n与段位23考试不同，26段中的拦截点存在半空水平移动和垂直移动。\n在拦截点的进度未达到100%前，远离会导致该拦截点进度降低，直至0%。\n地图中会持续刷新敌人。\n使用高冲刺速度和隐身战甲更容易跟上拦截点。'
              : index === 6
                ? '在这个考试中，玩家需要在5分钟内收集满100个积分。\n\n提示\n地图中会出现红色的积分球(记3分)和蓝色的积分球(记1分)，和一定数量的敌人和卓越者。\n击杀卓越者必定会掉落红色积分球。\n限定时间为5分钟，敌人等级会随时间上涨。普通敌人基础等级25，卓越者基础等级30。5分钟后敌人的等级会+60级。\n持有的积分球越多，自身受到伤害的倍率越高。\n上交积分后会重置地图中的积分球，卓越者和卓越者掉落的积分球不受影响。\n积分球会在玩家靠近时接近玩家。死亡后会原地复活，且无敌10秒，失去所有已拾取的积分。'
              : index === 7
                ? '在这个考试中，玩家需要使用7枚以内的热美亚瓶罐脱去敌人的无敌状态并击杀60名敌人。\n\n提示\n地图中的热美亚会从场地中部靠近玩家的生成点，随后为右侧，左侧，再回到中间较远位置。\n每瓶热美亚在生成后只能存在20秒，每瓶热美亚在被消耗后的生成间隔约为10秒，热美亚自然消耗后的生成间隔为4秒。\n推荐使用能大量抓取敌人的战甲以提高每瓶热美亚脱去无敌的敌人数量。\n如NidusIcon272.png Nidus或VaubanIcon272.png Vauban。需要注意NidusIcon272.png Nidus的Larva130xDark.png 幼体在持续时间结束时会爆炸将怪物击退，因此持续较低情况下会起到反作用。\n特别注意：死亡后会原地复活，且无敌10秒，任何处于布娃娃状态的敌人都不会受到热美亚影响。'
              : index === 8
                ? '在这个考试中，玩家需要在14秒（在50击杀时变成11秒）内击杀100名敌人。\n\n提示\n每击杀一个敌人会刷新剩余时间到14秒。（在50击杀时变成11秒）\n每杀10个敌人，敌人会得到一些加成。\n击杀10个敌人，敌人等级+10级；击杀20个敌人，敌人等级增+20级.击杀30个敌人，敌人血量+50%；击杀40个敌人，敌人等级+30级；击杀50个敌人最长时间-3秒；击杀60个敌人，敌人等级+40级；击杀70个敌人，敌人护甲+50%；击杀80个敌人，敌人等级+50；击杀90个敌人，敌人等级+60。\n推荐使用能快速击杀敌人并难以死亡的战甲。\n如MesaIcon272.png Mesa\n特别注意：每次考试有3次挑战次数，死亡会扣除一次挑战次数，允许使用道具。'
              : index === 9
                ? '在这个考试中，玩家需要在类似生存任务的条件下（有维生装置的时间限制，归零则任务立即失败）进行5个轮次的歼灭，每个轮次需要击杀一定数量的普通敌人和Boss级敌人。\n\n提示\n必须激活出现的大型维生装置才能进入下一个轮次，它会在距离大平台外的小平台固定位置生成。\n击杀敌人有概率掉落维生装置，每个维生装置进度加10%。每个轮次要求击杀一定数量的普通敌人，完成普通敌人击杀后还需要击杀Boss级敌人。完成击杀目标后，地图中会出现一个大型维生装置（激活只需要一瞬间，不会像普通生存一样需要等待），激活后会增加35%的维生装置进度。\n轮次1：要求击杀20名普通敌人，2名Boss。Boss级敌人为仲裁者神盾无人机和火焰轰击者。\n轮次2：要求击杀25名普通敌人，4名Boss。Boss级敌人新增气雾虚能船员和大地船员。\n轮次3：要求击杀30名普通敌人，6名Boss。Boss级敌人新增朱诺护盾鱼鹰和堕落轰击者。\n轮次4：要求击杀35名普通敌人，8名Boss。Boss级敌人新增堕落重型机枪手和病变虫母。\n轮次5：要求击杀40名普通敌人，10名Boss。Boss级敌人新增毒化者和巨牙迫击炮轰击者，毒化者额外获得钢铁之路加成效果。\n每个轮次普通敌人的等级为75/80/85/90/100，卓越者敌人的等级为100/110/120/130/140，Boss级敌人均为卓越者。\n生成的普通敌人包括各个敌对派系的各种敌人，偶尔会出现仲裁者神盾无人机。\n死亡后会原地复活，且无敌10秒。\n允许使用生命/能量回复消耗品，但无法召唤携带的魅影。本关卡内技能召唤的魅影和普通敌人使用相同色调外观。\n推荐使用能快速击杀敌人的战甲，如MesaIcon272.png Mesa。\n允许携带同伴。'
                : '考试内容'
          }))
        },
        {
          title: '传奇段位1-10',
          exams: Array.from({ length: 10 }, (_, index) => ({
            id: `legend-group-${index}`,
            label: `传奇段位${index}-${index + 1}`,
            title: index === 0 ? '歼灭（主武器）' : index === 1 ? '歼灭（副武器）' : index === 2 ? '歼灭（近战武器）' : index === 3 ? '生存' : '',
            content: index === 0
              ? '在这个考试中，玩家需要使用主武器消灭三波80-85级Corpus大地敌人，所有战甲技能及指挥官已禁用。\n\n地图为一个被八根柱子包围的空间，玩家需要在1:00，1:30，2:00内消灭15，30，45名敌人。\n\n提示：\n测试中备弹不会消耗。\n由于敌人等级较高且无法使用技能，建议使用拥有较强防御能力的战甲例如InarosIcon272.png Inaros。\n允许在濒死时通过弥留之际召唤指挥官杀敌。'
              : index === 1
                ? '在这个考试中，玩家需要使用副武器消灭三波80-90级Grineer巨牙敌人，所有战甲技能及指挥官已禁用。\n\n地图为一个被八根柱子包围的房间，玩家需要在1:00，1:30，2:00内消灭10，20，30名敌人。\n\n提示：\n测试中备弹不会消耗。\n由于敌人等级较高且无法使用技能，建议使用拥有较强防御能力的战甲例如InarosIcon272.png Inaros。\n会出现拥有护盾轻型艇的护盾的敌人，护盾无法被穿透，但可以被范围攻击伤害到。\n允许在濒死时通过弥留之际召唤指挥官杀敌。'
              : index === 2
                ? '在这个考试中，玩家需要使用近战武器消灭三波80-90级Grineer巨牙敌人，所有战甲技能及指挥官已禁用。\n\n地图为一个被八根柱子包围的房间，玩家需要在1:00，1:30，2:00内消灭10，20，30名敌人。\n\n提示：\n由于敌人等级较高且无法使用技能，建议使用拥有较强防御能力的战甲例如InarosIcon272.png Inaros。\n允许在濒死时通过弥留之际召唤指挥官杀敌。'
              : index === 3
                ? '在这个考试中，玩家出现在4个中枢掩体堆和4个中枢掩体墙中间，需要生存2分钟，敌人为100级Infested灰种。\n\n提示：\n离开中心太远将会被传送回刚开始的地点。\n可以使用隐身，而不进行战斗来完成考试。'
                : ''
          }))
        }
      ]
    }
  ]
}
