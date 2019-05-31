import commonGetters from './common/getters'
import userGetters from './user/getters'

const getters =  {
    ...commonGetters,
    ...userGetters
}

export default getters