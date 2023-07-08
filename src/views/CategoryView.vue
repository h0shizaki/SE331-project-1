<script setup lang="ts">
import OrganizerCard from "@/components/OrganizerCard.vue";
import {ref} from "vue";
import type {EventItem} from "@/type";
import EventService from "@/services/EventService";

const events = ref<Array<EventItem>>([])

EventService.getEvent(100)
    .then(
        (res) => {
          events.value = res.data as EventItem[]
        }
    )
</script>

<template>
  <h1 class="text-green-700 font-bold text-2xl m-3" >Events Category</h1>

  <main class="events">
    <OrganizerCard v-for="event in events" :key="event.id" :event="event"></OrganizerCard>
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