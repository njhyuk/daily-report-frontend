import vue from 'vue';
import vueRouter from 'vue-router';
import fullLayout from '@/components/layouts/Full.vue';

vue.use(vueRouter);

export default new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'full'},
      component: () => import('./views/Login.vue'),
    },
  ],
});
