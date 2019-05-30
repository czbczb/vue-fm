// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import routes from './routes'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  components: { App },
  template: '<App/>'
})
