import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'
import baseLayout from '../layout/baseLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: baseLayout,
      children: [
        {
          path: "",
          name: "create-ticket",
          component: HomeView
        }
      ]
    },
  ],
})

export default router
