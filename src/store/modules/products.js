import ApiService from '../../common/api';

import {
  LOADER,
  READY,
  SET_CATEGORIES,
  SET_CATEGORY,
  SET_SUBCATEGORIES,
  SET_BREADCRUMBS,
  SET_PRODUCTS,
  SET_FILTERS,
} from '../mutations';
import {
  GET_CATEGORIES,
  GET_CATEGORY,
  GET_SUBCATEGORIES,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
} from '../actions';

const state = {
  categories: [],
  subcategories: [],
  breadcrumbs: null,
  products: [],
  category: null,
  filters: null,
};
const actions = {
  [GET_CATEGORIES]({ commit }) {
    commit(LOADER);
    commit(SET_BREADCRUMBS, null);
    ApiService.get('/sites/MLA/categories').then((response) => {
      commit(SET_CATEGORIES, response.data);
      commit(READY);
    }).catch(() => {
      commit(READY);
    });
  },
  [GET_SUBCATEGORIES]({ commit }, payload) {
    commit(LOADER);
    commit(SET_SUBCATEGORIES, null);
    ApiService.get(`/categories/${payload}`).then((response) => {
      commit(SET_SUBCATEGORIES, response.data.children_categories);
      commit(SET_BREADCRUMBS, response.data.path_from_root);
      commit(READY);
    }).catch(() => {
      commit(READY);
    });
  },
  [SET_CATEGORY]({ commit }, payload) {
    commit(SET_CATEGORY, payload);
  },
  [SET_CATEGORIES]({ commit }, payload) {
    commit(SET_CATEGORIES, payload);
  },
  [GET_CATEGORY]({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(LOADER);
      ApiService.get(`/categories/${payload}`).then((response) => {
        resolve(response.data);
        commit(READY);
      }).catch((error) => {
        reject(error);
        commit(READY);
      });
    });
  },
  [SEARCH_PRODUCTS]({ commit }, payload) {
    commit(LOADER);
    commit(SET_BREADCRUMBS, null);
    ApiService.get(`/sites/MLA/search?q=${payload}`).then((response) => {
      commit(SET_PRODUCTS, response.data.results);
      commit(READY);
    }).catch(() => {
      commit(READY);
    });
  },
  [GET_PRODUCTS]({ commit }, payload) {
    commit(LOADER);
    ApiService.get(`/sites/MLA/search?category=${payload}`).then((response) => {
      commit(SET_PRODUCTS, response.data.results);
      commit(SET_FILTERS, response.data.available_filters);
      commit(READY);
    }).catch(() => {
      commit(READY);
    });
  },
};

const mutations = {
  [SET_CATEGORIES](state, categories) {
    state.categories = categories;
  },
  [SET_SUBCATEGORIES](state, subcategories) {
    state.subcategories = subcategories;
  },
  [SET_CATEGORY](state, category) {
    state.category = category;
  },
  [SET_BREADCRUMBS](state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs;
  },
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },
  [SET_FILTERS](state, filters) {
    state.filters = filters;
  },
};
/* eslint-disable no-underscore-dangle */
const getters = {
  subCategoryById: state => (id) => {
    if (state.subcategories.length > 0) {
      return state.subcategories.filter(p => p._id === id)[0];
    }
    return state.subcategories;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
