import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NicknameView from '../views/NicknameView.vue';
import CareerView from '../views/CareerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/start',
      component: NicknameView
    },
    {
      path: '/career',
      component: CareerView
    },
  ]
})

export default router
