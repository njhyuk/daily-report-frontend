<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-content>
    <template>
      <v-bottom-navigation
        v-model="bottomNav"
      >
        <v-btn value="recent" height="100%">
          <span>Recent</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Nearby</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </template>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Default extends Vue {
    public bottomNav = 'recent';
  }
</script>
