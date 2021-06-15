import home from './home'
import user from './user'
export default [
  {
    path: '/',
    name: 'layouts',
    component: () => import('@/components/common/layouts.vue'),
    children: [
      ...home,
      ...user
    ]
  }
]
