import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from "@/views/AboutView.vue";
import CategoryView from "@/views/CategoryView.vue";
import StudentView from "@/views/StudentView.vue";
import EventDetailView from "@/views/event/EventDetailView.vue";
import EventRegisterView from "@/views/event/EventRegisterView.vue";
import EventLayoutView from "@/views/event/EventLayoutView.vue";
import EventEditView from "@/views/event/EventEditView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NetworkErrorView from "@/views/NetworkErrorView.vue";

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
      name: 'eventLayout',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'eventDetail',
          component: EventDetailView,
          props: true
        },
        {
          path: 'edit',
          name: 'eventEdit',
          component: EventEditView,
          props: true
        },
        {
          path: 'register',
          name: 'eventRegister',
          component: EventRegisterView,
          props: true
        }
      ]
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView
    },
    {
      path:'/network-error',
      name: 'network-error',
      component: NetworkErrorView,
      props: true
    }
  ]
})

export default router
