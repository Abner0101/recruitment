Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentCity: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getLocation();
    },

    getLocation: function () {
        var page = this
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                page.loadCity(longitude, latitude)

            },
        })
    },

    loadCity: function (longitude, latitude) {
        var page = this
        wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=7r1vRfq8Y65pWjGhGfG9npLMfXGmfzjD&location=' + latitude + ',' + longitude + '&output=json',
            data: {},
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                // success
                console.log(res);
                var city = res.data.result.addressComponent.city;
                page.setData({ currentCity: city });
            },
            fail: function () {
                page.setData({ currentCity: "获取定位失败" });
            },
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