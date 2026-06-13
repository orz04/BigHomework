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
  '2 神经元': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Neurodes.png?sign=d16a087a6bfc08f41ddc7cd76058f326&t=1780489107',
  '100 生物质': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Plastids.png?sign=7aa746b37b5e2661ac8f9440a77f81a1&t=1780489146',
  '500,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '1,000,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '250,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '200,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '100,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '50,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '30,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '25,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '10,000': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893',
  '5,000':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=3010ff0ea5939821cd358764c14e06f4&t=1780358893'
}

const STANDING_ICON_URL = 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Standing.png?sign=bb14a0f2719fe533ba4369100962cf54&t=1779240504'

// 多贡品行场景：按贡品物品名称解析对应图标 URL（不带前缀数量）
const TRIBUTE_NAME_ICON_MAP = {
  '灵息石': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/BreathOfTheEidolon.png?sign=16016ca14e8074dc32cadf3e943cc38e&t=1779238071',
  '心智晶核': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/CetusWisp.png?sign=964f07d71fcd8d9da82e31fccdab0110&t=1779445496',
  '希图斯幽魂': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/CetusWisp.png?sign=964f07d71fcd8d9da82e31fccdab0110&t=1779445496',
  '诺格鱼脑': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/HeartNyth.png?sign=96f74c6b8c540bb5e67d49282a3a07a2&t=1779447324',
  '阴暗鳐肝脏': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/MurkrayLiver.png?sign=fb13ca5a43f93a167ab88419a76648fa&t=1779448214',
  '钢化铁岩': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/CopriteAlloy.png?sign=6b8426bafe5a79693c28d58cd3a00037&t=1779445556',
  '泪滴形石青': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/TearAzurite.png?sign=3c8e6cbc98535cd1f0f6e943cd056a69&t=1779538150',
  '伊莱体': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Iradite.png?sign=88c809976aa26fa78b1d6dc8c9403052&t=1779445609',
  '葛克度': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Grokdrul.png?sign=ffcd81bd7ad898af2f48d075e7077621&t=1779445423',
  '完整的Sentient核心': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/IntactSentientCore.png?sign=ac556a7d71c504fcd9d8bfc443b212e5&t=1779707852',
  '圣油环形装置': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/LazuliteToroid.png?sign=50c6709edc4386ef5f327f960f157d49&t=1779523152',
  '索拉环形装置': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/SolaToroid.png?sign=f9b5fbcc6a8b3d0a29358fc1e08d9010&t=1779236545',
  '告达环形装置': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/CaldaToroid.png?sign=9440055a12bac3db362b01d7e50a131b&t=1779236588',
  '维加环形装置': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VegaToroid.png?sign=3193ee2406aa3e86be08705c10581f59&t=1779236564',
  '陀螺磁抵系统': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/GyromagSystems.png?sign=4c185e501db47b0e7ca01a53eac9e615&t=1779763993',
  '萨里姆突变原': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/ThaumicDistillate.png?sign=df109723088dd81fea024396cb950341&t=1779763875',
  '虚空光体': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VoidplumeQuill.png?sign=0b16b9bf49096d223b48df0d59c20dc4&t=1779522203',
  '虚空羽翎': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VoidplumeQuill.png?sign=0b16b9bf49096d223b48df0d59c20dc4&t=1779522203',
  '虚空刺翎': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VoidplumeQuill.png?sign=0b16b9bf49096d223b48df0d59c20dc4&t=1779522203',
  '虚空冠翎': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VoidplumeQuill.png?sign=0b16b9bf49096d223b48df0d59c20dc4&t=1779522203',
  '虚空翼翎': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VoidplumeQuill.png?sign=0b16b9bf49096d223b48df0d59c20dc4&t=1779522203',
  '虚空绒翎': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VoidplumeQuill.png?sign=0b16b9bf49096d223b48df0d59c20dc4&t=1779522203',
  '凶魂浆质': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/ThraxPlasm.png?sign=7e7d96539070c184fd835f58ea3c40d1&t=1779522105',
  '英择谛灯笼': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/EntratiLanthorn.png?sign=4cc71a9d53173d9ac304e41b5e097410&t=1779265808',
  '铁氧体': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Ferrite.png?sign=f3dffa28e2f793e56c63f47b6db51385&t=1780367250',
  '合金板': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AlloyPlate.png?sign=5891f767ef67f6950f7aac9cd4f1be90&t=1780367220',
  '克苏尔卷须': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AlloyPlate.png?sign=5891f767ef67f6950f7aac9cd4fma',
  '马利可': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AlloyPlate.png?sign=5891f767ef67f6950f7aac9cd4f1be90&t=1780367220',
  '炎晶': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AlloyPlate.png?sign=5891f767ef67f6950f7aac9cd4f1be90&t=1780367220',
  '鱼鳞': 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AlloyPlate.png?sign=5891f767ef67f6950f7aac9cd4f1be90&t=1780367220',
  '尼蒐荚':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Nistlepod.png?sign=49d5bb280e31c83db2fa4bc3c46dcfb0&t=1781314536',
  '夜灵碎片':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/EidolonShard.png?sign=585cb00ed952772c982754007b32d18a&t=1781314584',
  '家族债务债券':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Familial_Debt_Bond.png?sign=cf776979dd7e57cfd3239f6ced73e848&t=1781314684',
  '预支债务债券':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Advances_Debt_Bond.png?sign=a30be1db78973ae3d57413f349ebd8a6&t=1781314713',
  '医疗债务债券':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Medical_Debt_Bond.png?sign=acacc0eed471032680e412820a1b229e&t=1781314751',
  '培训债务债券':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/TrainingDebt_Bond.png?sign=4bf2ac513ebc391810a243f11ad68b35&t=1781314864',
  '斥极系统':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/RepellerSystems.png?sign=4fb3627dd6768a72aba869ebc7e5b2c5&t=1781314967',
  '大气系统':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AtmoSystems.png?sign=b5fe27d4d7f53006879206f4eb8762f8&t=1781315011',
  '玻璃窗碎片':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Seriglass_Shard.png?sign=cc0c667c212898b25dc162e86a12f7f5&t=1781315064',
  '"母亲"石印':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Mother_Token.png?sign=64ece86777f875f60a71f681a52d0234&t=1781315095',
  '"父亲"石印':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/FatherToken.png?sign=b70942f0fb01c304a6cc7bfcd8ecb0c9&t=1781315147',
  '"儿子"石印':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/SonToken.png?sign=e4fdafcaa35eff4db23657cf1d1d392d&t=1781315256',
  '"女儿"石印':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/DaughterToken.png?sign=ae84b1972b2851ab6c0e457b3b2c24e0&t=1781315773',
  '阿里奥利突变原':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Arioli_Mutagen.png?sign=fd1475f790c79ba1ead700764e46405e&t=1781315370',
  '狡黠狐帕菲拉标签':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/WeakenedCrescentVulpaphyla.png?sign=7959e5412438a53c999427f185e653b4&t=1781315523',
  '宰相扑猎达赛标签':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VizierPredasite.png?sign=814ea2b568f702f7378bec8fe526120f&t=1781315560',
  '卡提努之爪刀刃蓝图':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Keratinos.png?sign=a1162dd7fbef75b75f73672faa863e94&t=1781315615',
  '良性感染肿瘤':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Benign_Infested_Tumor.png?sign=cb2399df610d13b39f69786404adc80a&t=1781315643',
  '发酵鱼鳔':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Ferment_Bladder.png?sign=d985fa8619b985f281de76aa0813edd7&t=1781315677',
  'Orokin战意矩阵装置':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Orokin_Animus_Matrix.png?sign=c874c466e25fb6e08b4b7f301b4257e8&t=1781316041',
  '灭杀者枪管蓝图':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Trumna.png?sign=98f1c3bc644d4aa7c808e218ab0bb612&t=1781316071',
  '虚空胶丸':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/VoidgelOrb.png?sign=e0844664a57bd47f35553470a908783d&t=1781315996',
  'Orokin弹道矩阵装置':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/OrokinBallisticsMatrix.png?sign=3ee1a5d53d0d24678e5e981c86cd1404&t=1781316143',
  '追击者枪管蓝图':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Sepulcrum.png?sign=c16c260c7278bdfcf8f6e89f74aac459&t=1781316193',
  'Orokin定向矩阵装置':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/OrokinOrientationMatrix.png?sign=cc72bdc9801e97b66754a93e85c70d9d&t=1781316259',
  '邪莫斯枪管蓝图':'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Zymos.png?sign=cf053d621b526fb977d6396ac9196f39&t=1781316307'
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
  },
  '武形秘仪': {
    title: '武形秘仪',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Conclave.png?sign=3873a191774eb640963f764f7b6e6e6c&t=1780370077',
    intro: [
      '武形秘仪是由Teshin领导的一个中立的集团，同时他会驻留在每个星球的中继站上。Teshin负责管理武形秘仪中的玩家间对抗系统，为那些在武形秘仪中战斗的战士提供奖励以此来激励他们。',
      '自更新18.2.3之后，武形秘仪将不再需要纹章才能在战斗中获得其集团声望，且该纹章仍可以在PvE模式下获取来作为玩家的自定义装饰。'
    ],
    ranks: [
      { level: '5', title: '台风', tribute: '100 杜卡德金币', tributeIcon: false, credit: '500,000', creditIcon: true, standingCost: '99,000 声望', reward: '可以获取秘仪武器外观及其他道具，以及新增武形秘仪配置槽位。并可以免费领取一个台风级的秘仪MOD或者纹章。', standing: '0 至 132,000' },
      { level: '4', title: '飓风', tribute: '奥罗金催化剂', tributeIcon: true, credit: '250,000', creditIcon: true, standingCost: '70,000 声望', reward: '可以使用战甲/武器的稀有秘仪MOD，以及新增武形秘仪配置槽位。并可以免费领取一个飓风级的纹章。', standing: '0 至 99,000' },
      { level: '3', title: '暴风', tribute: '奥罗金反应堆', tributeIcon: true, credit: '100,000', creditIcon: true, standingCost: '44,000 声望', reward: '可以使用强化秘仪MOD，以及新增武形秘仪配置槽位。并可以免费领取一个暴风级的秘仪MOD或者纹章。', standing: '0 至 70,000' },
      { level: '2', title: '旋风', tribute: 'Forma', tributeIcon: true, credit: '50,000', creditIcon: true, standingCost: '22,000 声望', reward: '可以使用稀有秘仪MOD，以及新增武形秘仪配置槽位。并可以免费领取一个旋风级的秘仪MOD或者纹章。', standing: '0 至 44,000' },
      { level: '1', title: '西北风', tribute: '2 神经元', tributeIcon: true, credit: '30,000', creditIcon: true, standingCost: '5,000 声望', reward: '可以使用罕见秘仪MOD，以及新增武形秘仪配置槽位。并可以免费领取一个西北风级的秘仪MOD或者纹章。', standing: '0 至 22,000' },
      { level: '0', title: '入门', tribute: '100 生物质', tributeIcon: true, credit: '10,000', creditIcon: true, standingCost: '0 声望', reward: '可以使用武形秘仪纹章。', standing: '0 至 5,000' }
    ]
  },
  '中枢SIMARIS': {
    title: '中枢SIMARIS',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/CephalonSimaris.png?sign=b80f94403781662bea486b252f44d60f&t=1780370091',
    intro: [
      '中枢Simaris位于任意Tenno中继站的圣殿之中，作为知识的追求者，他的最终目标是通过结合仪式来将生物“永生”，解构成数据永恒地存在在圣殿内。',
      '同其他集团，中枢Simaris也有着自己的声望系统，玩家可以通过累积声望来同其交换独有物品。但与其他集团不同的是，玩家获取声望的方式是通过对敌方单位使用结合扫描器，每次扫描后Simaris将提供少量的声望回报玩家。在通过对结合仪式目标进行扫描的时候，玩家可以获得更多的声望，结合仪式目标是由Simaris特别指定的在任务中可发现的敌方单位：它们通常都有着蓝色的轮廓，而且必须扫描其身体上四个小节点后才能够完成，而每个任务只会有一个结合仪式目标。',
      '中枢Simaris是一个中立的集团，获取他的声望并不会影响对其他集团的等级。与那些集团一样，Simaris的声望会有一个每日的上限（精通段位每升一级会增加500点的容量，初始为16,000），但每日结合仪式目标任务的“常规”奖励并不算在这个额度之上。'
    ]
  },
  'OSTRON': {
    title: 'OSTRON',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Ostron.png?sign=d0f2c5f7185479d2e6fffc81c6d09075&t=1780370103',
    intro: [
      { text: 'Ostron人是一群由自由贸易商、摊贩与幸存者紧密结合一起的群体，他们称希图斯为家园。希图斯小镇环绕着一座Orokin堡垒所建造，这座堡垒不仅为他们提供保护，更是滋养着他们。', quote: true },
      'Ostron人定居于地球的夜灵平野南部的希图斯，他们是一群在Unum的Orokin堡垒的庇护下顽强生活的原住民。Unum的庇护确保了希图斯的安全，这个小镇在起源星系里担任着一个贸易中心的角色并为每一个向往和平的人提供庇护所。',
      '作为一个集团，Ostron人有着可以同镇上NPC交换报酬的单独声望，声望可以通过希图斯的村民完成各种任务来获取：比如完成赏金、侵袭任务；向他们捐赠包括捕鱼和采矿活动获取的各种物品。Ostron是一个中立的集团，同他们关系的晋升并不会影响玩家在其他集团的身份。'
    ],
    ranks: [
      {
        level: '5', title: '情同手足',
        tributes: [
          { count: 1, name: '灵息石' },
          { count: 1, name: '心智晶核' },
          { count: 1, name: '诺格鱼脑' },
          { count: 1, name: '克苏尔卷须' }
        ],
        credit: '200,000', creditIcon: true, standingCost: '99,000 声望',
        reward: '可兑换等级5的商品；免费获取一个NPC提供的等级5的商品', standing: '0 至 132,000'
      },
      {
        level: '4', title: '苏拉（朋友）',
        tributes: [
          { count: 10, name: '马利可' },
          { count: 40, name: '钢化铁岩' },
          { count: 5, name: '阴暗鳐肝脏' }
        ],
        credit: '100,000', creditIcon: true, standingCost: '70,000 声望',
        reward: '可兑换等级4的商品；免费获取一个NPC提供的等级4的商品', standing: '0 至 99,000'
      },
      {
        level: '3', title: '受到信任',
        tributes: [
          { count: 1, name: '希图斯幽魂' },
          { count: 5, name: '马利可' }
        ],
        credit: '50,000', creditIcon: true, standingCost: '44,000 声望',
        reward: '可兑换等级3的商品；免费获取一个NPC提供的等级3的商品；为Zaw镀金；希图斯居民新的友好对话', standing: '0 至 70,000'
      },
      {
        level: '2', title: '访客',
        tributes: [
          { count: 10, name: '泪滴形石青' },
          { count: 40, name: '炎晶' },
          { count: 60, name: '鱼鳞' }
        ],
        credit: '25,000', creditIcon: true, standingCost: '22,000 声望',
        reward: '可兑换等级2的商品；免费获取一个NPC提供的等级2的商品', standing: '0 至 44,000'
      },
      {
        level: '1', title: '异世者',
        tributes: [
          { count: 25, name: '尼蒽荬' },
          { count: 25, name: '伊莱体' },
          { count: 25, name: '葛克度' }
        ],
        credit: '10,000', creditIcon: true, standingCost: '5,000 声望',
        reward: '可兑换等级1的商品；免费获取一个NPC提供的等级1的商品', standing: '0 至 22,000'
      },
      {
        level: '0', title: '中立',
        tribute: '—', tributeIcon: false,
        credit: '—', creditIcon: false,
        reward: '兑换基础物品', standing: '0 至 5,000'
      }
    ]
  },
  '夜羽': {
    title: '夜羽',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/TheQuills.png?sign=b22de12b5071c1b99ad7558b190bbb9d&t=1780370197',
    intro: [
      '夜羽是一个有秩序的神秘团体，服务于同样神秘的Unum——一个存在于地球希图斯的Orokin塔内的人。他们与Ostron人所赞美的Unum有着非常密切的关系，并且他们似乎对Tenno的秘密有所了解。据说他们能够预测未来，通过与其信息收集能力相结合，夜羽们通过Tenno先发制人地终止了外界对希图斯的威胁。',
      {
        type: 'list',
        items: [
          '在玩家完成萨娅的守夜和内战系列任务后，指挥官来到希图斯的东北角即可与之结盟。',
          '夜羽的驻地大致位置在孔尊后方，处于指挥官模式时夜羽的大门才会打开。',
          '调出菜单可使用快速移动功能访问夜羽昂克。'
        ]
      },
      '作为一个集团，夜羽也有着自己的声望来兑换各种奖励。夜羽声望可以通过向他们出售Sentient核心来获得，核心可以通过击杀平野上的Sentient敌人来获得。',
      '夜羽是一个中立的集团，同他们结盟并不会影响其他集团的地位。',
      '夜羽声望可使用Sentient核心或合一众塑讯块兑换。每一个完整的核心可以换取 250 声望、卓越核心换取 750 声望、无暇核心换取 1,500 声望。每一个合一众塑讯块可以换取 2,000 声望。'
    ],
    ranks: [
      {
        level: '5', title: '构筑师',
        tributes: [{ count: 30, name: '夜灵碎片' }],
        credit: '500,000', creditIcon: true,
        reward: '解锁五级指挥官赋能', standing: '0 至 132,000'
      },
      {
        level: '4', title: '乐器',
        tributes: [{ count: 20, name: '夜灵碎片' }],
        credit: '250,000', creditIcon: true,
        reward: '解锁四级增幅器部件，指挥官赋能与头盔', standing: '0 至 99,000'
      },
      {
        level: '3', title: '信徒',
        tributes: [{ count: 10, name: '夜灵碎片' }],
        credit: '100,000', creditIcon: true,
        reward: '解锁三级增幅器部件，指挥官赋能和护胫，允许进行增幅器镀金', standing: '0 至 70,000'
      },
      {
        level: '2', title: '观察者',
        tributes: [{ count: 20, name: '完整的Sentient核心' }],
        credit: '50,000', creditIcon: true,
        reward: '解锁二级增幅器部件，指挥官赋能和护肩', standing: '0 至 44,000'
      },
      {
        level: '1', title: '微尘',
        tributes: [{ count: 10, name: '完整的Sentient核心' }],
        credit: '30,000', creditIcon: true,
        reward: '解锁一级增幅器部件，指挥官赋能和胸甲', standing: '0 至 22,000'
      },
      {
        level: '-', title: '中立',
        tribute: '—', tributeIcon: false,
        credit: '—', creditIcon: false,
        reward: '—', standing: '0 至 5,000'
      }
    ]
  },
  '索拉里斯联盟': {
    title: '索拉里斯联盟',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/SolarisAlliance.png?sign=bfd72cecaca6099e08f355fcdd01fcea&t=1780370209',
    intro: [
      '索拉里斯联盟是一个抵抗Nef Anyo的革命团体，为了使索拉里斯人获得自由而战。他们表面上挣扎求生，实则在领导团体索拉里斯之声的领导下与夜羽结盟筹划反击Nef Anyo的计划。在玩家完成系列任务：索拉里斯之声后，福尔图娜的所有系统以及索联的声望将对玩家开放。',
      '作为一个集团，索拉里斯联盟有着可以同福尔图娜的NPC交换报酬的声望。索拉里斯联盟声望可以通过完成各种NPC任务来获取：完成赏金任务，向他们出售债务债券、保育活动、捕鱼和采矿各种物品。索联是一个中立的集团，同他们结盟并不会影响其他集团的地位。'
    ],
    ranks: [
      {
        level: '5', title: '老朋友',
        tributes: [
          { count: 5, name: '家族债务债券' },
          { count: 5, name: '预支债务债券' },
          { count: 3, name: '医疗债务债券' }
        ],
        credit: '200,000', creditIcon: true, standingCost: '99,000 声望',
        reward: '可兑换等级5商品', standing: '0 至 132,000'
      },
      {
        level: '4', title: '家伙',
        tributes: [
          { count: 5, name: '预支债务债券' },
          { count: 4, name: '医疗债务债券' },
          { count: 3, name: '庇护债务债券' }
        ],
        credit: '100,000', creditIcon: true, standingCost: '70,000 声望',
        reward: '可兑换等级4商品', standing: '0 至 99,000'
      },
      {
        level: '3', title: '实践者',
        tributes: [
          { count: 4, name: '医疗债务债券' },
          { count: 3, name: '庇护债务债券' },
          { count: 2, name: '培训债务债券' }
        ],
        credit: '50,000', creditIcon: true, standingCost: '44,000 声望',
        reward: '可兑换等级3商品', standing: '0 至 70,000'
      },
      {
        level: '2', title: '无赖',
        tributes: [
          { count: 3, name: '庇护债务债券' },
          { count: 2, name: '培训债务债券' }
        ],
        credit: '25,000', creditIcon: true, standingCost: '22,000 声望',
        reward: '可兑换等级2商品', standing: '0 至 44,000'
      },
      {
        level: '1', title: '异世者',
        tributes: [
          { count: 2, name: '培训债务债券' }
        ],
        credit: '10,000', creditIcon: true, standingCost: '5,000 声望',
        reward: '可兑换等级1商品', standing: '0 至 22,000'
      },
      {
        level: '0', title: '中立',
        tribute: '—', tributeIcon: false,
        credit: '—', creditIcon: false,
        reward: '可以兑换基础商品', standing: '0 至 5,000'
      }
    ]
  },
  '通风小子': {
    title: '通风小子',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/VentilationKid.png?sign=652f30c9a0cc9cae67fcbc8aa7c0293d&t=1780370220',
    intro: [
      '通风小子是一群来自位于福尔图娜的索拉里斯联盟的孩子，以偷取Corpus的零件为生，并在奥布山谷中进行K式悬浮板比赛。',
      '为了加入该集团，玩家必须完成索拉里斯之声系列任务。他们的俱乐部位于福尔图娜Legs商店的上方，入口处有涂鸦，或使用ESC-快速移动功能。',
      '作为一个集团，通风小子有着可与城市中NPC交换各种奖励的独立的声望。通风小子的声望可以通过在奥布山谷或夜灵平野中施展K式悬浮板特技来获得。获得量等于成功完成的特技分数的1/4（3000分可获得750声望），或者完成出现在奥布山谷不同地点（地图上的紫色图标）的竞赛。（现在测试确实会获得声望）。通风小子是一个中立集团，且获得通风小子的声望并不会影响玩家在其他集团的声望。'
    ],
    ranks: [
      { level: '5', title: '义亲', tribute: '—', tributeIcon: false, credit: '—', creditIcon: false, reward: '可兑换等级5商品', standing: '0 至 132,000' },
      { level: '4', title: '一级棒', tribute: '—', tributeIcon: false, credit: '—', creditIcon: false, reward: '可兑换等级4商品', standing: '0 至 99,000' },
      { level: '3', title: '行家里手', tribute: '—', tributeIcon: false, credit: '—', creditIcon: false, reward: '可兑换等级3商品', standing: '0 至 70,000' },
      { level: '2', title: '你谁啊', tribute: '—', tributeIcon: false, credit: '—', creditIcon: false, reward: '可兑换等级2商品', standing: '0 至 44,000' },
      { level: '1', title: '闪闪', tribute: '—', tributeIcon: false, credit: '—', creditIcon: false, reward: '可兑换等级1商品', standing: '0 至 22,000' },
      { level: '0', title: '中立', tribute: '—', tributeIcon: false, credit: '—', creditIcon: false, reward: '可兑换基础商品', standing: '0 至 5,000' }
    ]
  },
  '索拉里斯之声（集团）': {
    title: '索拉里斯之声',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/VoxSolaris.png?sign=891822dd402e0c30d97b1e367c902c4d&t=1780370231',
    intro: [
      '索拉里斯之声是一个只有索拉里斯联盟领导人才知道的隐蔽组织，已知与夜羽有关联。',
      '索拉里斯之声是索拉里斯联盟背后的领导团体，以VOX的傀儡形象在公众面前运营，而实际领导团队共有四人：Eudico、Business、Thursby（现名Legs）和Little Duck。在玩家完成索拉里斯之声系列任务后，进入福尔图纳电梯门左手边的密室里即可访问索拉里斯之声。',
      '作为一个集团，索拉里斯之声有着可与城市中NPC交换各种奖励的独立的声望。索拉里斯之声的集团声望可以通过上交环形装置换取，一种在奥布山谷特殊地点的敌人身上掉落的材料。索拉里斯之声是一个中立的集团，且获取该集团的声望不会影响玩家在其他集团的声望。',
      '为了加入该集团，玩家必须完成系列任务：索拉里斯之声和内战。Little Duck只有当你在指挥官形态时才会与你交谈。'
    ],
    ranks: [
      {
        level: '5', title: '幕后推手',
        tributes: [{ count: 1, name: '圣油环形装置' }],
        credit: '1,000,000', creditIcon: true, standingCost: '99,000 声望',
        reward: '可兑换等级5的商品；免费获得一个等级5的商品', standing: '0 至 132,000'
      },
      {
        level: '4', title: '无影手',
        tributes: [
          { count: 1, name: '斥极系统' },
          { count: 1, name: '索拉环形装置' }
        ],
        credit: '500,000', creditIcon: true, standingCost: '70,000 声望',
        reward: '可兑换等级4的商品；免费获得一个等级4的商品', standing: '0 至 99,000'
      },
      {
        level: '3', title: '刽子手',
        tributes: [
          { count: 1, name: '大气系统' },
          { count: 1, name: '告达环形装置' }
        ],
        credit: '250,000', creditIcon: true, standingCost: '44,000 声望',
        reward: '可兑换等级3的商品；免费获得一个等级3的商品', standing: '0 至 70,000'
      },
      {
        level: '2', title: '特工',
        tributes: [
          { count: 1, name: '陀螺磁抵系统' },
          { count: 1, name: '维加环形装置' }
        ],
        credit: '100,000', creditIcon: true, standingCost: '22,000 声望',
        reward: '可兑换等级2的商品；免费获得一个等级2的商品', standing: '0 至 44,000'
      },
      {
        level: '1', title: '探员',
        tributes: [
          { count: 1, name: '告达环形装置' },
          { count: 1, name: '维加环形装置' },
          { count: 1, name: '索拉环形装置' }
        ],
        credit: '50,000', creditIcon: true, standingCost: '5,000 声望',
        reward: '可兑换等级1的商品；免费获得一个等级1的商品', standing: '0 至 22,000'
      },
      {
        level: '0', title: '中立',
        tribute: '—', tributeIcon: false,
        credit: '—', creditIcon: false,
        reward: '可以上交环形装置以换取声望', standing: '0 至 5,000'
      }
    ]
  },
  '英择谛': {
    title: '英择谛',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Entrati.png?sign=3760e2d0eea5e08e261b0f00c8919e60&t=1780370243',
    intro: [
      '英择谛家族隐居于火卫二的殁世幽都，他们因率先开发出虚空能量控制装置而在Orokin时代享有极高的声誉。如今，这一家族仅存的机能残缺的成员们悉数被感染而半身Infested化，且受巢囊影响而遗忘了各自的名字。尽管如此，他们保留了各自的个性，以及家族内部无休止的争吵。英择谛家族的主事人是"母亲"，一位半身Infested化的Orokin科学家、数学家以及哲学家。她的父亲是"心"的发明者——此装置作为Tenno虚空之力的源泉，目前由英择谛家族持有并维护。英择谛家族同样也是安魂密语与宇宙钟的创造者。久远年代所隶属于英择谛家族的殁世甲在遭受火卫二的Infestation侵染后变得狂暴，它们大多作为精锐单位存在于魔胎之境的地下世界里，守护着英择谛家族早已被遗弃的建筑。'
    ],
    ranks: [
      {
        level: '5', title: '家人',
        tributes: [
          { count: 1, name: '玻璃窗碎片' },
          { count: 1, name: '"母亲"石印' },
          { count: 1, name: '"父亲"石印' }
        ],
        credit: '200,000', creditIcon: true, standingCost: '99,000 声望',
        reward: '可兑换等级5的商品；免费获取一个NPC提供的等级5的商品；给母亲新的友好昵称；给玩家新的友好昵称',
        standing: '0 至 132,000'
      },
      {
        level: '4', title: '好友',
        tributes: [
          { count: 1, name: '萨里姆突变原' },
          { count: 1, name: '阿里奥利突变原' },
          { count: 1, name: '"父亲"石印' },
          { count: 1, name: '"儿子"石印' }
        ],
        credit: '100,000', creditIcon: true, standingCost: '70,000 声望',
        reward: '可兑换等级4的商品；免费获取一个NPC提供的等级4的商品',
        standing: '0 至 99,000'
      },
      {
        level: '3', title: '同伴',
        tributes: [
          { count: 3, name: '狡黠狐帕菲拉标签' },
          { count: 3, name: '宰相扑猎达赛标签' },
          { count: 1, name: '"母亲"石印' },
          { count: 1, name: '"儿子"石印' }
        ],
        credit: '50,000', creditIcon: true, standingCost: '44,000 声望',
        reward: '可兑换等级3的商品；免费获取一个NPC提供的等级3的商品；给儿子新的友好昵称',
        standing: '0 至 70,000'
      },
      {
        level: '2', title: '相识',
        tributes: [
          { count: 1, name: '卡提努之爪刀刃蓝图' },
          { count: 1, name: '"父亲"石印' },
          { count: 1, name: '"女儿"石印' }
        ],
        credit: '25,000', creditIcon: true, standingCost: '22,000 声望',
        reward: '可兑换等级2的商品；免费获取一个NPC提供的等级2的商品；给父亲新的友好昵称',
        standing: '0 至 44,000'
      },
      {
        level: '1', title: '陌生人',
        tributes: [
          { count: 6, name: '良性感染肿瘤' },
          { count: 6, name: '发酵鱼鳔' }
        ],
        credit: '10,000', creditIcon: true, standingCost: '5,000 声望',
        reward: '可兑换等级1的商品；免费获取一个NPC提供的等级1的商品；给女儿新的友好昵称',
        standing: '0 至 22,000'
      },
      {
        level: '0', title: '中立',
        tribute: '—', tributeIcon: false,
        credit: '—', creditIcon: false,
        reward: '兑换基础物品', standing: '0 至 5,000'
      }
    ]
  },
  '殁世械灵': {
    title: '殁世械灵',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Necraloid.png?sign=1c2b9eb248a395cbf30308b0ace40318&t=1780370256',
    intro: [
      '殁世械灵是由中枢洛德成立的集团，要解锁这个集团，玩家必须先完成系列任务惊惧之心和内战，才能使用指挥官进入殁世幽都最北部的隐藏房间，在这里可以见到洛德。随着英择谛和殁世械灵集团声望等级提升，可以了解到曾经阿尔布雷希特·英择谛的故事。',
      '作为一个集团，殁世械灵有自己独立的声望系统，通过上缴多种Orokin矩阵装置来取得。这些矩阵装置可以在"母亲"处接受隔离库赏金取得，不同种类的矩阵装置会影响可获得的声望量。'
    ],
    ranks: [
      {
        level: '3', title: '信任等级：探索者',
        tributes: [
          { count: 15, name: 'Orokin战意矩阵装置' },
          { count: 350, name: '虚空光体' },
          { count: 1, name: '灭杀者枪管蓝图' },
          { count: 20, name: '"父亲"石印' }
        ],
        credit: '—', creditIcon: false, standingCost: '44,000 声望',
        reward: '到达声望等级3 送葬者蓝图', standing: '0 至 70,000'
      },
      {
        level: '2', title: '信任等级：模仿者',
        tributes: [
          { count: 15, name: 'Orokin弹道矩阵装置' },
          { count: 250, name: '虚空光体' },
          { count: 1, name: '追击者枪管蓝图' },
          { count: 20, name: '"父亲"石印' }
        ],
        credit: '—', creditIcon: false, standingCost: '22,000 声望',
        reward: '到达声望等级2 虚空锐将蓝图', standing: '0 至 44,000'
      },
      {
        level: '1', title: '信任等级：见习者',
        tributes: [
          { count: 10, name: 'Orokin定向矩阵装置' },
          { count: 150, name: '虚空光体' },
          { count: 1, name: '邪莫斯枪管蓝图' },
          { count: 20, name: '"父亲"石印' }
        ],
        credit: '—', creditIcon: false, standingCost: '5,000 声望',
        reward: '到达声望等级1 虚空锐将外壳蓝图', standing: '0 至 22,000'
      },
      {
        level: '0', title: '中立',
        tribute: '—', tributeIcon: false,
        credit: '—', creditIcon: false,
        reward: '可以使用Orokin矩阵装置换取声望', standing: '0 至 5,000'
      }
    ]
  },
  '坚守者': {
    title: '坚守者',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/TheHoldfasts.png?sign=df18586fcf480f6e742ec937b882b673&t=1780370270',
    intro: [
      '坚守者是一个由「扎里曼 10-0 号」成年船员的最后四名幸存者组成的集团。凭借着虚空的神秘力量，他们已经克服了转化为虚空天使的过程。虽然不再是严格意义上的人类，更像是出现在船上安全区域的基于能量的"鬼魂"，但它们保留了人类的思维方式，并引导Tenno防止扎里曼号的状态进一步恶化。'
    ],
    ranks: [
      {
        level: '5', title: '大天使',
        tributes: [
          { count: 5, name: '虚空羽翎' },
          { count: 90, name: '凶魂浆质' },
          { count: 20, name: '英择谛灯笼' }
        ],
        credit: '200,000', creditIcon: true, standingCost: '99,000 声望',
        reward: '可兑换等级5商品；免费获得一个等级5商品', standing: '0 至 132,000'
      },
      {
        level: '4', title: '炽天使',
        tributes: [
          { count: 15, name: '虚空刺翎' },
          { count: 60, name: '凶魂浆质' },
          { count: 40, name: '虚空胶丸' }
        ],
        credit: '100,000', creditIcon: true, standingCost: '70,000 声望',
        reward: '可兑换等级4商品；免费获得一个等级4商品', standing: '0 至 99,000'
      },
      {
        level: '3', title: '守护天使',
        tributes: [
          { count: 10, name: '虚空冠翎' },
          { count: 10, name: '英择谛灯笼' },
          { count: 5000, name: '铁氧体' }
        ],
        credit: '50,000', creditIcon: true, standingCost: '44,000 声望',
        reward: '可兑换等级3商品；免费获得一个等级3商品', standing: '0 至 70,000'
      },
      {
        level: '2', title: '守望天使',
        tributes: [
          { count: 10, name: '虚空翼翎' },
          { count: 10, name: '虚空胶丸' },
          { count: 5000, name: '合金板' }
        ],
        credit: '25,000', creditIcon: true, standingCost: '22,000 声望',
        reward: '可兑换等级2商品；免费获得一个等级2商品', standing: '0 至 44,000'
      },
      {
        level: '1', title: '堕天使',
        tributes: [
          { count: 5, name: '虚空绒翎' },
          { count: 2000, name: '铁氧体' },
          { count: 2000, name: '合金板' }
        ],
        credit: '10,000', creditIcon: true, standingCost: '5,000 声望',
        reward: '可兑换等级1商品；免费获得一个等级1商品', standing: '0 至 22,000'
      },
      {
        level: '0', title: '中立',
        tribute: '—', tributeIcon: false,
        credit: '—', creditIcon: false,
        reward: '可以兑换基础商品', standing: '0 至 5,000'
      }
    ]
  },
  '卡尔驻军': {
    title: '卡尔驻军',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/KahlsGarrison.png?sign=f708bfe24b76cde7aa9cb342dc118afe&t=1780370281',
    intro: [
      '卡尔驻军是一支反抗合一众的抵抗军。由卡尔-175领导，"女儿"也在背后协助。其驻军基地位于漂泊者营地。解锁该集团需先完成破障者系列任务。'
    ],
    ranks: [
      {
        level: '5', title: '家园',
        tribute: '—', tributeIcon: false, credit: '—', creditIcon: false,
        reward: '解锁五级商品；解锁卡尔饰品：佮至头盔，嚼肌面具，章镜面具，排风背甲', standing: '—'
      },
      {
        level: '4', title: '定居地',
        tribute: '—', tributeIcon: false, credit: '—', creditIcon: false,
        reward: '解锁四级商品；解锁卡尔饰品：军令头盔，单骑头盔，放逐头盔，赤冠护眼，冷寒背甲', standing: '—'
      },
      {
        level: '3', title: '堡垒',
        tribute: '—', tributeIcon: false, credit: '—', creditIcon: false,
        reward: '解锁三级商品；解锁卡尔饰品：末路恶徒头盔，沙漠之验头盔，三巫护眼，沙漠之验胸甲，沙漠之验肩甲', standing: '—'
      },
      {
        level: '2', title: '营地',
        tribute: '—', tributeIcon: false, credit: '—', creditIcon: false,
        reward: '解锁切片哥的商店；解锁二级商品；解锁卡尔饰品：吾屠面具，冷寒护肩，姐妹会头盔，姐妹会背甲，斗霸绑腿', standing: '—'
      },
      {
        level: '1', title: '避难所',
        tribute: '—', tributeIcon: false, credit: '—', creditIcon: false,
        reward: '—', standing: '—'
      }
    ]
  },
  '科维兽': {
    title: '科维兽',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Cavia.png?sign=35457529f01f61f59b7d36d1486307b4&t=1780370296',
    intro: [
      '科维兽是一群通过阿尔布雷希特·英择谛的虚空实验制造出的能够用虚空语进行交流的生物。他们称呼阿尔布雷希特为"爸爸"。他们与洛德一起，守护着阿尔布雷希特的实验室，继续进行有关时空旅行的研究。',
      '为了完全访问这个集团，玩家必须完成系列任务：墙中低语。'
    ]
  },
  '六人组（集团）': {
    title: '六人组',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Syndicate.png?sign=0e79e59c4fb26c66fe45b894a58efb65&t=1780370306',
    intro: [
      '六人组是一个由原型战甲组成的团体，原型战甲是通过阿尔布雷希特·英择谛的实验衍生出Warframe特征的人类。他们在霍瓦尼亚中央商场经营活动，目前正在寻找失踪的医生。'
    ],
    auxiliaryTable: {
      title: '声望计算',
      headers: ['交付物品', '获得声望'],
      rows: [
        ['超级比特披萨（资源）', '2,500'],
        ['氪汉堡套餐', '1,500'],
        ['35毫米胶片', '750'],
        ['切达芝士皇冠麦片', '750'],
        ['心情水晶', '750'],
        ['酌趣六瓶装啤酒', '750'],
        ['线上时代Cd', '750'],
        ['女伯爵漫画', '750']
      ]
    }
  },
  '行动补给': {
    title: '行动补给',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Operationalsupplies.png?sign=11a194c4a11cf60b220cdbad0cc78e7d&t=1780370319',
    intro: [
      '行动补给是在活动时临时活跃的中立集团，代表着对Tenno的支持以及支持Tenno的供应和后勤设施。'
    ],
    ranks: [
      {
        level: '3', title: '英雄',
        tributes: [{ count: 10, name: '尼蒐荚' }],
        credit: '50,000', creditIcon: true,
        reward: '可以购买3等级的商品；一个免费的行动补给3等级商品', standing: '0 至 494,000'
      },
      {
        level: '2', title: '防卫者',
        tributes: [{ count: 10, name: '伊莱体' }],
        credit: '10,000', creditIcon: true,
        reward: '可以购买2等级的商品；一个免费的行动补给2等级商品', standing: '0 至 3,000'
      },
      {
        level: '1', title: '合作者',
        tributes: [{ count: 10, name: '葛克度' }],
        credit: '5,000', creditIcon: true,
        reward: '可以购买1等级的商品；一个免费的行动补给1等级商品', standing: '0 至 2,000'
      },
      {
        level: '0', title: '中立',
        tribute: '—', tributeIcon: false, credit: '—', creditIcon: false,
        reward: '可以购买基本的商品', standing: '0 至 1,000'
      }
    ]
  },
  '午夜电波': {
    title: '午夜电波',
    image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/groupimg/Nightwave.png?sign=fe9dd2b0f9bd19a2424136340f7911bb&t=1780370331',
    intro: [
      '午夜电波是由神秘的游荡者诺拉所主持的非法广播电台，玩家可以参与其独特的挑战任务和奖赏系统以换取资源、战甲外观、MOD等战利品。'
    ]
  }
}

function resolveRankIconPath(value, enabled) {
  if (!enabled) {
    return ''
  }

  return RANK_ICON_MAP[value] || ''
}

function normalizeIntro(intro) {
  return (intro || []).map((paragraph, index) => {
    if (typeof paragraph === 'string') {
      return { key: `p-${index}`, text: paragraph, quote: false }
    }
    if (paragraph.type === 'list') {
      return { key: `l-${index}`, type: 'list', items: paragraph.items || [] }
    }
    return { key: `p-${index}`, text: paragraph.text, quote: !!paragraph.quote }
  })
}

function buildTributes(tributes, imageMap = {}) {
  return (tributes || []).map((tribute) => {
    const sourceUrl = TRIBUTE_NAME_ICON_MAP[tribute.name] || ''
    return {
      count: tribute.count,
      name: tribute.name,
      iconUrl: imageMap[sourceUrl] || sourceUrl
    }
  })
}

function collectDetailImagePaths(detail) {
  const hasStandingCost = (detail.ranks || []).some((rank) => rank.standingCost)
  const tributeIconUrls = (detail.ranks || []).flatMap((rank) => (
    (rank.tributes || []).map((tribute) => TRIBUTE_NAME_ICON_MAP[tribute.name] || '')
  ))
  return [
    detail.image,
    ...(detail.relations || []).map((item) => item.image),
    ...(detail.ranks || []).flatMap((rank) => [
      resolveRankIconPath(rank.tribute, rank.tributeIcon),
      resolveRankIconPath(rank.credit, rank.creditIcon)
    ]),
    ...tributeIconUrls,
    ...(hasStandingCost ? [STANDING_ICON_URL] : [])
  ].filter(Boolean)
}

function buildDetail(detail, imageMap = {}) {
  if (!detail) {
    return null
  }

  return {
    ...detail,
    image: imageMap[detail.image] || detail.image,
    intro: normalizeIntro(detail.intro),
    relations: (detail.relations || []).map((relation) => ({
      ...relation,
      image: imageMap[relation.image] || relation.image
    })),
    ranks: (detail.ranks || []).map((rank) => ({
      ...rank,
      tributes: buildTributes(rank.tributes, imageMap),
      tributeIconUrl: imageMap[resolveRankIconPath(rank.tribute, rank.tributeIcon)] || resolveRankIconPath(rank.tribute, rank.tributeIcon),
      creditIconUrl: imageMap[resolveRankIconPath(rank.credit, rank.creditIcon)] || resolveRankIconPath(rank.credit, rank.creditIcon),
      standingIconUrl: rank.standingCost ? (imageMap[STANDING_ICON_URL] || STANDING_ICON_URL) : ''
    }))
  }
}

// data-* 属性值在 WXML 里会被强制转小写，按集团名查找时也按 toLowerCase() 比对
const DETAIL_MAP_BY_LOWERCASE = Object.keys(DETAIL_MAP).reduce((acc, key) => {
  acc[key.toLowerCase()] = DETAIL_MAP[key]
  return acc
}, {})

function findDetail(name) {
  if (!name) {
    return null
  }
  return DETAIL_MAP[name] || DETAIL_MAP_BY_LOWERCASE[name.toLowerCase()] || null
}

Page({
  data: {
    detail: null,
    missing: false
  },
  onLoad(options) {
    const rawName = options.name || ''
    let name = rawName
    try {
      name = decodeURIComponent(rawName)
    } catch (err) {
      console.warn('faction-detail decodeURIComponent failed', rawName, err)
    }

    const detail = findDetail(name)
    console.log('faction-detail onLoad', { rawName, name, found: !!detail })

    if (!detail) {
      this.setData({ missing: true })
      return
    }

    wx.setNavigationBarTitle({
      title: detail.title
    })

    try {
      const paths = collectDetailImagePaths(detail)

      this.setData({
        detail: buildDetail(detail)
      })

      resolveCloudImages(paths).then((imageMap) => {
        this.setData({
          detail: buildDetail(detail, imageMap)
        })
      }).catch((err) => {
        console.warn('faction-detail resolveCloudImages failed', err)
      })
    } catch (err) {
      console.error('faction-detail render failed', name, err)
      this.setData({ missing: true })
    }
  }
})
