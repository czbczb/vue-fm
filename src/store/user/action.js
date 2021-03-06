import api from '@/api/api'
// 这是全局引入，也可以按需引入
import types from './mutation_type'

export default {
  async getUserInfo ({ commit}, params) {
    let res = await api.userInfo.getUserInfo(params)
    console.log(res)
    commit(types.UNSERINFO, res.data)
  }
}
