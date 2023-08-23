// index.js
// 获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    region:['山东省','泰安市','泰山区'],
    now:{
        temp:0,
        text:'未知',
        icon:'999',
        humidity:0,
        pressure:0,
        vis:0,
        windDir:0,
        windSpeed:0,
        windScale:0
    },
    id:0,
  },

getWeather:function(){
    var temp =require("./utils/util.js");
    
    var that=this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?',
      data:{
          location:temp.getLocationID(that.data.region[1]),
          key:'24c0d1da75ee43ef8975566f5101a371'
      },
      success:function(res){
         console.log(res.data)
          that.setData({now:res.data.now})
      },
    })
},

regionChange:function(e){
    this.setData({region:e.detail.value})
    this.getWeather();
},

onLoad:function(options){
    this.getWeather();
},

})