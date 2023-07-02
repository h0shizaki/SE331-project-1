<script setup lang="ts">
import type {EventItem} from "@/type";
import {useMassageStore} from "@/stores/message";
import {useRouter} from "vue-router";
import {useEventStore} from "@/stores/event";
import {storeToRefs} from "pinia";


const eventStore = useEventStore()
const event = storeToRefs(eventStore).event
const id = event.value?.id

const router = useRouter()
const store = useMassageStore()

function edit() {
  store.updateMessage('You are successfully updated ' + event.value?.title)
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
    <p>Edit here</p>
    <button @click="edit">Update</button>
  </div>
</template>

<style scoped>

</style>