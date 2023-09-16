<script setup lang="ts">
import type {EventItem} from "@/type";
import type {PropType} from "vue";
import {useRouter} from "vue-router";
import {useMessageStore} from "@/stores/message";
import {useEventStore} from "@/stores/event";
import {storeToRefs} from "pinia";

const eventStore = useEventStore()
const event = storeToRefs(eventStore).event
const id = event.value?.id

const router = useRouter()
const store = useMessageStore()
function register() {
  store.updateMessage('You are successfully registered for ' + event.value?.title)
  setTimeout( () => {
    store.resetMessage()
  }, 3000)
  router.push({
    name: 'eventDetail',
    params: {
      id: id
    }
  })
}

</script>

<template>
  <div v-if="event" class="p-3 mt-2">
    <p class="font-bold text-gray-600">Event Registration</p>
    <button @click="register" class="bg-green-300 border border-green-800 rounded-full font-bold text-white p-2 mt-2 hover:bg-green-700 ">Register ME</button>
  </div>
</template>

<style scoped>

</style>