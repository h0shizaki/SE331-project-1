<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const event = storeToRefs(store).event
</script>

<template>
  <div v-if="event" class="m-3 font-semibold text-gray-600">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <div class="flex flex-row flex-wrap justify-items-center">
      <img
        v-for="image in event.images"
        :key="image"
        :src="image"
        class="border-solid border-gray-200 border-2 rounded p-1 m-1 w-40 hover:shadow-lg"
      />
    </div>
  </div>
</template>

<style scoped></style>
