<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
     <v-text-field v-model="email" label="E-mail" required></v-text-field>
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
import layout from '@/components/layouts/Full.vue';

@Component({
  components: {},
})
export default class Login extends Vue {
  public layout = layout;
  protected email = '';
  protected password = '';
  protected showPassword = '';

  public submit() {
    this.$router.push('/');
  }
}
</script>
