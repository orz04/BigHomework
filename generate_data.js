const fs = require('fs');

// 所有64个战甲名称
const warframes = [
  'Ash', 'Atlas', 'Banshee', 'Baruuk', 'Caliban', 'Chroma', 'Citrine', 'Clem',
  'Dagath', 'Ember', 'Equinox', 'Excalibur', 'Frost', 'Gara', 'Garuda', 'Gauss',
  'Grendel', 'Harrow', 'Hildryn', 'Hydroid', 'Inaros', 'Ivara', 'Khora', 'Kullervo',
  'Lavos', 'Limbo', 'Loki', 'Mag', 'Mesa', 'Mirage', 'Nekros', 'Neeko', 'Nezha',
  'Nova', 'Nyx', 'Oberon', 'Octavia', 'Protea', 'Qorvex', 'Revenant', 'Rhino',
  'Saryn', 'Sevagoth', 'Stalker', 'Tau', 'Titania', 'Trinity', 'Valkyr', 'Vauban',
  'Venari', 'Vex', 'Volt', 'Voruna', 'Wisp', 'Xaku', 'Yareli', 'Zephyr',
  'Acolyte', 'Amalgam', 'Archon', 'Assassin', 'Boss', 'Corrupted', 'Mutalist'
];

// Ash的模板数据
const ashTemplate = {
  health: '455（30级时555）',
  shield: '270（30级时370）',
  armor: '105（30级时105）',
  energy: '100（30级时150）',
  sprintSpeed: '1.15',
  helminthElement: '辐射',
  forging: {
    components: [
      {
        name: '头部神经光元蓝图',
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
        name: '头部神经光元蓝图',
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
        name: '机体蓝图',
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
        name: '系统蓝图',
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
        name: '总图',
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
      '当前[NAME]的蓝图可在商店中购买获得，[NAME]的部件蓝图可由以下方式获得：',
      '九重天防御、生存任务A轮或九重天歼灭、爆发任务：金星比邻星域(系统蓝图)，海王星比邻星域(头部神经光元)，冥王星比邻星域(机体)。',
      '[NAME]的蓝图也可以从无尽回廊中获得。'
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
};

// 生成所有战甲数据
const allWarframes = warframes.map(name => {
  const components = ashTemplate.forging.components.map(comp => ({
    ...comp,
    name: name + comp.name
  }));
  
  const paragraphs = ashTemplate.acquisition.paragraphs.map(p => p.replace(/\[NAME\]/g, name));
  
  return {
    title: name,
    image: `/images/tennoimg/${name}.png`,
    ...ashTemplate,
    forging: {
      ...ashTemplate.forging,
      components
    },
    acquisition: {
      ...ashTemplate.acquisition,
      paragraphs
    }
  };
});

// 生成输出
let output = 'module.exports = [\n';
allWarframes.forEach((wf, index) => {
  output += '  {\n';
  output += `    title: '${wf.title}',\n`;
  output += `    image: '${wf.image}',\n`;
  output += `    health: '${wf.health}',\n`;
  output += `    shield: '${wf.shield}',\n`;
  output += `    armor: '${wf.armor}',\n`;
  output += `    energy: '${wf.energy}',\n`;
  output += `    sprintSpeed: '${wf.sprintSpeed}',\n`;
  output += `    helminthElement: '${wf.helminthElement}',\n`;
  output += '    forging: {\n';
  output += '      components: [\n';
  
  wf.forging.components.forEach(comp => {
    output += '        {\n';
    output += `          name: '${comp.name}',\n`;
    output += '          materials: [\n';
    comp.materials.forEach(m => {
      output += `            { icon: '${m.icon}', amount: '${m.amount}' }`;
      if (comp.materials.indexOf(m) !== comp.materials.length - 1) output += ',';
      output += '\n';
    });
    output += '          ],\n';
    output += `          time: '${comp.time}',\n`;
    output += `          speed: '${comp.speed}'\n`;
    output += '        }';
    if (wf.forging.components.indexOf(comp) !== wf.forging.components.length - 1) output += ',';
    output += '\n';
  });
  
  output += '      ],\n';
  output += '      prices: [\n';
  wf.forging.prices.forEach(price => {
    output += `        { type: '${price.type}', icon: '${price.icon}', currencyIcon: '${price.currencyIcon}', amount: '${price.amount}' }`;
    if (wf.forging.prices.indexOf(price) !== wf.forging.prices.length - 1) output += ',';
    output += '\n';
  });
  output += '      ]\n';
  output += '    },\n';
  output += '    acquisition: {\n';
  output += '      paragraphs: [\n';
  wf.acquisition.paragraphs.forEach(p => {
    output += `        '${p}'`;
    if (wf.acquisition.paragraphs.indexOf(p) !== wf.acquisition.paragraphs.length - 1) output += ',';
    output += '\n';
  });
  output += '      ],\n';
  output += '      drops: [\n';
  wf.acquisition.drops.forEach(drop => {
    output += `        { item: '${drop.item}', source: '${drop.source}', probability: '${drop.probability}', expected: '${drop.expected}' }`;
    if (wf.acquisition.drops.indexOf(drop) !== wf.acquisition.drops.length - 1) output += ',';
    output += '\n';
  });
  output += '      ],\n';
  output += `      note: '${wf.acquisition.note}'\n`;
  output += '    }\n';
  output += '  }';
  if (index !== allWarframes.length - 1) output += ',';
  output += '\n';
});
output += '];';

// 写入文件
fs.writeFileSync('g:/移动UI大作业/data/indexs.js', output, 'utf8');
console.log('已生成完整的64个战甲数据！');