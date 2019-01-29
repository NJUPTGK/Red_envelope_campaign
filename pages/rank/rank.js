// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "background": "/images/13r888piCn8p.png"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.redirectTo({
      url: '../red/red'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let base64 = wx.getFileSystemManager().readFileSync(this.data.background, 'base64');
    this.setData({
      'background': 'data:image/png;base64,' + base64
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '红包大作战',//分享内容
      path: '/pages/index/index',//分享地址
      imageUrl: '/images/red-packet.png',//分享图片
    }
  }
})