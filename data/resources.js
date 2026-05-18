module.exports = {
  tags: ['高效刷取', '循环任务'],
  items: [
    {
      title: '资源刷取位置',
      table: {
        headers: ['资源', '位置'],
        rows: [
          { resource: '合金板', icon: '/images/resourceimg/AlloyPlate.png', location: 'Gabii (谷神星), Draco (谷神星) 或者 Malva (金星)' },
          { resource: '氩结晶', icon: '/images/resourceimg/ArgonCrystal.png', location: '任何 虚空 生存/破坏' },
          { resource: '电路', icon: '/images/resourceimg/Circuits.png', location: 'Draco (谷神星) 或者 Malva (金星)' },
          { resource: '控制模块', icon: '/images/resourceimg/ControlModule.png', location: '任何 虚空 生存/防御, 鬣狗群 (Psamathe, 海王星) 或者 猛禽 (Naamah, 欧罗巴)' },
          { resource: '永冻晶矿', icon: '/images/resourceimg/Cryotic.png', location: '任何 挖掘 任务' },
          { resource: '铁氧体', icon: '/images/resourceimg/Ferrite.png', location: '任何 虚空 生存/防御, Tikal (地球) 或者 Apollodorus (水星)' },
          { resource: '镓', icon: '/images/resourceimg/Gallium.png', location: 'Assur (天王星) 或者 Lech Kril中尉 (War, 火星)' },
          { resource: '非晶态合金', icon: '/images/resourceimg/Morphics.png', location: 'Wahiba (火星), Vor上尉 (Tolstoj, 水星) 或者 Apollodorus (水星)' },
          { resource: '纳米孢子', icon: '/images/resourceimg/NanoSpores.png', location: '火卫二 防御/生存, Akkad (阋神星) 或者 Piscinas (土星)' },
          { resource: '神经传感器', icon: '/images/resourceimg/NeuralSensor.png', location: 'Cameria (木星), Alad V (Themisto, 木星) 或者 猛禽 (Naamah, 欧罗巴)' },
          { resource: '神经元', icon: '/images/resourceimg/Neurodes.png', location: '火卫二 刺杀/防御/生存, Tikal (地球) 或者 Zabala (阋神星)' },
          { resource: 'Orokin电池', icon: '/images/resourceimg/OrokinCell.png', location: '火卫二 生存, Draco (谷神星) 或者 Piscinas (土星)' },
          { resource: '奥席金属', icon: '/images/resourceimg/Oxium.png', location: 'Baal (欧罗巴) 或者 Despina (海王星)' },
          { resource: '生物质', icon: '/images/resourceimg/Plastids.png', location: 'Zeugma (火卫一), Ophelia (天王星) 或者 Zabala (阋神星)' },
          { resource: '聚合物束', icon: '/images/resourceimg/PolymerBundle.png', location: 'Assur (天王星), Ophelia (天王星) 或者 Apollodorus (水星)' },
          { resource: '红化结晶', icon: '/images/resourceimg/Rubedo.png', location: '任何 虚空 生存/防御 或者 Zeugma (火卫一)' },
          { resource: '回收金属', icon: '/images/resourceimg/Salvage.png', location: 'Cameria (木星) 或者 Wahiba (火星)' },
          { resource: '碲', icon: '/images/resourceimg/Tellurium.png', location: 'Ophelia (天王星), Caelus (天王星) 或者 Salacia (海王星)' }
        ]
      }
    },
    {
      title: '资源掉落星表',
      table: {
        headers: ['常见', '水星', '金星', '地球', '月球', '火星', '火卫一', '谷神星', '木星', '欧罗巴', '土星', '天王星', '海王星', '冥王星', '阋神星', '赛德娜', '虚空', '遗迹', '赤毒要塞'],
        rows: [
          { name: '铁氧体', icon: '/images/resourceimg/Ferrite.png', cells: ['√', '', '√', '√', '', '', '', '', '', '', '', '√', '', '', '', '√', '', ''] },
          { name: '纳米孢子', icon: '/images/resourceimg/NanoSpores.png', cells: ['', '', '', '', '', '', '', '', '', '√', '', '√', '', '√', '', '', '√', ''] },
          { name: '合金板', icon: '/images/resourceimg/AlloyPlate.png', cells: ['', '√', '', '', '', '√', '√', '√', '', '', '', '', '√', '', '√', '', '', ''] },
          { name: '回收金属', icon: '/images/resourceimg/Salvage.png', cells: ['', '', '', '', '√', '', '', '√', '', '', '', '', '', '', '√', '', '', '√'] },
          { name: '聚合物束', icon: '/images/resourceimg/PolymerBundle.png', cells: ['√', '√', '', '', '', '', '', '', '', '', '√', '', '', '', '', '', '', ''] },
          { name: '永冻晶矿', icon: '/images/resourceimg/Cryotic.png', cells: ['', '√', '√', '', '', '√', '', '', '√', '', '', '√', '', '', '', '', '', ''] }
        ]
      }

    },
    {
      table: {
        headers: ['罕见', '水星', '金星', '地球', '月球', '火星', '火卫一', '谷神星', '木星', '欧罗巴', '土星', '天王星', '海王星', '冥王星', '阋神星', '赛德娜', '虚空', '遗迹', '赤毒要塞'],
        rows: [
          { name: '电路', icon: '/images/resourceimg/Circuits.png', cells: ['', '√', '', '', '', '', '√', '', '', '', '', '', '', '', '', '', '', '√'] },
          { name: '生物质', icon: '/images/resourceimg/Plastids.png', cells: ['', '', '', '', '', '√', '', '', '', '√', '√', '', '√', '√', '', '', '', ''] },
          { name: '红化结晶', icon: '/images/resourceimg/Rubedo.png', cells: ['', '', '√', '√', '', '√', '', '', '√', '', '', '', '√', '', '√', '√', '', ''] }
        ]
      }
    },
    {
      table: {
        headers: ['稀有', '水星', '金星', '地球', '月球', '火星', '火卫一', '谷神星', '木星', '欧罗巴', '土星', '天王星', '海王星', '冥王星', '阋神星', '赛德娜', '虚空', '遗迹', '赤毒要塞'],
        rows: [
          { name: '氩结晶', icon: '/images/resourceimg/ArgonCrystal.png', cells: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '√', '', ''] },
          { name: '控制模块', icon: '/images/resourceimg/ControlModule.png', cells: ['', '', '', '', '', '', '', '', '√', '', '', '√', '', '', '', '√', '', ''] },
          { name: '镓', icon: '/images/resourceimg/Gallium.png', cells: ['', '', '', '', '√', '', '', '', '', '', '√', '', '', '', '', '', '', ''] },
          { name: '非静态合金', icon: '/images/resourceimg/Morphics.png', cells: ['√', '', '', '', '√', '√', '', '', '√', '', '', '', '√', '', '', '', '', ''] },
          { name: '神经传感器', icon: '/images/resourceimg/NeuralSensor.png', cells: ['', '', '', '', '', '', '', '√', '', '', '', '', '', '', '', '', '', '√'] },
          { name: '神经元', icon: '/images/resourceimg/Neurodes.png', cells: ['', '', '√', '√', '', '', '', '', '', '', '', '', '', '√', '', '', '√', ''] },
          { name: 'Orokin电池', icon: '/images/resourceimg/OrokinCell.png', cells: ['', '', '', '', '', '', '√', '', '', '√', '', '', '', '', '', '', '√', ''] }
        ]
      }
    },
    {
      table: {
        headers: ['研究', '水星', '金星', '地球', '月球', '火星', '火卫一', '谷神星', '木星', '欧罗巴', '土星', '天王星', '海王星', '冥王星', '阋神星', '赛德娜', '虚空', '遗迹', '赤毒要塞'],
        rows: [
          { name: '爆燃安瓿', icon: '/images/resourceimg/DetoniteAmpuleFixed.png', cells: ['√', '', '√', '√', '', '', '√', '', '', '√', '√', '', '', '', '√', '', '', '√'] },
          { name: '电磁力场装置样本', icon: '/images/resourceimg/FieldronSampleFixed.png', cells: ['', '√', '', '', '√', '', '', '√', '√', '', '', '√', '', '', '', '', '', ''] },
          { name: '样本突变原', icon: '/images/resourceimg/MutagenSampleFixed.png', cells: ['', '', '', '', '', '', '', '', '', '', '', '', '', '√', '', '', '√', ''] }
        ]
      }
    }
  ]
}
