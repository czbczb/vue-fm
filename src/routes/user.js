const UserList = () => import('@/components/user/UserList.vue')
const SetUser = () => import('@/components/user/SetUser.vue')

export default [
    {
        path: '/userList',
        component: UserList,
        name: 'UserList',
        meta: {
            title: '用户列表',
            keepAlive: true
        }
    },
    {
        path: '/setUser',
        component: SetUser,
        name: 'SetUser',
        meta: {
            title: '设置',
            keepAlive: true
        }
    }
]