import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import user from './user'
import layouts from './layouts'

Vue.use(Router);

const routes = [
    ...layouts,
    ...home,
    ...user
]

export default new Router({mode: 'history', routes })