import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://daily-report-backend.jx-staging.35.221.74.128.nip.io';

Vue.router = router;
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
