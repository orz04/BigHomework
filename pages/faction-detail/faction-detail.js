const factions = require('../../data/factions')
const { resolveCloudImages } = require('../../utils/cloud-image')

const RANK_ICON_MAP = {
  '3 阿耶精华': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Aya.png?sign=adb7a93b2576a39ced79b9da0c5447d6&t=1780366733',
  '2 阿耶精华': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Aya.png?sign=adb7a93b2576a39ced79b9da0c5447d6&t=1780366733',
  '奥罗金催化剂': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/OrokinCatalyst.png?sign=cefccac911f84438680dfd87df826f05&t=1780366937',
  '奥罗金反应堆': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/OrokinReactor.png?sign=06e516a6ec83438b391b044246214191&t=1780367462',
  Forma: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Forma.png?sign=b2ed87b4c0e69cafb54241c89b01f77c&t=1780359072',
  '2 非晶态合金': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Morphics.png?sign=ba02996e1c73af94e42477944a011807&t=1780366993',
  '1,000 回收金属': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Salvage.png?sign=a09de7d01dea115626366f68092824b0&t=1780367029',
  '500 纳米孢子': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/NanoSpores.png?sign=2999787981544ce38084ae8043938a42&t=1780367056',
  '2 神经传感器': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/NeuralSensor.png?sign=4e35cd383ef0ce1afccd2b5eec12db27&t=1780367099',
  '500 电路': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Circuits.png?sign=f2fb058aae6fac0a7ae87d7a62bb9b3c&t=1780367141',
  '2 控制模块': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/ControlModule.png?sign=bb39b06c41c5cef63f01cfe9ec951d4e&t=1780367159',
  '2 爆燃安瓿': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/DetoniteAmpule.png?sign=1df78a6f791863e041b0556d6882eecd&t=1780368283',
  '100 聚合物束': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/PolymerBundle.png?sign=dfd05fe2798abc38bd9a817eb717ca53&t=1780367190',
  '2 镓': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Gallium.png?sign=0ce267a5dcc5b932ea215b01a96eab06&t=1780367205',
  '500 合金板': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AlloyPlate.png?sign=5891f767ef67f6950f7aac9cd4f1be90&t=1780367220',
  '2 电磁力场装置样本': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/FieldronSample.png?sign=659058c59b2bef89ec8b281c2a62ae21&t=1780367233',
  '1,000 铁氧体': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Ferrite.png?sign=f3dffa28e2f793e56c63f47b6db51385&t=1780367250',
  '500,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '250,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '100,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '50,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '30,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '10,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893'
}
const DETAIL_MAP = {
  '钢铁防线': {
    title: '钢铁防线',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/SteelMeridian.png?sign=46ac7fdf77beef1a00bf55bf85971bea&t=1780367505',
    relations: [
      {
        name: '血色面纱',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/RedVeil.png?sign=9573c0370ec73ffd8ee908793e07904e&t=1780367529',
        type: '盟友',
        standing: '+50% 声望',
        standingClass: 'ally'
      },
      {
        name: '新世间',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/NewLoka.png?sign=b80843369e428ea8701d1749bf699a9e&t=1780367541',
        type: '对立',
        standing: '-50% 声望',
        standingClass: 'opposed'
      },
      {
        name: '佩兰数列',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ThePerrinSequence.png?sign=9d2860c35b9c35e51e167d7c0b6e760d&t=1780367553',
        type: '敌人',
        standing: '-100% 声望',
        standingClass: 'enemy'
      }
    ],
    ranks: [
      { level: '5', title: '大将', tribute: '3 阿耶精华', tributeIcon: true, credit: '500,000', creditIcon: true, reward: '可以兑换战甲强化MOD、勇气系列武器、披饰和护甲、场景、表情动作、幻影装置场景', standing: '0 至 132,000' },
      { level: '4', title: '保卫者', tribute: '2 阿耶精华', tributeIcon: true, credit: '250,000', creditIcon: true, reward: '可以兑换武器强化MOD和登陆舱装饰', standing: '0 至 99,000' },
      { level: '3', title: '防御者', tribute: '奥罗金催化剂', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '可以兑换团队生命补给（大型）和曲翼武器部件', standing: '0 至 70,000' },
      { level: '2', title: '英勇', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '可以兑换虚空遗物组合包和曲翼武器部件', standing: '0 至 44,000' },
      { level: '1', title: '勇气', tribute: '2 非晶态合金', tributeIcon: true, credit: '30,000', creditIcon: true, reward: '可以兑换滚子魅影', standing: '0 至 22,000' },
      { level: '0', title: '起始', tribute: '1,000 回收金属', tributeIcon: true, credit: '10,000', creditIcon: true, reward: '可以使用反抗纹章', standing: '5,000' },
      { level: '-', title: '中立', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '-', standing: '-5,000 至 5,000' },
      { level: '-1', title: '不被认同', tribute: '奥罗金催化剂', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '受到卓越者滚子小队的追猎', standing: '-22,000 至 0' },
      { level: '-2', title: '敌人', tribute: '-', tributeIcon: false, credit: '-', creditIcon: false, reward: '受到卓越者滚子兵团的追猎', standing: '-44,000 至 0' }
    ]
  },
  '均衡仲裁者': {
    title: '均衡仲裁者',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ArbitersofHexis.png?sign=aa11a80ea57c6591939ae644a803564e&t=1780367580',
    relations: [
      {
        name: '中枢苏达',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/CephalonSuda.png?sign=f7d20e12616ac90f1d3708407f721c72&t=1780367592',
        type: '盟友',
        standing: '+50% 声望',
        standingClass: 'ally'
      },
      {
        name: '佩兰数列',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ThePerrinSequence.png?sign=fbd6e12564e5577c1c459685fe8d0bfe&t=1780367609',
        type: '对立',
        standing: '-50% 声望',
        standingClass: 'opposed'
      },
      {
        name: '血色面纱',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/RedVeil.png?sign=325608a77b4c24d50b6cf505fb08196b&t=1780367622',
        type: '敌人',
        standing: '-100% 声望',
        standingClass: 'enemy'
      }
    ],
    ranks: [
      { level: '5', title: '格言', tribute: '3 阿耶精华', tributeIcon: true, credit: '500,000', creditIcon: true, reward: '可以兑换战甲强化MOD、终极系列武器、披饰和护甲、场景、表情动作、幻影装置场景', standing: '0 至 132,000' },
      { level: '4', title: '改革者', tribute: '2 阿耶精华', tributeIcon: true, credit: '250,000', creditIcon: true, reward: '可以兑换武器强化MOD和登陆舱装饰', standing: '0 至 99,000' },
      { level: '3', title: '守序的', tribute: '奥罗金反应堆', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '可以兑换团队能量补给（大型）蓝图和曲翼武器部件', standing: '0 至 70,000' },
      { level: '2', title: '真实', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '可以兑换虚空遗物组合包和曲翼武器部件', standing: '0 至 44,000' },
      { level: '1', title: '有原则的', tribute: '2 神经传感器', tributeIcon: true, credit: '30,000', creditIcon: true, reward: '可以兑换堕落枪兵魅影', standing: '0 至 22,000' },
      { level: '0', title: '入门', tribute: '500 纳米孢子', tributeIcon: true, credit: '10,000', creditIcon: true, reward: '可以使用引道纹章', standing: '5,000' },
      { level: '-', title: '中立', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '-', standing: '-5,000 至 5,000' },
      { level: '-1', title: '欺诈者', tribute: '奥罗金反应堆', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '受到卓越者堕落枪兵小队的追猎', standing: '-22,000 至 0' },
      { level: '-2', title: '骗局', tribute: '-', tributeIcon: false, credit: '-', creditIcon: false, reward: '受到卓越者 堕落枪兵兵团的追猎', standing: '-44,000 至 0' }
    ]
  },
  '中枢苏达': {
    title: '中枢苏达',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/CephalonSuda.png?sign=8b037903bb2eda874c907e86cd242d0e&t=1780367639',
    relations: [
      {
        name: '均衡仲裁者',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ArbitersofHexis.png?sign=42a4906896dfcab47cc7941aaeff0520&t=1780367838',
        type: '盟友',
        standing: '+50% 声望',
        standingClass: 'ally'
      },
      {
        name: '血色面纱',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/RedVeil.png?sign=0742752772825e1fbe125a9265fe6755&t=1780367856',
        type: '对立',
        standing: '-50% 声望',
        standingClass: 'opposed'
      },
      {
        name: '新世间',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/NewLoka.png?sign=fb89fe0d74e275f4ff36c4e67458d4dd&t=1780367871',
        type: '敌人',
        standing: '-100% 声望',
        standingClass: 'enemy'
      }
    ],
    ranks: [
      { level: '5', title: '天才', tribute: '3 阿耶精华', tributeIcon: true, credit: '500,000', creditIcon: true, reward: '可以兑换战甲强化MOD、枢仪系列武器、披饰和护甲、场景、表情动作、幻影装置场景', standing: '0 至 132,000' },
      { level: '4', title: '智者', tribute: '2 阿耶精华', tributeIcon: true, credit: '250,000', creditIcon: true, reward: '可以兑换武器强化MOD和登陆艇装饰', standing: '0 至 99,000' },
      { level: '3', title: '聪明', tribute: '奥罗金催化剂', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '可以兑换团队护盾补给（大型）蓝图和曲翼武器部件', standing: '0 至 70,000' },
      { level: '2', title: '奇妙', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '可以兑换虚空遗物组合包和曲翼武器部件', standing: '0 至 44,000' },
      { level: '1', title: '主管', tribute: '2 控制模块', tributeIcon: true, credit: '30,000', creditIcon: true, reward: '可以兑换护盾鱼鹰魅影', standing: '0 至 22,000' },
      { level: '0', title: '入门', tribute: '500 电路', tributeIcon: true, credit: '10,000', creditIcon: true, reward: '可以使用质疑纹章', standing: '5,000' },
      { level: '-', title: '中立', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '-', standing: '-5,000 至 5,000' },
      { level: '-1', title: '瓦砾', tribute: '奥罗金催化剂', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '受到卓越者清道夫无人机小队追猎', standing: '-22,000 至 0' },
      { level: '-2', title: '废物', tribute: '-', tributeIcon: false, credit: '-', creditIcon: false, reward: '受到卓越者清道夫无人机兵团追猎', standing: '-44,000 至 0' }
    ]
  },
  '佩兰数列': {
    title: '佩兰数列',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ThePerrinSequence.png?sign=7c063aed0c4c63df95773c5c015c2bbb&t=1780367906',
    relations: [
      {
        name: '新世间',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/NewLoka.png?sign=fcc0047d946e32b4a60e1a6c9606ff69&t=1780367917',
        type: '盟友',
        standing: '+50% 声望',
        standingClass: 'ally'
      },
      {
        name: '钢铁防线',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/SteelMeridian.png?sign=c2ad0a5459e776656f570c1c680f01cf&t=1780367928',
        type: '对立',
        standing: '-50% 声望',
        standingClass: 'opposed'
      },
      {
        name: '均衡仲裁者',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ArbitersofHexis.png?sign=2e474e28cac03483f9686cdd2bcd043e&t=1780367940',
        type: '敌人',
        standing: '-100% 声望',
        standingClass: 'enemy'
      }
    ],
    ranks: [
      { level: '5', title: '伙伴', tribute: '3 阿耶精华', tributeIcon: true, credit: '500,000', creditIcon: true, reward: '可以兑换战甲强化MOD、保险系列武器、披饰和护甲、场景、表情动作、幻影装置场景', standing: '0 至 132,000' },
      { level: '4', title: '高级执行者', tribute: '2 阿耶精华', tributeIcon: true, credit: '250,000', creditIcon: true, reward: '可以兑换武器强化MOD和登陆艇装饰', standing: '0 至 99,000' },
      { level: '3', title: '执行者', tribute: '奥罗金反应堆', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '可以兑换团队能量补给（大型）蓝图和曲翼武器部件', standing: '0 至 70,000' },
      { level: '2', title: '高级助理', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '可以兑换虚空遗物组合包和曲翼武器部件', standing: '0 至 44,000' },
      { level: '1', title: '助理', tribute: '2 爆燃安瓿', tributeIcon: true, credit: '30,000', creditIcon: true, reward: '可以兑换恐鸟魅影', standing: '0 至 22,000' },
      { level: '0', title: '入门', tribute: '100 聚合物束', tributeIcon: true, credit: '10,000', creditIcon: true, reward: '可以使用前进纹章', standing: '5,000' },
      { level: '-', title: '中立', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '-', standing: '-5,000 至 5,000' },
      { level: '-1', title: '赔责', tribute: '奥罗金反应堆', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '受到卓越者恐鸟小队的追猎', standing: '-22,000 至 0' },
      { level: '-2', title: '注销', tribute: '-', tributeIcon: false, credit: '-', creditIcon: false, reward: '受到卓越者恐鸟兵团的追猎', standing: '-44,000 至 0' }
    ]
  },
  '血色面纱': {
    title: '血色面纱',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/RedVeil.png?sign=a6dd9f2cab27cb1d0fb52468202fab5e&t=1780367952',
    relations: [
      {
        name: '钢铁防线',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/SteelMeridian.png?sign=174b0042960df0583869b3d30a0b90b8&t=1780367963',
        type: '盟友',
        standing: '+50% 声望',
        standingClass: 'ally'
      },
      {
        name: '中枢苏达',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/CephalonSuda.png?sign=6d06cc0fc838f8cd5cacd6da421039d4&t=1780367973',
        type: '对立',
        standing: '-50% 声望',
        standingClass: 'opposed'
      },
      {
        name: '均衡仲裁者',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ArbitersofHexis.png?sign=e417ce9745650997098d3d818928c891&t=1780367986',
        type: '敌人',
        standing: '-100% 声望',
        standingClass: 'enemy'
      }
    ],
    ranks: [
      { level: '5', title: '崇高的', tribute: '3 阿耶精华', tributeIcon: true, credit: '500,000', creditIcon: true, reward: '可以兑换战甲强化MOD、绯红系列武器、披饰和护甲、场景、表情动作、幻影装置场景', standing: '0 至 132,000' },
      { level: '4', title: '崇敬的', tribute: '2 阿耶精华', tributeIcon: true, credit: '250,000', creditIcon: true, reward: '可以兑换武器强化MOD和登陆艇装饰', standing: '0 至 99,000' },
      { level: '3', title: '尊敬的', tribute: '奥罗金催化剂', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '可以兑换团队弹药补给（大型）蓝图和曲翼武器部件', standing: '0 至 70,000' },
      { level: '2', title: '荣耀的', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '可以兑换虚空遗物组合包和部分曲翼武器部件', standing: '0 至 44,000' },
      { level: '1', title: '受尊重的', tribute: '2 镓', tributeIcon: true, credit: '30,000', creditIcon: true, reward: '可以兑换疾冲者魅影', standing: '0 至 22,000' },
      { level: '0', title: '入门', tribute: '500 合金板', tributeIcon: true, credit: '10,000', creditIcon: true, reward: '可以使用刀刃纹章', standing: '5,000' },
      { level: '-', title: '中立', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '-', standing: '-5,000 至 5,000' },
      { level: '-1', title: '嫌疑', tribute: '奥罗金催化剂', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '受到卓越疾冲者小队追猎', standing: '-22,000 至 0' },
      { level: '-2', title: '腐败', tribute: '-', tributeIcon: false, credit: '-', creditIcon: false, reward: '受到卓越者疾冲者兵团追猎', standing: '-44,000 至 0' }
    ]
  },
  '新世间': {
    title: '新世间',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/NewLoka.png?sign=25682216a454f83cc5656690f5b691b2&t=1780368000',
    relations: [
      {
        name: '佩兰数列',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/ThePerrinSequence.png?sign=8391f8095f935e0b905ddc7a3c24319a&t=1780368015',
        type: '盟友',
        standing: '+50% 声望',
        standingClass: 'ally'
      },
      {
        name: '钢铁防线',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/SteelMeridian.png?sign=475227eb4f4c6f2fe1e3ee709f244d77&t=1780368027',
        type: '对立',
        standing: '-50% 声望',
        standingClass: 'opposed'
      },
      {
        name: '中枢苏达',
        image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/CephalonSuda.png?sign=a09f50b7b7d5380290e9cdfdd0a08849&t=1780368040',
        type: '敌人',
        standing: '-100% 声望',
        standingClass: 'enemy'
      }
    ],
    ranks: [
      { level: '5', title: '无瑕', tribute: '3 阿耶精华', tributeIcon: true, credit: '500,000', creditIcon: true, reward: '可以兑换战甲强化MOD、圣洁系列武器、披饰和护甲、场景、表情动作、幻影装置场景', standing: '0 至 132,000' },
      { level: '4', title: '纯洁', tribute: '2 阿耶精华', tributeIcon: true, credit: '250,000', creditIcon: true, reward: '可以兑换武器强化MOD和登陆艇装饰', standing: '0 至 99,000' },
      { level: '3', title: '仁者', tribute: '奥罗金反应堆', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '可以兑换团队生命补给（大型）的蓝图和曲翼武器的部件', standing: '0 至 70,000' },
      { level: '2', title: '丰富多样', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '可以兑换虚空遗物组合包和曲翼武器部件', standing: '0 至 44,000' },
      { level: '1', title: '人道', tribute: '2 电磁力场装置样本', tributeIcon: true, credit: '30,000', creditIcon: true, reward: '可以兑换远古治愈者魅影', standing: '0 至 22,000' },
      { level: '0', title: '起始', tribute: '1,000 铁氧体', tributeIcon: true, credit: '10,000', creditIcon: true, reward: '可以使用献祭纹章', standing: '5,000' },
      { level: '-', title: '中立', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, reward: '-', standing: '-5,000 至 5,000' },
      { level: '-1', title: '受谴责者', tribute: '奥罗金反应堆', tributeIcon: true, credit: '100,000', creditIcon: true, reward: '受到卓越者远古治愈者小队追猎', standing: '-22,000 至 0' },
      { level: '-2', title: '被放逐者', tribute: '-', tributeIcon: false, credit: '-', creditIcon: false, reward: '受到卓越者远古治愈者兵团追猎', standing: '-44,000 至 0' }
    ]
  }
}

function resolveRankIconPath(value, enabled) {
  if (!enabled) {
    return ''
  }

  return RANK_ICON_MAP[value] || ''
}

function collectDetailImagePaths(detail) {
  return [
    detail.image,
    ...(detail.relations || []).map((item) => item.image),
    ...(detail.ranks || []).flatMap((rank) => [
      resolveRankIconPath(rank.tribute, rank.tributeIcon),
      resolveRankIconPath(rank.credit, rank.creditIcon)
    ])
  ].filter(Boolean)
}

function buildDetail(detail, imageMap = {}) {
  if (!detail) {
    return null
  }

  return {
    ...detail,
    image: imageMap[detail.image] || detail.image,
    relations: (detail.relations || []).map((relation) => ({
      ...relation,
      image: imageMap[relation.image] || relation.image
    })),
    ranks: (detail.ranks || []).map((rank) => ({
      ...rank,
      tributeIconUrl: imageMap[resolveRankIconPath(rank.tribute, rank.tributeIcon)] || resolveRankIconPath(rank.tribute, rank.tributeIcon),
      creditIconUrl: imageMap[resolveRankIconPath(rank.credit, rank.creditIcon)] || resolveRankIconPath(rank.credit, rank.creditIcon)
    }))
  }
}

Page({
  data: {
    detail: null,
    missing: false
  },
  onLoad(options) {
    const name = decodeURIComponent(options.name || '')
    const detail = DETAIL_MAP[name]

    if (!detail) {
      this.setData({ missing: true })
      return
    }

    wx.setNavigationBarTitle({
      title: detail.title
    })

    const paths = collectDetailImagePaths(detail)

    this.setData({
      detail: buildDetail(detail)
    })

    resolveCloudImages(paths).then((imageMap) => {
      this.setData({
        detail: buildDetail(detail, imageMap)
      })
    })
  }
})
