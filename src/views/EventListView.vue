<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import { computed, ref } from 'vue'
import type { EventItem } from '@/type'
import EventService from '@/services/EventService'
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
import type { AxiosResponse } from 'axios'

const events = ref<Array<EventItem>>([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 3
  }
})
const totalEvent = ref<number>(0)
const eventPerPage = ref<Number>(props.perPage || 3)

const router = useRouter()

const keyword = ref('')

function updateKeyword() {
  let queryFunction

  if (keyword.value === '' || keyword.value.length === 0) {
    queryFunction = EventService.getEvent(props.perPage, props.page)
  } else {
    queryFunction = EventService.getEventsByKeyword(
      keyword.value.toString(),
      props.perPage,
      props.page
    )
  }
  queryFunction
    .then((res: AxiosResponse<EventItem[]>) => {
      events.value = res.data as EventItem[]
      totalEvent.value = res.headers['x-total-count']
      console.log('total event', totalEvent.value)
    })
    .catch(() => {
      router.push({ name: 'network-error' })
    })
}

EventService.getEvent()
  .then((res: AxiosResponse<EventItem[]>) => {
    events.value = res.data as EventItem[]
    totalEvent.value = res.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'network-error' })
  })

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  const perPage = Number(to.query.perPage)
  let queryFunction

  if (keyword.value === '' || keyword.value.length === 0) {
    queryFunction = EventService.getEvent(perPage, toPage)
  } else {
    queryFunction = EventService.getEventsByKeyword(keyword.value.toString(), perPage, toPage)
  }
  queryFunction
    .then((res: AxiosResponse<EventItem[]>) => {
      events.value = res.data as EventItem[]
      totalEvent.value = res.headers['x-total-count']
      console.log('total event', totalEvent.value)
    })
    .catch(() => {
      router.push({ name: 'network-error' })
    })

  queryFunction
    .then((res: AxiosResponse<EventItem[]>) => {
      events.value = res.data as EventItem[]
      totalEvent.value = res.headers['x-total-count']
      next()
    })
    .catch(() => {
      router.push({ name: 'network-error' })
    })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.perPage)
  return props.page?.valueOf() < totalPages
})
</script>

<template>
  <h1 class="text-green-700 font-bold text-2xl m-3">Events For Good</h1>
  <input v-model="keyword" type="text" label="search...." @input="updateKeyword" />
  <main class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
      <RouterLink
        :to="{ name: 'eventList', query: { page: page - 1, perPage: eventPerPage.toString() } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
      >
        🔙 Prev Page
      </RouterLink>
      <select
        id="perPage"
        v-model="eventPerPage"
        @change="
          () => {
            router.push({
              name: 'eventList',
              query: { page: page, perPage: eventPerPage.toString() }
            })
          }
        "
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <RouterLink
        :to="{ name: 'eventList', query: { page: page + 1, perPage: eventPerPage.toString() } }"
        rel="next"
        v-if="hasNextPage"
        id="page-next"
      >
        Next Page 🔜
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
h4 {
  font-size: 20px;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

.pagination select {
  flex: 0.2;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
