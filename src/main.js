import Vue from 'vue';
import Buefy from 'buefy';
import VueRouter from 'vue-router';
import 'buefy/lib/buefy.css';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.use(Buefy);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
