<template>
  <component :is="layout">
    <router-view ref="routerView" />
  </component>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import layout from './components/layouts/Default.vue';
  import {VueConstructor} from 'vue';

  @Component
  export default class App extends Vue {
    public layout = layout;

    public $refs!: Vue['$refs'] & {
      routerView: {
        layout: VueConstructor,
      };
    };

    public mounted() {
      const layout2 = this.$refs.routerView.layout;
      if (layout2) {
        this.layout = layout2; //
      }
    }
  }
</script>
