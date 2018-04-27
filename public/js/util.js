/** this is common util */


/**
 * 
 * @param {*} flag 
 * @param {*} min 
 * @param {*} max 
 */
const randomStr = (flag, min, max) => {
    var str = "";
    var index = "";
    var range = min;
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b',
        'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    //between min and max
    if (flag) {
        range = Math.floor(Math.random() * (max - min + 1) + min);
    }
    for (var i = 0; i < range; i++) {
        index = Math.round(Math.random() * (arr.length - 1));
        str += arr[index];
    }
    return str;
}

//set base request path
const basePath = 'https://www.dfs.com/api/';
//add appid info as parm
const AppConf = {
    'appid': 'wx61f7708fbb157848',
    'appsecret': ''
};

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} cb 
 */
const req = (url, data, cb) => {
    data.appid = AppConf.appid;
    data.appsecret = AppConf.appsecret;
    wx.request({
        url: basePath + url,
        data: data,
        method: 'post',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
            return typeof cb == "function" && cb(res.data)
        },
        fail: function () {
            return typeof cb == "function" && cb(false)
        }
    })
}

module.exports = {
    randomStr: randomStr,
    req: req,
}