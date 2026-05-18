const fs = require('fs');

const template = {
  forging: {
    components: [
      {
        name: '',
        materials: [
          { icon: '/images/resourceimg/Credits.png', amount: '待补充' },
          { icon: '/images/tennoimg/Helmet.png', amount: '待补充' },
          { icon: '/images/tennoimg/Chassis.png', amount: '待补充' },
          { icon: '/images/tennoimg/Systems.png', amount: '待补充' },
          { icon: '/images/resourceimg/OrokinCell.png', amount: '待补充' }
        ],
        time: '待补充',
        speed: '待补充'
      },
      {
        name: '',
        materials: [
          { icon: '/images/resourceimg/Credits.png', amount: '待补充' },
          { icon: '/images/resourceimg/AlloyPlate.png', amount: '待补充' },
          { icon: '/images/resourceimg/NeuralSensor.png', amount: '待补充' },
          { icon: '/images/resourceimg/PolymerBundle.png', amount: '待补充' },
          { icon: '/images/resourceimg/Rubedo.png', amount: '待补充' }
        ],
        time: '待补充',
        speed: '待补充'
      },
      {
        name: '',
        materials: [
          { icon: '/images/resourceimg/Credits.png', amount: '待补充' },
          { icon: '/images/resourceimg/Morphics.png', amount: '待补充' },
          { icon: '/images/resourceimg/Ferrite.png', amount: '待补充' },
          { icon: '/images/resourceimg/Rubedo.png', amount: '待补充' },
          { icon: null, amount: 'N/A' }
        ],
        time: '待补充',
        speed: '待补充'
      },
      {
        name: '',
        materials: [
          { icon: '/images/resourceimg/Credits.png', amount: '待补充' },
          { icon: '/images/resourceimg/ControlModule.png', amount: '待补充' },
          { icon: '/images/resourceimg/Morphics.png', amount: '待补充' },
          { icon: '/images/resourceimg/Salvage.png', amount: '待补充' },
          { icon: '/images/resourceimg/Plastids.png', amount: '待补充' }
        ],
        time: '待补充',
        speed: '待补充'
      }
    ],
    prices: [
      { type: '商店', icon: '/images/resourceimg/MarketIcon.png', currencyIcon: '/images/resourceimg/Platinum.png', amount: '待补充' },
      { type: '蓝图', icon: '/images/resourceimg/Blueprint2.svg.png', currencyIcon: '/images/resourceimg/Credits.png', amount: '待补充' }
    ]
  },
  acquisition: {
    paragraphs: ['待补充'],
    drops: [],
    note: ''
  }
};

let content = fs.readFileSync('g:/移动UI大作业/data/indexs.js', 'utf8');

const regex = /\{\s*\n\s*title:\s*'([^']+)',\s*image:\s*'[^']+'\s*\n\s*\}/g;
let match;
let count = 0;
let tennoNames = [];

while ((match = regex.exec(content)) !== null) {
  const name = match[1];
  if (name !== 'Ash') {
    tennoNames.push(name);
  }
}

console.log('Found ' + tennoNames.length + ' warframes to update');

tennoNames.forEach(name => {
  const forgingCopy = JSON.parse(JSON.stringify(template));
  forgingCopy.forging.components[0].name = name + '头部神经光元蓝图';
  forgingCopy.forging.components[1].name = name + '机体蓝图';
  forgingCopy.forging.components[2].name = name + '系统蓝图';
  forgingCopy.forging.components[3].name = name + '总图';

  const oldEntry = `{\n    title: '${name}',\n    image: '/images/tennoimg/${name}.png'\n  }`;
  const forgingStr = JSON.stringify(forgingCopy.forging).replace(/"([^"]+)":/g, '$1:');
  const newEntry = `{\n    title: '${name}',\n    image: '/images/tennoimg/${name}.png',\n    health: '待补充',\n    shield: '待补充',\n    armor: '待补充',\n    energy: '待补充',\n    sprintSpeed: '待补充',\n    helminthElement: '待补充',\n    forging: ${forgingStr},\n    acquisition: ${JSON.stringify(forgingCopy.acquisition).replace(/"([^"]+)":/g, '$1:')}\n  }`;

  if (content.includes(oldEntry)) {
    content = content.replace(oldEntry, newEntry);
    count++;
  }
});

fs.writeFileSync('g:/移动UI大作业/data/indexs.js', content, 'utf8');
console.log('Done! Updated ' + count + ' warframes');