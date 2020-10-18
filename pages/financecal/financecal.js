//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto1: '金融公式计算器',
    motto2: '住房贷款计算器',
    motto3: '五险一金计算器',
    userInfo: {},
    defaultSize: 'default',
    disabled: false,
    iconType:'info_circle'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tofinance:function(){
    wx.navigateTo({
      url:'../finance/finance'
    })
  },
  tomortgage:function(){
    wx.navigateTo({
      url:'../mortgage/mortgage'
    })
  },
  towuxianyijin:function(){
    wx.navigateTo({
      url:'../wuxian-yijin/wxyj'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
