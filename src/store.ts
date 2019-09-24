import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

const store = new vuex.Store({
  state: {},
  mutations: {},
  actions: {},
});

(vue as any).store = store;
export default store;
