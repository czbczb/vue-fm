// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import store from './store'
import { Menu, MenuItem, Submenu, Icon, Modal, TabPane, Col, Form, FormItem, Input, Row} from "iview"
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Submenu', Submenu);
Vue.component('Icon', Icon);
Vue.component('Modal', Modal);
Vue.component('TabPane', TabPane);
Vue.component('Col', Col);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Input', Input);
Vue.component('Row', Row);


routes.beforeEach((to, from, next) => { // 全局前置守卫按照创建顺序调用
  console.log(to)
  console.log(from)
  console.log(next)

  // 如果未匹配到路由
  if (to.matched.length ===0) {  
    // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    next('/error');
  }

  // 登陆状态验证
  let token = localStorage.getItem('token');
  if(!token && to.name !== 'Login'){
    next('login')
  }
  
})

new Vue({
  el: '#app',
  router: routes,
  store,
  components: { App },
  template: '<App/>'
})
