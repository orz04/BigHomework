module.exports = {
  items: [
    {
      title: '玻之武杖',
      image: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/weaponimg/meleeimg/Bo.png?sign=55b778558e91111eec0334a05b59e3c1&t=1781254146',
      labels: {
        forging: '铸造需求',
        basicInfo: '基础信息',
        attackInfo: '普通攻击',
        groundAttackInfo: '震地攻击',
        heavyGroundAttackInfo: '重型震地攻击',
        type: '武器类型',
        slot: '武器槽位',
        mastery: '精通段位要求',
        range: '攻击范围',
        normalRadius: '法向延展半径',
        attackSpeed: '攻击速度',
        blockAngle: '格挡角度',
        comboDuration: '连击持续时间',
        damagePenetration: '伤害穿透系数',
        polarity: '极性',
        riftPolarity: '裂罅倾向',
        totalDamage: '总伤害',
        noise: '噪音等级',
        statusChance: '触发几率',
        criticalChance: '暴击几率',
        criticalDamage: '暴击伤害',
        damageType: '伤害判定类型',
        damageRange: '伤害范围',
        damageDecay: '伤害衰减',
        forcedStatus: '强制触发'
      },
      forging: {
        materials: [
          { icon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=c2794ea8bbdccdccf862eaacb90d57ba&t=1779161854', amount: '15,000' },
          { icon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/OrokinCell.png?sign=c069476c5f66b5980a87ae355e304227&t=1781255384', amount: '1' },
          { icon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Salvage.png?sign=1a5f3e63b1c5f32baece681768b768b1&t=1781255404', amount: '900' },
          { icon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Ferrite.png?sign=f145c164256e2d4a494c9e09d575b9e9&t=1781255416', amount: '600' },
          { icon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/AlloyPlate.png?sign=10e075d293729a16a97988d6ef965749&t=1781255362', amount: '150' }
        ],
        time: '12小时',
        speed: '25',
        prices: [
          { type: '商店', icon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/MarketIcon.png?sign=0a23c025a7c0550b41bebaea9945f50c&t=1779161909', currencyIcon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Platinum.png?sign=5cd80582566639d1f3e7404674d1d499&t=1779161920', amount: '65' },
          { type: '蓝图', icon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Blueprint2.svg.png?sign=928ea774ea82886cfacd530b63ddafb9&t=1779161893', currencyIcon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/resourceimg/Credits.png?sign=c2794ea8bbdccdccf862eaacb90d57ba&t=1779161854', amount: '15,000' }
        ]
      },
      type: '长棍',
      slot: '近战',
      mastery: '无',
      range: '3.0米',
      normalRadius: '0.25米',
      attackSpeed: '1倍基准攻速',
      blockAngle: '60°',
      comboDuration: '5.0秒',
      damagePenetration: '50%',
      polarityIcon: 'https://636c-cloud1-d5gj26hlf342afe88-1433985605.tcb.qcloud.la/images/modimg/Polarityimg/Unairu.png?sign=a1d11a4079dc0ecfc20a087b0b7ca76a&t=1781255243',
      polarity: 'Unairu',
      riftPolarity: '1.35',
      attackData: {
        totalDamage: '140(90.0%)',
        attackSpeed: '1倍',
        noise: '无声',
        statusChance: '20.0%',
        criticalChance: '12.5%',
        criticalDamage: '2x'
      },
      groundAttackData: {
        totalDamage: '280(100.0%)',
        attackSpeed: '1倍',
        damageType: '范围伤害',
        noise: '无声',
        damageRange: '6米',
        damageDecay: '0米内100%伤害<br/>6米外50.0%伤害',
        statusChance: '10.0%',
        forcedStatus: '冲击',
        criticalChance: '12.5%',
        criticalDamage: '2x'
      },
      heavyGroundAttackData: {
        totalDamage: '420(100.0%)',
        attackSpeed: '1倍',
        damageType: '范围伤害',
        noise: '无声',
        damageRange: '7米',
        damageDecay: '0米内100%伤害<br/>7米外70.0%伤害',
        statusChance: '10.0%',
        forcedStatus: '浮空',
        criticalChance: '12.5%',
        criticalDamage: '2x'
      }
    }
  ]
}
