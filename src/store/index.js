import Vue from 'vue';
import Vuex from 'vuex';
import categoryGetters from './getters';
import categoryMutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    category: {},
    categories: {},
  },
  // GETTERS
  getters: Object.assign({}, categoryGetters),
  mutations: Object.assign({}, categoryMutations),
});
