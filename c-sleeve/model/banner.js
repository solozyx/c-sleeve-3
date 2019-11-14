
import { Http } from "../utils/http";
class Banner {
  static locationB = 'b-1'
  static locationG = 'b-2'
  static async getHomeLocationB() {
    return await Http.request({
      url: `banner.json`,
      data: {
        names: `${Banner.locationB}`
      }
    });
  }
  static async getHomeLocationG() {
    return await Http.request({
      url: `banner2.json`,
      data: {
        names: `${Banner.locationG}`
      }
    });
  }
}


export {
  Banner
}