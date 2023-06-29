<script setup lang="ts">
import {Ref, ref} from "vue";
import type {EventItem} from "@/type";
import EventService from "@/services/EventService";

const props = defineProps({
  id: String
})
const event = ref<EventItem | null>(null)

EventService.getEventById(Number(props.id))
  .then( (res) => {
    event.value = res.data
  })
  .catch( error => {
    console.error(error)
  })
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{event.description}}</p>
  </div>
</template>

<style scoped>

</style>