<script setup lang="ts">
import OrganizerCard from '@/components/OrganizerCard.vue'
import { ref } from 'vue'
import type { OrganizerItem } from '@/type'
import OrganizerService from '@/services/OrganizerService'

const organizers = ref<Array<OrganizerItem>>([])

OrganizerService.getOrganizers().then((res) => {
  organizers.value = res.data as OrganizerItem[]
})
</script>

<template>
  <h1 class="text-green-700 font-bold text-2xl m-3">Events Category</h1>

  <main class="events">
    <OrganizerCard
      v-for="organizer in organizers"
      :key="organizer.id"
      :organizer="organizer"
    ></OrganizerCard>
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
