<script setup lang="ts">
import type {EventItem} from "@/type";
import type {PropType} from "vue";


defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>

<template>
  <RouterLink class="block border border-green-800 bg-white rounded rounded-l mb-3 w-64 h-24 hover:border-green-500 hover:bg-gray-100 drop-shadow-lg" :to="{name: 'eventDetail', params: { id: event?.id}}">
    <div class="mb-2 font-bold p-3 font-bold tracking-tight ">
      <span class="text-gray-500">@{{ event?.time }} on {{ event?.date }}</span>
      <h4 class="text-green-400 text-xl">{{ event?.title }}</h4>
    </div>
  </RouterLink>
</template>

<style scoped>
</style>