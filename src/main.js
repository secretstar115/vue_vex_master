import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from "bootstrap-vue";
import VeeValidate from "vee-validate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from 'vue-router';
import router  from './router'
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueRouter);
// const router = new VueRouter({routes});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
