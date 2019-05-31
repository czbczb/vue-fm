
import commonMutation from './common/mutation'
import userMutation from './user/mutation'

const mutation = {
    ...commonMutation,
    ...userMutation
}
export default mutation