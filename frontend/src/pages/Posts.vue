<template>
  <div>
    <h1>Posts page</h1>
    <post-list :posts="posts" v-if="!isPostsLoading"></post-list>
    <div v-else>Download</div>
  </div>
</template>
<script>
import PostList from "../components/Post/PostList.vue";
import { usePosts } from "../hooks/usePosts";

export default {
  components: {
    PostList,
  },

  setup() {
    const { posts, isPostsLoading } = usePosts(5);
    return {
      posts,
      isPostsLoading,
    };
  },
};
</script>
<style></style>
