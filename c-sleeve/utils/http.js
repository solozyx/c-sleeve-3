import {config} from "../config/config";
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";
class Http {
    static async request({url,data,callback,method='GET'}) {
       const res = await promisic(wx.request)({
            url:`${config.apiBaseUrl}${url}`, //仅为示例，并非真实的接口地址
            data,
            method,
            header: {
                'content-type': 'application/json' // 默认值
            }
        })
        return res.data;
    }
}
//wx.request
/*promisic(wx.request)({

})*/
export {
    Http
}