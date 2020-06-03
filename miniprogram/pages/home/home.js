// pages/home/home.js
Page({
  data: {
    message_list: [{
      img: "../../images/icon/personae.png",
      title: '周慧 / 女'
    }, {
      img: "../../images/icon/email.png",
      title: '1546838798@qq.com'
    }, {
      img: "../../images/icon/school.png",
      title: '南昌理工学院'
    }, {
      img: "../../images/icon/github.png",
      title: 'github: github.com/Restarttt'
    }, {
      img: "../../images/icon/job.png",
      title: '工作经验 :'
    }],
    tec_list: [{
      img: "../../images/icon/dot.png",
      title: '熟悉HTML、HTML5相关知识、熟悉W3C标准'
    }, {
      img: "../../images/icon/dot.png",
      title: '熟悉CSS和CSS3相关知识，熟悉掌握常用页面布局 方式'
    }, {
      img: "../../images/icon/dot.png",
      title: '了解git相关命令、熟练使用chorme调试代码、vscode等工具'
    }, {
      img: "../../images/icon/dot.png",
      title: '对组件开发有一定的经验、有一定的项目经验'
    }, {
      img: "../../images/icon/dot.png",
      title: '熟悉vue等主流框架开发'
    }],
    pro_list: [{
      img: "../../images/icon/dot.png",
      title: 'Wall Cabin：是一款关于手机壁纸的小程序、已上线。具有收藏、保存、登录、用户访问记录、简单的搜索等功能'
    }, {
      img: "../../images/icon/dot.png",
      title: '通过云开发的数据库、云函数对图片的数据进行请求'
    }, {
      img: "../../images/icon/dot.png",
      title: '地址：https://github.com/Restarttt/Wall-Cabin'
    }],
    news_list: [{
      img: "../../images/icon/dot.png",
      title: '主页、搜索页、详情页'
    }, {
      img: "../../images/icon/dot.png",
      title: '可实现标签选择同步到导航栏、涉及多个点击事件'
    }, {
      img: "../../images/icon/dot.png",
      title: '通过vue-router的使用、axios、vuex订阅模式、模块化开发'
    }, {
      img: "../../images/icon/dot.png",
      title: '地址：https://github.com/Restarttt/Headlines-Today'
    }],
    serve_list: [{
      img: "../../images/icon/dot.png",
      title: '主页、搜索页、详情页'
    }, {
      img: "../../images/icon/dot.png",
      title: '可实现定位地区的变更同步、页面间的跳转'
    }, {
      img: "../../images/icon/dot.png",
      title: '通过vue-router、vue-cli3，vuex的使用、引用vant、element等UI库开发模块'
    }, {
      img: "../../images/icon/dot.png",
      title: '地址：https://github.com/Restarttt/MeiTuan'
    }],   
     video_list: [{
      img: "../../images/icon/dot.png",
      title: '主页、搜索页、详情页'
    }, {
      img: "../../images/icon/dot.png",
      title: '可实现不同菜单请求不同数据、页面间路由的跳转'
    }, {
      img: "../../images/icon/dot.png",
      title: '通过vue框架、路由（router）的使用、数据的请求AJAX、引用swiper组件快速开发webapp'
    }, {
      img: "../../images/icon/dot.png",
      title: '地址：https://github.com/Restarttt/Video'
    }],
    music_list: [{
      img: "../../images/icon/dot.png",
      title: '主页、搜索页、详情页'
    }, {
      img: "../../images/icon/dot.png",
      title: '可实现页面链接跳转、实现大部分CSS3动画效果'
    }, {
      img: "../../images/icon/dot.png",
      title: '通过Html5和css3、flex布局、伪类等实现静态页面、运用transform、tranlate技术实现动画效果'
    }, {
      img: "../../images/icon/dot.png",
      title: 'github地址：https://github.com/Restarttt/Qianqian-music'
    }],
    invite_list: [{
      img: "../../images/icon/dot.png",
      title: '主页、搜索页、详情页'
    }, {
      img: "../../images/icon/dot.png",
      title: '可实现链接跳转、部分鼠标移动上的静态动画'
    }, {
      img: "../../images/icon/dot.png",
      title: '通过Html5和css3、flex布局、浮动、position实现静态页面'
    }, {
      img: "../../images/icon/dot.png",
      title: '地址：https://github.com/Restarttt/lagouwang-'
    }]
  },
  go() {
    wx.navigateToMiniProgram({
      appId: 'wx154f96612eaa9b20',
      path: '',
      envVersion: 'release',
      success(res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
 video() {
    wx.navigateTo({
      url: '../index/index?id='+1,
    })
  },
  news() {
    wx.navigateTo({
      url: '../index/index?id='+2,
    })
  },
  life() {
    wx.navigateTo({
      url: '../index/index?id='+3,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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