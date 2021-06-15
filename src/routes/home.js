export default [
  {
    path: '/instruction',
    name: 'Instruction',
    component: () => import('@/views/home/Instruction.vue'),
    meta: {
      title: '公司简介',
      keepAlive: true
    }
  },
  {
    path: '/company',
    component: () => import('@/views/home/Company.vue'),
    name: 'Company',
    meta: {
      title: '合伙人',
      keepAlive: true
    }

  }

]
