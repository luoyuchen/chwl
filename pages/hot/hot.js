var postsData = require('../../data/hot/hot.js')//此处用的是
Page({
  data:{
    
  },
  onLoad: function (option) {
     this.setData({
      postList:postsData.postList[0]
    })
      //console.log(postsData)  


    },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '【平谷桃花节】', // 分享标题
      desc: '沐浴绯色花海', // 分享描述
      path: 'pages/hot/hot' // 分享路径
    }
  }
})