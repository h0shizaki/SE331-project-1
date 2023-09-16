<script setup lang="ts">
import OrganizerCard from "@/components/OrganizerCard.vue";
import {ref} from "vue";
import type {OrganzierItem} from "@/type";
import EventService from "@/services/EventService";

const organizers = ref<Array<OrganzierItem>>([])

EventService.getOrganizers()
    .then(
        (res) => {
          organizers.value = res.data as OrganzierItem[]
        }
    )
</script>

<template>
  <h1 class="text-green-700 font-bold text-2xl m-3" >Events Category</h1>

  <main class="events">
    <OrganizerCard v-for="organizer in organizers" :key="organizer.id" :organizer="organizer"></OrganizerCard>
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