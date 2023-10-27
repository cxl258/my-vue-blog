import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Airtice from '../views/airticle.vue'
import About from '../views/about.vue'
import Api from '../views/api.vue'
import Camera from '../views/camera.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
        path: "/airticle",
        component: Airtice,
      },
      {
        path: "/camera",
        component: Camera,
      },
      {
        path: "/api",
        component: Api,
      },
      {
        path: "/about",
        component: About,
      }
  ],
});
export default router;
