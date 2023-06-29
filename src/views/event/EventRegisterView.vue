<script setup lang="ts">
import {PropType} from "vue";
import type {EventItem} from "@/type";

defineProps({
  event: {
    type: Object as PropType<EventItem>
  }
})
</script>

<template>
  <div v-if="event">
    <p>Register</p>
  </div>
</template>

<style scoped>

</style>