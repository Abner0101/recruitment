Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobdetail:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const i=options.id;
    this.setData({
        jobdetail:{
            "id": i + 1,
            "job":"前端工程师",
            "pushtime":"昨天",
            "money":"15000~30000",
            "companeyname": "东莞有信信息技术有限公司" + i ,
            "city": "南城",
            "tags": [
                { "tag": "IT" },
                { "tag": "计算机" },
                { "tag": "web" },
                { "tag": "前端" }
            ]
        }
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
    
  }
})