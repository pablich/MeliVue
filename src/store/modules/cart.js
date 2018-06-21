import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../mutations';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from '../actions';

const state = {
  list: [],
};
const actions = {
  [ADD_PRODUCT]({ commit }, payload) {
    commit(ADD_TO_CART, payload);
  },
  [REMOVE_PRODUCT]({ commit }, payload) {
    commit(REMOVE_FROM_CART, payload);
  },
};

const mutations = {
  [ADD_TO_CART](state, product) {
    state.list.push(product);
  },
  [REMOVE_FROM_CART](state, id) {
    state.list = state.list.filter(p => p.id !== id);
  },
};
/* eslint-disable no-underscore-dangle */
const getters = {
  checkExist: state => (id) => {
    if (state.list.length > 0) {
      return state.list.filter(p => p.id === id)[0];
    }
    return false;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
