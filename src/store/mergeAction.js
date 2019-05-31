
import commonAction from './common/action'
import userAction from './user/action'

const actions = {
    ...commonAction,
    ...userAction
}
export default actions