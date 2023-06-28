<script setup lang="ts">
import {defineProps, PropType} from "vue";
import {EventItem} from "@/type";

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>

<template>
  <div class="event-card">
    <span> <b class="text-title">Category: </b> {{props.event.category}}</span>
    <span><b class="text-title">Organized by</b> {{ props.event.organizer}}</span>
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