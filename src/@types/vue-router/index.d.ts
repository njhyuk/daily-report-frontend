import instance from "vue-router";

declare module "vue/types/vue" {
  interface Vue {
    router: instance;
  }

  interface VueConstructor {
    router: instance;
  }
}
