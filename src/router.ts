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
      meta: {
        auth: true,
        redirect: '/login',
      },
      component: () => import('./views/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'full',
        auth: false,
      },
      component: () => import('./views/Login.vue'),
    },
  ],
});
