'use strict';

import Vue from 'vue';
import axios from 'axios';
//SGS追記
import $sConstEx from './sConstEx';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') ? process.env.BASE_URL + '../rest/rdev' : `/${$sConstEx.BASE_URL}/rest/rdev`, // ベースとなるURLを設定
  //timeout: 10 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers: {
    //SGS追記 Keycloakを使用しないため、別途CSRF対策を考える
    // Authorization: 'Bearer ' + sessionStorage.getItem($rConst.CSRF_TOKEN),
    //SGS追記 下記を削除
    // 'Content-Type': 'application/json',
  },
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
