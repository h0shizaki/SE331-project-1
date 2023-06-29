<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import {computed, ref, watchEffect} from "vue";
import type {EventItem} from "@/type";

import EventService from "@/services/EventService";

// TODO: 2.9
const events = ref<Array<EventItem>>([])
const totalEvent = ref<number>(0)
const eventPerPage = ref<Number>(props.perPage || 2)
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 2
  }
})

watchEffect(() => {
  EventService.getEvent(eventPerPage.value, props.page)
      .then(
          (res) => {
            events.value = res.data as EventItem[]
            totalEvent.value = res.headers['x-total-count']
          }
      )
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.perPage)
  return props.page?.valueOf() < totalPages
})

</script>

<template>
  <h1>Events For Good</h1>

  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
      <RouterLink :to="{'name': 'eventList', query: {page: page-1, perPage: eventPerPage }}" rel="prev" v-if="page != 1" id="page-prev">
        🔙 Prev Page
      </RouterLink>
      <select id="perPage" v-model="eventPerPage">
        <option value="1">1</option>
        <option value="2" selected>2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <RouterLink :to="{'name': 'eventList', query: {page: page+1, perPage: eventPerPage }}" rel="next" v-if="hasNextPage" id="page-next">
        Next Page 🔜
      </RouterLink>
    </div>

  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
