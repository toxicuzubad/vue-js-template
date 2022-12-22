import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import UiKit from "../pages/UiKit.vue";
import Posts from "../pages/Posts.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: Home, alias: "/" },
    { path: "/uikit", component: UiKit },
    { path: "/posts", component: Posts },
  ],
});
