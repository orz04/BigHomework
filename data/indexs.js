module.exports = [
  {
    title: 'Ash',
    image: '/images/tennoimg/Ash.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Ash头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Ash头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ash机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ash系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ash总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Ash的蓝图可在商店中购买获得，Ash的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Ash的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Atlas',
    image: '/images/tennoimg/Atlas.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Atlas头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Atlas头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Atlas机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Atlas系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Atlas总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Atlas的蓝图可在商店中购买获得，Atlas的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Atlas的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Banshee',
    image: '/images/tennoimg/Banshee.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Banshee头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Banshee头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Banshee机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Banshee系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Banshee总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Banshee的蓝图可在商店中购买获得，Banshee的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Banshee的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Baruuk',
    image: '/images/tennoimg/Baruuk.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Baruuk头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Baruuk头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Baruuk机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Baruuk系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Baruuk总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Baruuk的蓝图可在商店中购买获得，Baruuk的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Baruuk的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Caliban',
    image: '/images/tennoimg/Caliban.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Caliban头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Caliban头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Caliban机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Caliban系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Caliban总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Caliban的蓝图可在商店中购买获得，Caliban的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Caliban的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Chroma',
    image: '/images/tennoimg/Chroma.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Chroma头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Chroma头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Chroma机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Chroma系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Chroma总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Chroma的蓝图可在商店中购买获得，Chroma的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Chroma的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Citrine',
    image: '/images/tennoimg/Citrine.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Citrine头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Citrine头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Citrine机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Citrine系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Citrine总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Citrine的蓝图可在商店中购买获得，Citrine的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Citrine的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Clem',
    image: '/images/tennoimg/Clem.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Clem头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Clem头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Clem机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Clem系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Clem总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Clem的蓝图可在商店中购买获得，Clem的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Clem的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Dagath',
    image: '/images/tennoimg/Dagath.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Dagath头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Dagath头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Dagath机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Dagath系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Dagath总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Dagath的蓝图可在商店中购买获得，Dagath的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Dagath的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Ember',
    image: '/images/tennoimg/Ember.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Ember头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Ember头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ember机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ember系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ember总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Ember的蓝图可在商店中购买获得，Ember的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Ember的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Equinox',
    image: '/images/tennoimg/Equinox.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Equinox头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Equinox头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Equinox机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Equinox系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Equinox总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Equinox的蓝图可在商店中购买获得，Equinox的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Equinox的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Excalibur',
    image: '/images/tennoimg/Excalibur.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Excalibur头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Excalibur头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Excalibur机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Excalibur系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Excalibur总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Excalibur的蓝图可在商店中购买获得，Excalibur的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Excalibur的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Frost',
    image: '/images/tennoimg/Frost.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Frost头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Frost头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Frost机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Frost系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Frost总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Frost的蓝图可在商店中购买获得，Frost的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Frost的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Gara',
    image: '/images/tennoimg/Gara.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Gara头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Gara头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Gara机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Gara系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Gara总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Gara的蓝图可在商店中购买获得，Gara的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Gara的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Garuda',
    image: '/images/tennoimg/Garuda.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Garuda头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Garuda头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Garuda机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Garuda系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Garuda总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Garuda的蓝图可在商店中购买获得，Garuda的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Garuda的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Gauss',
    image: '/images/tennoimg/Gauss.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Gauss头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Gauss头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Gauss机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Gauss系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Gauss总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Gauss的蓝图可在商店中购买获得，Gauss的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Gauss的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Grendel',
    image: '/images/tennoimg/Grendel.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Grendel头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Grendel头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Grendel机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Grendel系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Grendel总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Grendel的蓝图可在商店中购买获得，Grendel的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Grendel的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Harrow',
    image: '/images/tennoimg/Harrow.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Harrow头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Harrow头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Harrow机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Harrow系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Harrow总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Harrow的蓝图可在商店中购买获得，Harrow的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Harrow的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Hildryn',
    image: '/images/tennoimg/Hildryn.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Hildryn头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Hildryn头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Hildryn机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Hildryn系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Hildryn总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Hildryn的蓝图可在商店中购买获得，Hildryn的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Hildryn的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Hydroid',
    image: '/images/tennoimg/Hydroid.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Hydroid头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Hydroid头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Hydroid机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Hydroid系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Hydroid总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Hydroid的蓝图可在商店中购买获得，Hydroid的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Hydroid的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Inaros',
    image: '/images/tennoimg/Inaros.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Inaros头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Inaros头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Inaros机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Inaros系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Inaros总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Inaros的蓝图可在商店中购买获得，Inaros的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Inaros的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Ivara',
    image: '/images/tennoimg/Ivara.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Ivara头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Ivara头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ivara机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ivara系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Ivara总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Ivara的蓝图可在商店中购买获得，Ivara的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Ivara的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Khora',
    image: '/images/tennoimg/Khora.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Khora头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Khora头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Khora机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Khora系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Khora总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Khora的蓝图可在商店中购买获得，Khora的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Khora的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Kullervo',
    image: '/images/tennoimg/Kullervo.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Kullervo头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Kullervo头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Kullervo机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Kullervo系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Kullervo总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Kullervo的蓝图可在商店中购买获得，Kullervo的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Kullervo的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Lavos',
    image: '/images/tennoimg/Lavos.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Lavos头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Lavos头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Lavos机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Lavos系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Lavos总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Lavos的蓝图可在商店中购买获得，Lavos的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Lavos的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Limbo',
    image: '/images/tennoimg/Limbo.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Limbo头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Limbo头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Limbo机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Limbo系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Limbo总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Limbo的蓝图可在商店中购买获得，Limbo的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Limbo的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Loki',
    image: '/images/tennoimg/Loki.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Loki头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Loki头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Loki机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Loki系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Loki总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Loki的蓝图可在商店中购买获得，Loki的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Loki的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Mag',
    image: '/images/tennoimg/Mag.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Mag头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Mag头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mag机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mag系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mag总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Mag的蓝图可在商店中购买获得，Mag的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Mag的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Mesa',
    image: '/images/tennoimg/Mesa.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Mesa头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Mesa头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mesa机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mesa系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mesa总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Mesa的蓝图可在商店中购买获得，Mesa的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Mesa的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Mirage',
    image: '/images/tennoimg/Mirage.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Mirage头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Mirage头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mirage机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mirage系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mirage总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Mirage的蓝图可在商店中购买获得，Mirage的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Mirage的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Nekros',
    image: '/images/tennoimg/Nekros.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Nekros头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Nekros头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nekros机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nekros系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nekros总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Nekros的蓝图可在商店中购买获得，Nekros的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Nekros的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Neeko',
    image: '/images/tennoimg/Neeko.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Neeko头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Neeko头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Neeko机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Neeko系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Neeko总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Neeko的蓝图可在商店中购买获得，Neeko的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Neeko的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Nezha',
    image: '/images/tennoimg/Nezha.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Nezha头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Nezha头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nezha机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nezha系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nezha总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Nezha的蓝图可在商店中购买获得，Nezha的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Nezha的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Nova',
    image: '/images/tennoimg/Nova.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Nova头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Nova头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nova机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nova系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nova总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Nova的蓝图可在商店中购买获得，Nova的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Nova的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Nyx',
    image: '/images/tennoimg/Nyx.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Nyx头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Nyx头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nyx机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nyx系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Nyx总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Nyx的蓝图可在商店中购买获得，Nyx的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Nyx的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Oberon',
    image: '/images/tennoimg/Oberon.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Oberon头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Oberon头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Oberon机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Oberon系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Oberon总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Oberon的蓝图可在商店中购买获得，Oberon的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Oberon的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Octavia',
    image: '/images/tennoimg/Octavia.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Octavia头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Octavia头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Octavia机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Octavia系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Octavia总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Octavia的蓝图可在商店中购买获得，Octavia的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Octavia的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Protea',
    image: '/images/tennoimg/Protea.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Protea头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Protea头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Protea机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Protea系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Protea总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Protea的蓝图可在商店中购买获得，Protea的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Protea的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Qorvex',
    image: '/images/tennoimg/Qorvex.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Qorvex头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Qorvex头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Qorvex机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Qorvex系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Qorvex总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Qorvex的蓝图可在商店中购买获得，Qorvex的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Qorvex的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Revenant',
    image: '/images/tennoimg/Revenant.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Revenant头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Revenant头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Revenant机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Revenant系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Revenant总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Revenant的蓝图可在商店中购买获得，Revenant的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Revenant的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Rhino',
    image: '/images/tennoimg/Rhino.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Rhino头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Rhino头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Rhino机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Rhino系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Rhino总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Rhino的蓝图可在商店中购买获得，Rhino的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Rhino的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Saryn',
    image: '/images/tennoimg/Saryn.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Saryn头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Saryn头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Saryn机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Saryn系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Saryn总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Saryn的蓝图可在商店中购买获得，Saryn的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Saryn的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Sevagoth',
    image: '/images/tennoimg/Sevagoth.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Sevagoth头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Sevagoth头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Sevagoth机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Sevagoth系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Sevagoth总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Sevagoth的蓝图可在商店中购买获得，Sevagoth的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Sevagoth的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Stalker',
    image: '/images/tennoimg/Stalker.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Stalker头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Stalker头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Stalker机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Stalker系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Stalker总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Stalker的蓝图可在商店中购买获得，Stalker的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Stalker的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Tau',
    image: '/images/tennoimg/Tau.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Tau头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Tau头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Tau机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Tau系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Tau总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Tau的蓝图可在商店中购买获得，Tau的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Tau的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Titania',
    image: '/images/tennoimg/Titania.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Titania头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Titania头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Titania机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Titania系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Titania总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Titania的蓝图可在商店中购买获得，Titania的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Titania的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Trinity',
    image: '/images/tennoimg/Trinity.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Trinity头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Trinity头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Trinity机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Trinity系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Trinity总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Trinity的蓝图可在商店中购买获得，Trinity的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Trinity的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Valkyr',
    image: '/images/tennoimg/Valkyr.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Valkyr头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Valkyr头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Valkyr机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Valkyr系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Valkyr总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Valkyr的蓝图可在商店中购买获得，Valkyr的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Valkyr的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Vauban',
    image: '/images/tennoimg/Vauban.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Vauban头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Vauban头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Vauban机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Vauban系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Vauban总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Vauban的蓝图可在商店中购买获得，Vauban的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Vauban的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Venari',
    image: '/images/tennoimg/Venari.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Venari头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Venari头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Venari机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Venari系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Venari总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Venari的蓝图可在商店中购买获得，Venari的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Venari的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Vex',
    image: '/images/tennoimg/Vex.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Vex头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Vex头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Vex机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Vex系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Vex总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Vex的蓝图可在商店中购买获得，Vex的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Vex的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Volt',
    image: '/images/tennoimg/Volt.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Volt头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Volt头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Volt机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Volt系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Volt总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Volt的蓝图可在商店中购买获得，Volt的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Volt的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Voruna',
    image: '/images/tennoimg/Voruna.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Voruna头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Voruna头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Voruna机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Voruna系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Voruna总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Voruna的蓝图可在商店中购买获得，Voruna的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Voruna的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Wisp',
    image: '/images/tennoimg/Wisp.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Wisp头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Wisp头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Wisp机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Wisp系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Wisp总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Wisp的蓝图可在商店中购买获得，Wisp的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Wisp的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Xaku',
    image: '/images/tennoimg/Xaku.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Xaku头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Xaku头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Xaku机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Xaku系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Xaku总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Xaku的蓝图可在商店中购买获得，Xaku的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Xaku的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Yareli',
    image: '/images/tennoimg/Yareli.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Yareli头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Yareli头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Yareli机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Yareli系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Yareli总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Yareli的蓝图可在商店中购买获得，Yareli的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Yareli的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Zephyr',
    image: '/images/tennoimg/Zephyr.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Zephyr头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Zephyr头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Zephyr机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Zephyr系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Zephyr总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Zephyr的蓝图可在商店中购买获得，Zephyr的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Zephyr的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  }
]

    forging: {
      components: [
        {
          name: 'Acolyte头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Acolyte头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Acolyte机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Acolyte系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Acolyte总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
  }
]

        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Acolyte的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次A轮' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  }
]

    image: '/images/tennoimg/Amalgam.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Amalgam头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Amalgam头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Amalgam机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Amalgam系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Amalgam总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Amalgam的蓝图可在商店中购买获得，Amalgam的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Amalgam的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Archon',
    image: '/images/tennoimg/Archon.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Archon头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Archon头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Archon机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Archon系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Archon总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Archon的蓝图可在商店中购买获得，Archon的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Archon的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Assassin',
    image: '/images/tennoimg/Assassin.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Assassin头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Assassin头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Assassin机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Assassin系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Assassin总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Assassin的蓝图可在商店中购买获得，Assassin的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Assassin的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Boss',
    image: '/images/tennoimg/Boss.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Boss头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Boss头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Boss机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Boss系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Boss总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Boss的蓝图可在商店中购买获得，Boss的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Boss的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Corrupted',
    image: '/images/tennoimg/Corrupted.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Corrupted头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Corrupted头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Corrupted机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Corrupted系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Corrupted总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Corrupted的蓝图可在商店中购买获得，Corrupted的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Corrupted的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  },
  {
    title: 'Mutalist',
    image: '/images/tennoimg/Mutalist.png',
    health: '455（30级时555）',
    shield: '270（30级时370）',
    armor: '105（30级时105）',
    energy: '100（30级时150）',
    sprintSpeed: '1.15',
    helminthElement: '辐射',
    forging: {
      components: [
        {
          name: 'Mutalist头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '25,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '1' },
            { icon: '/images/resourceimg/OrokinCell.png', amount: '1' }
          ],
          time: '3天',
          speed: '50'
        },
        {
          name: 'Mutalist头部神经光元蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '150' },
            { icon: '/images/resourceimg/Neurodes.png', amount: '150' },
            { icon: '/images/resourceimg/AlloyPlate.png', amount: '1' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '150' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mutalist机体蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1,000' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '300' },
            { icon: '', amount: 'N/A' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mutalist系统蓝图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '15,000' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Ferrite.png', amount: '1' },
            { icon: '/images/resourceimg/NanoSpore.png', amount: '500' },
            { icon: '/images/resourceimg/Rubedo.png', amount: '500' }
          ],
          time: '12小时',
          speed: '25'
        },
        {
          name: 'Mutalist总图',
          materials: [
            { icon: '/images/resourceimg/Credits.png', amount: '35,000' },
            { icon: '/images/resourceimg/ControlModule.png', amount: '1' },
            { icon: '/images/resourceimg/Morphics.png', amount: '1' },
            { icon: '/images/resourceimg/Salvage.png', amount: '500' },
            { icon: '/images/resourceimg/Plastids.png', amount: '500' }
          ],
          time: '72小时',
          speed: '100'
        }
      ],
      prices: [
        { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '375' },
        { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '35,000' }
      ]
    },
    acquisition: {
      paragraphs: [
        '当前Mutalist的蓝图可在商店中购买获得，Mutalist的部件蓝图可由以下方式获得：',
        '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
        'Mutalist的蓝图也可以从无尽回廊中获得。'
      ],
      drops: [
        { item: '机体蓝图', source: '冥王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '机体蓝图', source: '冥王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '头部神经光元蓝图', source: '海王星比邻星域歼灭/爆发', probability: '4.82%', expected: '20-21次' },
        { item: '系统蓝图', source: '金星比邻星域防御', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域生存', probability: '13.33%', expected: '7-8次A轮' },
        { item: '系统蓝图', source: '金星比邻星域歼灭/爆发', probability: '4.88%', expected: '20-21次' }
      ],
      note: '期望是玩家基于各个部件的对应概率计算得期望能获得所有部件至少一次的次数。'
    }
  }
];