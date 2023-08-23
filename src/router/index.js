import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes"; 

const router = createRouter({
  base: import.meta.env.VITE_BASE_URL,
  history: createWebHistory(),
  routes: routes,
});

export default router;
