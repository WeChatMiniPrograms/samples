//index.js
const app = getApp()
Page({
  data: {
    code:null,
  },
  onLoad:function(){
    const _self=this
    const time=setInterval(()=>{
      console.log('index.js check token',app.globalData.code)
      if(app.globalData.code){
        _self.setData({
          code:app.globalData.code
        })
        clearInterval(time)
      }
    },100)
  }
})