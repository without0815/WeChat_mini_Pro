const app = getApp();
const util = require('../../public/js/util');

Page({

  /**
   * page default setting 
   */
  data: {
    code: wx.getStorageSync('code'),
    hasUserInfo: false,
    submited: wx.getStorageSync('code') || false,
    birthdate: ''
  },
  onLoad: function () {
    var value = wx.getStorageSync('code')
    if (value) {
      this.setData({
        submited: true,
        code: value
      });
      wx.redirectTo({
        url: "../randomCoupon/randomCoupon?id=" + new Date()
      })
    }
  },
  bindDateChange: function (el) {
    this.setData({
      "birthdate": el.detail.value
    })
  },
  clickSubmitBtn: (e) => {
    //var that = this;
    console.log('Form data：', e.detail.value);
    var formData = {
      name: e.detail.value.name,
      mobileNumber: e.detail.value.mobileNumber,
      email: e.detail.value.email,
      timestamp: new Date().getMilliseconds()
    };

    var phoneReg = /^1[34578]\d{9}$/;
    if (formData.name == '') {
      wx.showModal({
        content: 'Please input your name',
        showCancel: false
      })
      return false
    }
    if (formData.mobileNumber == '') {
      wx.showModal({
        content: 'Please input your mobileNumber',
        showCancel: false
      })
      return false
    }

    if (formData.email == '') {
      wx.showModal({
        content: 'Please input your email',
        showCancel: false
      })
      return false
    }
    if (!phoneReg.test(formData.mobileNumber)) {
      wx.showModal({
        content: 'The phone number format error',
        showCancel: false
      })
      return false
    }

    wx.showModal({
      title: '',
      showCancel: false,
      content: 'Added Success',
      success: (res) => {
        if (res.confirm) {
          wx.redirectTo({
            url: "../randomCoupon/randomCoupon?id=" + new Date()
          })
        }
      }
    })

    /**
     * send a request to back-end,check the field as name、mobileNumber、email
     */
    // util.req('randomCoupon/randomCoupon',this.data.pInfo,function(){

    // });

  },

})