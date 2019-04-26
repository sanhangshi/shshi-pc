import Vue from 'vue';
import App from './App.vue';
import Router from "vue-router";
import store from "./store/store";
import ElementUI from 'element-ui';
import routerConfig from "./router";
Vue.use(ElementUI);
Vue.use(Router);

Vue.config.productionTip = false

const router = new Router({
  mode: "hash",
  routes: routerConfig
});

router.beforeEach((to, from, next) => {
  console.log("要跳转的页面：",to)

  next();
});

router.afterEach(route => {
  document.title = route.meta.title;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
