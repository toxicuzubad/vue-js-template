<template>
  <label :for="name">{{ label }}</label>
  <input :id="name" :type="type" :value="value" :placeholder="placeholder" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
