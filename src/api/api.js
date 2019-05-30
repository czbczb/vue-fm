import axios from './asioxHttp'
import '../mock/mockApi'
import BaseUrl from '../config/config'

export default class api {
    static userInfo = {
        getUserInfo: params => axios.getHttp(`${BaseUrl}/getUserInfo`, params),
        getMenuList: params => axios.postHttp(`${BaseUrl}/getMenuList`, params)
    }
}