// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const wxContext = cloud.getWXContext()
  switch (event.action) {
    case 'getvideo': {
      return getvideo(event)
    }
    case 'getnews': {
      return getnews(event)
    }
    case 'getlife': {
      return getlife(event)
    }
  }
}
async function getvideo(event) {
  const video_list = await db.collection('video').get()
  console.log(video_list)
  return  video_list.data
}
async function getnews(event) {
  const news_list = await db.collection('news').get()
  return news_list.data
 
}
async function getlife(event) {
  const life_list = await db.collection('life').get()
  return  life_list.data

}