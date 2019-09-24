<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <slot/>
      </v-container>
    </v-content>
    <v-card>
      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute>
        <v-btn to="/">
          <span>대시보드</span>
          <v-icon>dashboard</v-icon>
        </v-btn>

        <v-btn to="/task">
          <span>할일</span>
          <v-icon>check_box</v-icon>
        </v-btn>

        <v-btn to="/history">
          <span>기록</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn to="/diary">
          <span>일기</span>
          <v-icon>book</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class App extends Vue {
    public bottomNav = 0;
  }
</script>
