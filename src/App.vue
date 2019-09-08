<template>
  <div>
    <component :is="layout">
      <router-view ref="view" />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import defaultLayout from './components/layouts/Default.vue';
import fullLayout from './components/layouts/Full.vue';

@Component({
  components: {
    defaultLayout,
    fullLayout,
  },
})
export default class App extends Vue {
  get layout() {
    return (this.$route.meta.layout || 'default') + '-layout';
  }
}
</script>
