<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <slot/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Full extends Vue {
  }
</script>
