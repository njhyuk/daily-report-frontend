<template>
  <div class="home">
    <h1>This is an home page</h1>
    <button @click="logout">로그아웃</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class DashBoard extends Vue {
  protected logout() {
    this.$auth.logout();
  }
}
</script>
