import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ApiUrl from '../common/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = ApiUrl;
  },
  query(resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },
  get(resource) {
    return Vue.axios
      .get(`${resource}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params).catch((error) => {
      throw new Error(error.response.data.message);
    });
  },
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  put(resource, params) {
    return Vue.axios
      .put(`${resource}`, params).catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },
  delete(resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },
};
export default ApiService;
