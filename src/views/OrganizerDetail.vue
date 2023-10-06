<script setup lang="ts">

import {useOrganizerStore} from "@/stores/organizer";
import {storeToRefs} from "pinia";

const store = useOrganizerStore()
const organizer = storeToRefs(store).organizer
</script>

<template>
  <div v-if="organizer" class="m-3 font-semibold text-gray-600">
    <p>{{ organizer.organizationName }}</p>
    <p>@ {{ organizer.address }}</p>
    <div class="flex flex-row flex-wrap justify-items-center">
      <img v-for="image in organizer.images" :key="image" :src="image"
           class="border-solid border-gray-200 border-2 rounded p-1 m-1 w-40 hover:shadow-lg"
      />
    </div>
  </div>
</template>

<style scoped>

</style>