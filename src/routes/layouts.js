const layouts = () =>  import('@/components/common/layouts.vue')

import home from './home'
import user from './user'
export default[
    {
        path: '/',
        name: 'layouts',
        component: layouts,
        children: [
            ...home,
            ...user
        ]
    }
]