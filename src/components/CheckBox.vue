<template>
  <div
    class="checkbox"
    :class="{
      checked: modelValue,
    }"
    @click="modelValue = !modelValue"
  ></div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
// modelValue for v-model
const modelValue = defineModel();
</script>

<style scoped lang="scss">
.checkbox {
  width: 14px;
  height: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &.checked {
    background-color: #7553ff;
    border-color: #7553ff;
  }
}
</style>
