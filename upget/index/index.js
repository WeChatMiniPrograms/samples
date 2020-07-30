const app = getApp()
Page({
  data: {
    list:[],
    up:false
  },
  insert:function(){
    let arr = [...this.data.list]
    let count = arr.length
    for (let index = 0; index < 5; index++) {
      arr.push({
        id:index+count
      })
    }
    this.setData({
      "list":arr
    })
  },
  onLoad: function () {
    this.insert()
  },
  scrollToLower:function(){
    const _self=this
    if(!this.data.up){
      this.setData({
        "up":true
      })
      wx.showLoading({
        title: 'loading',
      })
      setTimeout(() => {
        _self.insert()
        wx.hideLoading({
          success: (res) => {},
        })
        _self.setData({
          "up":false
        })
      }, 1000);
      console.log("insert")
    }
  }
})
