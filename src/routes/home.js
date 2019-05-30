const company = () => import('@/components/user/userList.vue')
const setUser = () => import('@/components/user/setUser.vue')

export default [
    {
        path: '/instruction',
        component: setUser,
        meta: {
            title: '公司简介',
            keepAlive: true
        }
    },
    {
        path: '/company',
        component: company,
        meta: {
            title: '合伙人',
            keepAlive: true
        }

    }
    
]