import {
  LOADER,
  READY,
} from '../mutations';

const state = {
  loader: false,
};
const actions = {
};
const mutations = {
  [LOADER](state) {
    state.loader = true;
  },
  [READY](state) {
    state.loader = false;
  },
};

const getters = {
};

export default {
  state,
  actions,
  mutations,
  getters,
};
