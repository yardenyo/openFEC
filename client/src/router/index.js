import { createRouter, createWebHistory } from "vue-router";
import Candidates from "@/views/Candidates.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "candidates",
      component: Candidates,
    },
  ],
});

export default router;
