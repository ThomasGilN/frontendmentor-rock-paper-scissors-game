import { createRouter, createWebHistory } from 'vue-router'
import {routesPaths} from "@/router/paths";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routesPaths.HOME,
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: routesPaths.GAME,
      name: 'game',
      component: () => import('../views/GameView.vue')
    }
  ]
})

export default router
