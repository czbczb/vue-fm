
import commonState from './common/state'
import userState from './user/state'

const state = {
    ...commonState,
    ...userState
}

export default state