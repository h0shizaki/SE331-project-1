<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const event = storeToRefs(store).event

const id = event.value?.id
</script>

<template>
  <div v-if="event">
    <h1 class="font-bold text-green-700 m-5 text-2xl">{{ event.title }}</h1>
    <div id="nav" class="p-3 font-bold text-green-300">
      <router-link :to="{ name: 'eventDetail', params: { id } }">Details</router-link> |
      <router-link :to="{ name: 'eventRegister', params: { id } }">Register</router-link> |
      <router-link :to="{ name: 'eventEdit', params: { id } }">Edit</router-link>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<style scoped>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
