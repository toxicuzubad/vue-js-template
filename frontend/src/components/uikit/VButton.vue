<template>
  <button class="button" :class="['button-' + color]">{{ title }}</button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

type ButtonColor = "default" | "primary" | "secondary" | "danger";

const props = defineProps({
  color: {
    type: String as PropType<ButtonColor>,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.button {
  text-align: center;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  border: none;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: $primary;
  padding: 12px;
  color: $text-color;
}

.button:hover {
  background-color: $primary-hover;
}

.button:active {
  background-color: $primary-active;
}

.button-danger {
  background-color: $danger;
}
</style>
