<script setup lang="ts">

import {useEventStore} from "@/stores/event";
import {storeToRefs} from "pinia";


const store = useEventStore()
const event = storeToRefs(store).event

const id = event.value?.id
</script>

<template>
  <div v-if="event" class="m-3 font-semibold text-gray-600">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{event.description}}</p>
  </div>
</template>

<style scoped>

</style>