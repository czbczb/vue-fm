import types  from './mutation_type'

const commonMutation = {
    [types.MENULIST]: (state, data) => state[types.MENULIST] = data
}
export default commonMutation