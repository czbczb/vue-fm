import axios from './axiosHttp'
import '../mock/mockApi'
import BaseUrl from '../config/config'

export default class api {
    static userInfo = {
      getUserInfo: params => axios.getHttp(`${BaseUrl}/getUserInfo`, params)
    }

    static common = {
      getMenuList: params => axios.postHttp(`${BaseUrl}/getMenuList`, params)
    }
}
