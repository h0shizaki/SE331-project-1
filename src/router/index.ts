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
import nProgress from "nprogress";
import EventService from "@/services/EventService";
import {useEventStore} from "@/stores/event";
import type {EventItem} from "@/type";
import EventFormView from "@/views/EventFormView.vue";
import OrganizerFormView from "@/views/OrganizerFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'eventList',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query?.page as string || '1'),
        perPage: parseInt(route.query?.perPage as string|| '3' )
      })
    },
    {
      path: '/add-event',
      name: 'addEvent',
      component: EventFormView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/organizer',
      name: 'organizer',
      component: CategoryView
    },
    {
      path: '/add-organizer',
      name: 'addOrganizer',
      component: OrganizerFormView
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
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        return EventService.getEventById(id)
            .then( res => {
              eventStore.setEvent(res.data as EventItem)
            })
            .catch(err => {
              console.log(err)
              if(err.response && err.response.status === 404){
                router.push({name: '404-resource', params: {resource: 'event'} })
              }else{
                router.push({name: 'network-error' })
              }
            })
      },
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
  ],
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }else{
      return {top: 0}
    }
  }
})
router.beforeEach( (to, from, next) => {
  document.title = "642115003 Kan Katpark"
  nProgress.start()
  next()
})

router.afterEach( () => {
  nProgress.done()
})

export default router
