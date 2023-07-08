<script setup lang="ts">
import type {EventItem} from "@/type";
import type {PropType} from "vue";

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  }
})
</script>

<template>
  <div class="block cursor-pointer border border-green-800 bg-white rounded rounded-l mb-3 w-64 h-24 hover:border-green-500 hover:bg-gray-100 drop-shadow-lg" >
    <div class="p-3 mb-2">
      <b class="text-gray-400">Category: </b><span class="font-bold text-green-500 uppercase"> {{props.event.category}}</span><br>
    <b class="text-gray-400">Organized by: </b><span class="font-bold text-green-500 uppercase"> {{ props.event.organizer}}</span><br>
    </div>

  </div>
</template>

<style scoped>

.text-title {
  opacity: 0.75;
}

.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  font-size: 1rem;
}

.event-card span {
  display: block;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>