
import Vue from 'vue'
import Router from 'vue-router'
import ShopList from '../components/ShopList.vue';
import ShopDetail from '../components/ShopDetail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name:'ShopList', component: ShopList },
    { path: '/detail', name:'detail', component: ShopDetail, props: true}
  ]
})