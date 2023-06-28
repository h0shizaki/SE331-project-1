import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from "@/views/AboutView.vue";
import CategoryView from "@/views/CategoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
    }
  ]
})

export default router
