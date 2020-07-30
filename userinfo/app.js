//app.js
App({
  onLaunch:function(){
    wx.login({
        success: res => {
          this.globalData.code=res.code
          console.log('app.js get code:',this.globalData.code)
        }
    })
  },
  globalData:{
    code:null
  }
})