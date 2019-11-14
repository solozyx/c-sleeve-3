/*
*
* */
//业务对象
//theme banner spu sku address user

import {Http} from "../utils/http";

class Theme {
    static locationA='t-1'
    static locationE='t-2'
    static locationF='t-3'
    static locationH='t-4'
    themes =[]
    async getTemes() {
      const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
      this.themes= await Http.request({
        url: `themes.json`,
        data: {
            names
        }
      });
  }
  getHomeLocationA(){
      return this.themes.find(t=>t.name===Theme.locationA)

  }
  getHomeLocationE() {
    return this.themes.find(t => t.name === Theme.locationE)

  }
  getHomeLocationF() {
    return this.themes.find(t => t.name === Theme.locationF)

  }
  getHomeLocationH() {
    return this.themes.find(t => t.name === Theme.locationH)

  }
  static getHomeLocationESpu(){
    return Theme.getThemeSpuByName(Theme.locationE)
  }
  static getThemeSpuByName(name){
     return Http.request({
      url: `spu.json`,
      data: {
        name
      }
    });
  }
}

export {
    Theme
}