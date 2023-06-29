import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from "@/views/AboutView.vue";
import CategoryView from "@/views/CategoryView.vue";
import StudentView from "@/views/StudentView.vue";
import EventDetailView from "@/views/EventDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'eventList',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query?.page as string || '1'),
        perPage: parseInt(route.query?.perPage) || '2'
      })
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
    },
    {
      path: '/student',
      name: 'studentList',
      component: StudentView
    },
    {
      path: '/event/:id',
      name: 'eventDetail',
      component: EventDetailView,
      props: true
    }
  ]
})

export default router
