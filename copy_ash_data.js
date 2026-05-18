const fs = require('fs');

// 读取文件
const content = fs.readFileSync('g:/移动UI大作业/data/indexs.js', 'utf8');

// 提取Ash的完整数据块（从开头到Ash之后的第一个逗号）
const ashStart = content.indexOf("title: 'Ash'");
const ashEnd = content.indexOf("},\n{", ashStart);
const ashData = content.substring(ashStart, ashEnd);

console.log('=== 开始替换所有战甲数据 ===');

// 获取所有战甲名称
const nameRegex = /title:\s*'([^']+)'/g;
const names = [];
let match;
while ((match = nameRegex.exec(content)) !== null) {
  names.push(match[1]);
}

console.log('战甲总数:', names.length);

// 为每个战甲生成新数据
let newData = 'module.exports = [\n';

names.forEach((name, index) => {
  let warframeData = ashData
    .replace(/'Ash'/g, `'${name}'`)
    .replace(/Ash头部神经光元蓝图/g, name + '头部神经光元蓝图')
    .replace(/Ash机体蓝图/g, name + '机体蓝图')
    .replace(/Ash系统蓝图/g, name + '系统蓝图')
    .replace(/Ash总图/g, name + '总图')
    .replace(/\/images\/tennoimg\/Ash\.png/g, `/images/tennoimg/${name}.png`);
  
  // 修改入手方式中的Ash引用
  warframeData = warframeData.replace(/Ash的/g, name + '的');
  warframeData = warframeData.replace(/Ash/g, name);
  
  newData += '  {\n' + warframeData + '\n  }';
  if (index < names.length - 1) {
    newData += ',';
  }
  newData += '\n';
});

newData += '];';

// 写入文件
fs.writeFileSync('g:/移动UI大作业/data/indexs.js', newData, 'utf8');
console.log('=== 完成！所有战甲数据已替换为Ash的数据 ===');
console.log('更新的战甲数量:', names.length);