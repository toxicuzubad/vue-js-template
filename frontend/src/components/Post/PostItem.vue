<template>
  <div>
    <div><strong>Name:</strong>{{ post.title }}</div>
    <div><strong>Description:</strong>{{ post.body }}</div>
    <v-button color="default" title="Remove"></v-button>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: { post: { type: Object, required: true } },
});
</script>
<style scoped></style>
