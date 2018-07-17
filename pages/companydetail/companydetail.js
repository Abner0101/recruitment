var companyData = require('../../companydata/companydata.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companydetail:{},
    isFold: true,
    servicelist: [], //服务集市列表
    scrolltop: null, //滚动位置
    page: 0  //分页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          companyList: companyData.companyList
      });
      this.fetchServiceData();
  },


  showAll: function (e) {
      this.setData({
          isFold: !this.data.isFold,
      })
  },


  fetchServiceData: function () {  //获取城市列表
      let _this = this;
      wx.showToast({
          title: '加载中',
          icon: 'loading'
      })
      const perpage = 6;
      this.setData({
          page: this.data.page + 1
      })
      const page = this.data.page;
      const newlist = [];
      for (var i = (page - 1) * perpage; i < page * perpage; i++) {
          newlist.push({
              "id": i + 1,
              "job": "前端工程师",
              "pushtime": "昨天",
              "money": "15000~30000",
              "companeyname": "东莞有信信息技术有限公司",
              "city": "南城",
              "tags": [
                  { "tag": "IT" },
                  { "tag": "计算机" },
                  { "tag": "web" },
                  { "tag": "前端" }
              ]
          })
      }
      setTimeout(() => {
          _this.setData({
              servicelist: _this.data.servicelist.concat(newlist)
          })
      }, 1500)
  },

  scrollHandle: function (e) { //滚动事件
      this.setData({
          scrolltop: e.detail.scrollTop
      })
  },

  goToTop: function () { //回到顶部
      this.setData({
          scrolltop: 0
      })
  },

  scrollLoading: function () { //滚动加载
      this.fetchServiceData();
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