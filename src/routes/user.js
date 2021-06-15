export default [
  {
    path: '/userList',
    component: () => import('@/views/user/UserList.vue'),
    name: 'UserList',
    meta: {
      title: '用户列表',
      keepAlive: true
    }
  },
  {
    path: '/setUser',
    component: () => import('@/views/user/SetUser.vue'),
    name: 'SetUser',
    meta: {
      title: '设置',
      keepAlive: true
    }
  }
]
