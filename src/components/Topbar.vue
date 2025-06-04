<template>
  <div class="topbar">
    <RouterLink
      v-for="item in items"
      :key="item.name"
      :to="item.path"
      class="topbar-item"
    >
      {{ item.name }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const items = ref([
  { name: "Home", path: "/" },
  { name: "English Vocab", path: "/english/vocab" },
]);

onMounted(() => {
  // This is where you can fetch data or perform any setup actions
  console.log("Topbar mounted");
});
</script>

<style scoped lang="scss">
.topbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: 20px;

  > .topbar-item {
    color: white;
    text-decoration: none;
    padding: 2px 8px;
    border-radius: 5px;
    transition: color 0.3s;
    position: relative;

    &:hover {
      // background-color: #555;
      color: #7553ff;
    }

    &:not(:last-child)::after {
      position: absolute;
      right: -12px;
      content: "|";
      // margin-left: 10px;
      color: white;
    }
  }
}
</style>
