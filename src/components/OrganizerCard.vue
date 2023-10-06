<script setup lang="ts">
import type {OrganizerItem} from "@/type";
import type {PropType} from "vue";

const props = defineProps({
  organizer: {
    type: Object as PropType<OrganizerItem>,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{name: 'organizerDetail', params: { id: organizer?.id}}"
      class="block cursor-pointer border border-green-800 bg-white rounded rounded-l mb-3 w-64 h-68 hover:border-green-500 hover:bg-gray-100 drop-shadow-lg">
    <div class="p-3 mb-2">
      <b class="text-gray-400">Name: </b><span
        class="font-bold text-green-500 uppercase"> {{ props.organizer.organizationName }}</span><br>
      <b class="text-gray-400">Address: </b><span
        class="font-bold text-green-500 uppercase"> {{ props.organizer.address }}</span><br>
    </div>

  </RouterLink>
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