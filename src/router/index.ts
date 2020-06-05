import { createRouter, createWebHistory } from "vue-router";
import Map from "../views/Map.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/map",
      name: "Map",
      component: Map
    },
  ]
});

export default router;
