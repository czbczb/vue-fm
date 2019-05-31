// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import store from './store'
import { Menu, MenuItem, Submenu, Icon} from "iview"
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Submenu', Submenu);
Vue.component('Icon', Icon);

new Vue({
  el: '#app',
  router: routes,
  store,
  components: { App },
  template: '<App/>'
})
