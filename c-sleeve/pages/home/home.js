// pages/home/home.js
import {config} from "../../config/config";
import { Theme } from "../../model/theme";
import { Banner } from "../../model/banner";
import { Category } from "../../model/category";
import { Activity } from "../../model/activity";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    themeA:null,
    bannerB: null,
    bannerG: null,
    themeF: null,
    themeH: null,
    gridC: [],
    activityD: [],
    themeE: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    //console.log(data);
    this.initAllData();

  },
  async initAllData() {

    //const themeA = await Theme.getHomeLocationA()
    const theme = new Theme()
    await theme.getTemes()
    const themeA = theme.getHomeLocationA()
    const themeE = theme.getHomeLocationE()
    const themeF = theme.getHomeLocationF()
    const themeH = theme.getHomeLocationH()
    let themeSpu=[]
    if(themeE.online){
      const data = await Theme.getHomeLocationESpu()
      if(data){
        themeSpu=data.items.splice(0,8)
      }
    }
    const bannerB = await Banner.getHomeLocationB()
    const bannerG = await Banner.getHomeLocationG()
    const gridC = await Category.getGridCategoryC()
    const activityD = await Activity.getHomeLocationD()
    console.log(themeSpu);
    this.setData({
      themeA,
      bannerB,
      gridC,
      activityD,
      themeE,
      themeSpu, 
      themeF,
      bannerG,
      themeH

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
  onPullDownRefresh: function (options) {
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