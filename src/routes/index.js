import Vue from 'vue'
import Router from 'vue-router'
import layouts from './layouts'

Vue.use(Router);

const routes = [
    ...layouts
]

export default new Router({mode: 'history', routes })