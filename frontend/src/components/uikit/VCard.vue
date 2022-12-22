<template>
  <div class="card">
    <span class="header">{{ header }}</span>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  header: {
    type: String,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
}

.header {
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
