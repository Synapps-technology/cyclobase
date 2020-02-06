// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NavBar from './components/NavBar'
import router from './core/Router'
import store from './core/Store'
import axios from 'axios'
import BootstrapVue from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App, NavBar },
  render: h => h(App)
});
