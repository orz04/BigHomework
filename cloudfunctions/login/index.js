// 云函数 login：通过云开发上下文返回当前用户的 openid / appid / unionid
// 部署：微信开发者工具 → 云开发 → 右键 cloudfunctions/login → 上传并部署：云端安装依赖
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async () => {
  const wxContext = cloud.getWXContext()
  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID || ''
  }
}
