import Vue from 'vue'
import Router from 'vue-router'
import layouts from './layouts'

Vue.use(Router)

const routes = [
  {
    path: '/404',
    name: 'error',
    component: () => import('@/components/common/404')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/common/Login')
  },
  ...layouts
]

export default new Router({mode: 'history', routes })
