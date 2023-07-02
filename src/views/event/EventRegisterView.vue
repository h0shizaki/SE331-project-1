<script setup lang="ts">
import type {EventItem} from "@/type";
import type {PropType} from "vue";
import {useRouter} from "vue-router";
import {useMassageStore} from "@/stores/message";
import {useEventStore} from "@/stores/event";
import {storeToRefs} from "pinia";

const eventStore = useEventStore()
const event = storeToRefs(eventStore).event
const id = event.value?.id

const router = useRouter()
const store = useMassageStore()
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
  <div v-if="event">
    <p>Register here</p>
    <button @click="register">Register ME</button>
  </div>
</template>

<style scoped>

</style>