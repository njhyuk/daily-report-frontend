import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@d0whc3r/vue-auth-plugin';

const axiosInstance = axios.create({
  baseURL: 'http://junhyeok-noh-nodejs-port-8080.jx.35.221.74.128.nip.io',
});
Vue.use(VueAxios, axiosInstance);
Vue.use(VueAuth, {
  authMeta: 'auth',
  rolesVar: 'roles',
  tokenDefaultName: 'default_auth_token',
  userDefaultName: 'default_auth_user',
  tokenStore: ['vuex', 'localStorage', 'cookie'],
  headerTokenReplace: '{auth_token}',
  tokenType: 'Bearer',
  vuexStoreSpace: 'vue-auth',

  authRedirect: '/login',

  loginData: {
    url: '/auth/login',
    method: 'POST',
    redirect: '/',
    fetchUser: false,
    customToken: (response) => response.data.access_token,
  },
  logoutData: {
    url: '/auth/logout',
    method: 'POST',
    redirect: '/login',
    makeRequest: false,
  },
  fetchItem: '',
  fetchData: {
    url: '/auth/user',
    method: 'GET',
    interval: 30,
    enabled: false,
  },
  refreshData: {
    url: '/auth/refresh',
    method: 'GET',
    interval: 30,
    enabled: false,
  },
});
Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
