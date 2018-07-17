
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        currentCity: '',
        searchtext: '',  //搜索文字
        showsearch: false,   //显示搜索按钮
        searchtext: '',  //搜索文字
        filterdata: {},  //筛选条件数据
        showfilter: false, //是否显示下拉筛选
        showfilterindex: null, //显示哪个筛选类目
        jobindex: 0,  //一级职位索引
        jobid: null,  //一级职位id
        cityindex: 0,  //一级城市索引
        cityid: null,  //一级城市id
        moneyindex:0,
        moneyid:null,
        searchindex:0,
        searchid:null,
        servicelist:[], //服务集市列表
        scrolltop: null, //滚动位置
        page: 0  //分页


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.fetchData();
        this.getLocation();
        this.fetchFilterData();
        this.fetchServiceData();
    },

    inputSearch: function (e) {  //输入搜索文字
        this.setData({
            showsearch: e.detail.cursor > 0,
            searchtext: e.detail.value
        })
    },
    submitSearch: function () {  //提交搜索
        console.log(this.data.searchtext);
        this.fetchServiceData();
    },

    fetchFilterData: function () { //获取筛选条件
        this.setData({
            filterdata: {
                "job": [
                    {
                        "id": 0,
                        "title": "全部"
                    },
                    {
                        "id": 1,
                        "title": "经理"
                    },
                    {
                        "id": 2,
                        "title": "销售"
                    },
                    {
                        "id": 3,
                        "title": "会计"
                    },
                    {
                        "id": 4,
                        "title": "IT"
                    },
                ],
                "money": [
                    {
                        "id": 0,
                        "title": "1000以下"
                    },
                    {
                        "id": 1,
                        "title": "1000~1500"
                    },
                    {
                        "id": 2,
                        "title": "2000~3000"
                    },
                    {
                        "id": 3,
                        "title": "3000~5000"
                    },
                    {
                        "id": 4,
                        "title": "5000~8000"
                    },
                    {
                        "id": 5,
                        "title": "8000~12000"
                    },
                    {
                        "id": 6,
                        "title": "12000以上"
                    }
                ],
                "search":[
                    {
                        "id":0,
                        "title":"包吃"
                    },
                    {
                        "id": 1,
                        "title": "包住"
                    },
                    {
                        "id": 2,
                        "title": "五险一金"
                    }
                ],
                "city": [
                    {
                        "id": 0,
                        "title": "全部"
                    },
                    {
                        "id": 1,
                        "title": "南城"
                    },
                    {
                        "id": 2,
                        "title": "松山湖"
                    },
                    {
                        "id": 3,
                        "title": "东城"
                    },
                    {
                        "id": 4,
                        "title": "大岭山"
                    },
                    {
                        "id": 5,
                        "title": "莞城"
                    }
                ],
            }
        })
    },

    setFilterPanel: function (e) { //展开筛选面板
        const d = this.data;
        const i = e.currentTarget.dataset.findex;
        if (d.showfilterindex == i) {
            this.setData({
                showfilter: false,
                showfilterindex: null
            })
        } else {
            this.setData({
                showfilter: true,
                showfilterindex: i,
            })
        }
        console.log(d.showfilterindex);
    },

    setJobIndex: function (e) { //职位索引
        const d = this.data;
        const dataset = e.currentTarget.dataset;
        this.setData({
            jobindex:dataset.jobindex,
            jobid: dataset.jobid
        })
        console.log('职位类别id：一级--' + this.data.jobid);
    },

    setCityIndex: function (e) { //服务城市一级索引
        const d = this.data;
        const dataset = e.currentTarget.dataset;
        this.setData({
            cityindex:dataset.cityindex,
            cityid: dataset.cityid
        })
        console.log('服务城市id：一级--' + this.data.cityid);
    },

    setSearchIndex: function (e) { //筛选索引
        const d = this.data;
        const dataset = e.currentTarget.dataset;
        this.setData({
            searchindex: dataset.searchindex,
            searchid: dataset.searchid
        })
        console.log('筛选id：一级--' + this.data.searchid);
    },

    setMoneyIndex: function (e) { //薪资索引
        const d = this.data;
        const dataset = e.currentTarget.dataset;
        this.setData({
            moneyindex: dataset.moneyindex,
            moneyid: dataset.moneyid
        })
        console.log('薪资id：一级--' + this.data.moneyid);
    },

    hideFilter: function () { //关闭筛选面板
        this.setData({
            showfilter: false,
            showfilterindex: null
        })
    },

    fetchData: function () {
        this.setData({
            indexmenu: [
                {
                    'icon': './../../images/wallet.png',
                    'text': '高薪工作',
                    'url': 'work'
                },
                {
                    'icon': './../../images/badge.png',
                    'text': '岗位急招',
                    'url': 'service'
                },
                {
                    'icon': './../../images/vespa.png',
                    'text': '轻松兼职',
                    'url': 'conference'
                },
                {
                    'icon': './../../images/theatre.png',
                    'text': '996专职',
                    'url': 'apply'
                }
            ],
            imgUrls: [
                'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            ]
        })
    },
    changeRoute: function (url) {
        wx.navigateTo({
            url: `../${url}/${url}`
        })
    },

   
    onPullDownRefresh: function () { //下拉刷新
        this.setData({
            page: 0,
            servicelist: []
        })
        this.fetchData();
        this.getLocation();
        this.fetchServiceData();
        this.fetchFilterData();
        setTimeout(() => {
            wx.stopPullDownRefresh()
        }, 1000)
    },  

    fetchServiceData: function () {  //获取城市列表
        let _this = this;
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        })
    const perpage = 10;
        this.setData({
            page: this.data.page + 1
        })
    const page = this.data.page;
        const newlist = [];
        for(var i = (page - 1) * perpage; i<page * perpage; i++) {
    newlist.push({
        "id": i + 1,
        "job": "前端工程师",
        "pushtime": "昨天",
        "money": "15000~30000",
        "companeyname": "东莞有信信息技术有限公司" + (i + 1),
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

scrollHandle:function(e) { //滚动事件
    this.setData({
        scrolltop: e.detail.scrollTop
    })
},

goToTop:function () { //回到顶部
    this.setData({
        scrolltop: 0
    })
},

scrollLoading:function () { //滚动加载
    this.fetchServiceData();
},



    //城市定位
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