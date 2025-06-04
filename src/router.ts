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
      component: () => import("./pages/English/Vocab.vue"),
    },
  ],
});

export default router;
