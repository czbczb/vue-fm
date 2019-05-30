const userList = () =>  import('@/components/user/userList.vue')
const setUser = () => import('@/components/user/setUser.vue')

export default[
    {
        path: '/userList',
        component: userList,
        meta: {
            title: '用户列表',
            keepAlive: true
        }
    },
    {
        path: '/setUser',
        component: setUser,
        meta: {
            title: '设置',
            keepAlive: true
        }
    }

]