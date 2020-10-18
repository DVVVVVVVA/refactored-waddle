//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto1: '科学计算器',
    motto2: '单矩阵计算器',
    motto3: '多矩阵计算器',
    motto4: '体育计算器',
    motto5: '绩点计算器',
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
  toCalc:function(){
    wx.navigateTo({
      url:'../calc/calc'
    })
  },
  tomatrix:function(){
    wx.navigateTo({
      url:'../matrix/matrix'
    })
  },
  tomatrix2:function(){
    wx.navigateTo({
      url:'../matrix2/matrix2'
    })
  },
  tosport:function(){
    wx.navigateTo({
      url:'../sport/sport'
    })
  },
  togpa:function(){
    wx.navigateTo({
      url:'../indexgpa/indexgpa'
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
