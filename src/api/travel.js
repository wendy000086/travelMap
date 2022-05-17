import axios from 'axios'
import qs from 'qs';

export default {

    async getAuthorizationHeader() {
        const parameter = {
            grant_type:"client_credentials",
            client_id: "wendychou4j-5cd74f33-817d-47de",
            client_secret: "789000a4-4fd4-4abf-a419-8e6269923418"
          };
    
          let auth_url =
            `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`;
          try {
            let res = await axios({
              method: "POST",
              url: auth_url,
              // axios預設是傳送JSON格式，如果需要application/x-www-form-urlencoded這種傳統的表單格式，就需要用qs library去處理
              data: qs.stringify(parameter),
              headers: { "content-type": "application/x-www-form-urlencoded" },
            });
            let accesstoken = res.data;
            return {
              // 在HEADER中使用Authorization的並帶入存取的Token，如Basic、Bearer等type 的Token。
              // Basic Token 主要還是使用在網域上的防護(Realm)，而Bearer則是針對protect resource的存取
              authorization: `Bearer ${accesstoken.access_token}`,
            }
          } catch (err) {
            return err;
          }
    },

    // 寫法1
    // async getCityList() {
    //     let apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/LiveTrainDelay?$top=30&$format=JSON";
    //     try {
    //       let res = await axios.get(apiUrl, {
    //         headers: await this.getAuthorizationHeader(),
    //       });
    //       return await res.data;

    //     } catch (err) {
    //       console.log(err);
    //     }
    // },


    // 寫法2(存在store)
    // 取得所有觀光景點資料
    async  getSpotList() {
      let apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24top=30&%24format=JSON";

      return axios({
        url: apiUrl,
        method:'get',
        headers: await this.getAuthorizationHeader(),
      })
      
    },


    //取得指定[縣市]觀光景點資料
    async  getCityList() {
      let apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/Taipei?%24top=30&%24format=JSON
      `;

      return axios({
        url: apiUrl,
        method:'get',
        headers: await this.getAuthorizationHeader(),
      })
    },

    


}

