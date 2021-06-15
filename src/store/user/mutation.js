import types from './mutation_type'

const commonMutation = {
  async [types.UNSERINFO] (state, bData) {
    state.userInfo = bData
  }
}
export default commonMutation
