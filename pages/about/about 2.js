// pages/introduce/introduce.js
Page({
  data: {

    update1:'1、可以根据绩点和学分计算平均绩点，同时提供均绩精度选择服务，避免比较时造成的不便\n　　2、可以在成绩单页面选择保存成绩单，保存后的成绩单可以在主页的"查看已保存成绩单"中看到，可以查看和删除已保存的成绩单，也可以将成绩列表快速导入计算页面。'
  },
  saveImg: function (e) {
    console.log(e.currentTarget)
    let that = this
    wx.getSetting({
      success(res) {
        //未授权 先授权 然后保存
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success(re) {
              that.saveToBlum();
            }
          })
        } else {
          //已授 直接调用保存到相册方法
          that.saveToBlum();
        }
      }
    })
  },
  //保存到相册方法
  saveToBlum: function (e) {
    console.log(e)
    let imgUrl = '非网络图片';
    wx.getImageInfo({
      src: imgUrl,
      success: function (ret) {
        var path = ret.path;
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(result) {
            wx.showToast({
              title: '保存成功',
              icon: 'success'
            })
          },
        })
      }
    })
  }
})