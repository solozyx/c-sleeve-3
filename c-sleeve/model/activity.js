
import { Http } from "../utils/http";

class Activity {
  static async getHomeLocationD() {
    return Http.request({
      url: `activity.json`
    })
  }
}

export {
  Activity
}