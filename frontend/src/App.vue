<template>
  <nav>
    <v-button
      class="button"
      title="Home"
      color="default"
      @click="goToHomePage"
    ></v-button>
    <v-button
      class="button"
      title="UiKitPage"
      color="default"
      @click="goToUiKitPage"
    ></v-button>
    <v-button
      class="button"
      title="PostsPage"
      color="default"
      @click="goToPostsPage"
    ></v-button>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VButton from "./components/uikit/VButton.vue";

import router from "./router/router";

export default defineComponent({
  setup() {
    const goToUiKitPage = () => {
      router.push("/uikit");
    };

    const goToHomePage = () => {
      router.push("/home");
    };

    const goToPostsPage = () => {
      router.push("/posts");
    };

    return {
      goToUiKitPage,
      goToHomePage,
      goToPostsPage,
    };
  },
});
</script>

<style>
.form {
  padding: 10px;
  border: 2px solid teal;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.input {
  border: 2px solid teal;
  padding: 10px 15px;
}

.button {
  width: 100px;
}
</style>
