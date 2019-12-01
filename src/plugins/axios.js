"use strict";

import Vue from 'vue';
import axios from "axios";

let config = {
  baseURL: "http://api-frog.shawroger.com/index.php/api/"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin)

export default Plugin;
