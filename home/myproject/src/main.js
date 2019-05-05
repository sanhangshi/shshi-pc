// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(uiv)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})