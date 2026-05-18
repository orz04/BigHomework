const fs = require('fs');
const data = require('./data/indexs');

let allGood = true;
let missingCount = 0;

data.forEach((tenno, index) => {
  const hasAllFields = tenno.forging && tenno.forging.components && tenno.forging.prices && tenno.acquisition;
  if (!hasAllFields) {
    console.log('缺少字段:', tenno.title);
    missingCount++;
    allGood = false;
  }
});

console.log('=== 检查结果 ===');
console.log('总战甲数:', data.length);
console.log('缺少字段的战甲数:', missingCount);
console.log('状态:', allGood ? '✓ 所有战甲数据结构完整' : '✗ 部分战甲缺少字段');