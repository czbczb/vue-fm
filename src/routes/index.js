import Vue from 'vue'
import Router from 'vue-router'
import layouts from './layouts'
const error = () => import('@/components/common/404');
const Login = () => import('@/components/common/Login');

Vue.use(Router);

const routes = [
    {
        path: '/404',
        name: 'error',
        component: error
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    ...layouts
]

export default new Router({mode: 'history', routes })