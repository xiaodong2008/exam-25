import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./pages/Home.vue"),
    },
    {
      path: "/english/vocab",
      name: "Vocab",
      component: () => import("./pages/English/vocab/List.vue"),
    },
    {
      path: "/english/vocab/test-word",
      name: "TestWord",
      component: () => import("./pages/English/vocab/WordTest.vue"),
    },
  ],
});

export default router;
