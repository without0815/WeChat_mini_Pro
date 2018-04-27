const util = require('../../public/js/util');

Page({
  data: {
    randomStr: ''
  },
  onLoad: function () {

    // get random code
    var randStr7 = wx.getStorageSync('code') || util.randomStr(false, 7);
    this.setData({
      'randomStr': randStr7
    })

    try {
      wx.setStorageSync('code', randStr7);
    } catch (e) {
      console.error(e);
    }

  }
})