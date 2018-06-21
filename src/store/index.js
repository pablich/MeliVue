import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart';
import shared from './modules/shared';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    products,
    cart,
    shared,
  },
});
