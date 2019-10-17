<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-text-field v-model="username" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'visibility' : 'visibility_off'"
        :type="showPassword ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-btn block dark @click="submit">Sign In</v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import layout from '../components/layouts/Full.vue';

  @Component({
    components: {},
  })
  export default class Login extends Vue {
    // public layout: VueConstructor = layout;
    protected username = '';
    protected password = '';
    protected showPassword = false;

    public submit() {
      this.$auth.login({
        username: this.username,
        password: this.password,
      });
    }
  }
</script>
