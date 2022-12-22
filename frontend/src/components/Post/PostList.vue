<template>
  <div>
    <h4>Post list</h4>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="emit('remove', post)"
    ></post-item>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import PostItem from "./PostItem.vue";

export default defineComponent({
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style></style>
