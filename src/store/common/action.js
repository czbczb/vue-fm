import api from '@/api/api'
// 这是全局引入，也可以按需引入
import types from './mutation_type'

export default {
  async getMenuList ({ commit }, params) {
    let res = await api.common.getMenuList(params)
    let data = res.data
    commit(types.MENULIST, data)
  }
}
