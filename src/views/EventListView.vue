<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import {ref} from "vue";
import type {EventItem} from "@/type";

import EventService from "@/services/EventService";

const events = ref<Array<EventItem>>([])

EventService.getEvent()
  .then(
      (res) => {
        events.value = res.data as EventItem[]
      }
  )
</script>

<template>
  <h1>Events For Good</h1>

  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>

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
</style>
