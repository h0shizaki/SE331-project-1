<script setup lang="ts">

import {ref} from "vue";
import type {EventItem} from "@/type";
import '@/assets/form.css';
import EventService from "@/services/EventService";
import {useRouter} from "vue-router";
import {useMessageStore} from "@/stores/message";
const event = ref<EventItem>({
  id: 0,
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  organizer: ''
})
const store = useMessageStore()
const router = useRouter()
const saveEvent = () => {
  EventService.saveEvent(event.value)
      .then( res => {
        console.log(res.data)
        router.push({
          name: 'eventDetail',
          params: { id : res.data.id}
        })
        store.updateMessage('You are successfully add new event for ' + res.data.title)
        setTimeout( () => {
          store.resetMessage()
        }, 3000)
      })
      .catch( () => {
        router.push( {
          name: 'network-error'
        })
      })
}

</script>

<template>
  <div>
    <h1>Create Event</h1>
    <form @submit.prevent="saveEvent">
      <label>Category</label>
      <input
        v-model="event.category"
        type="text"
        placeholder="Category"
        class="field"
      >
      <h3>Name & describe your event</h3>
      <label>Title</label>
      <input
          v-model="event.title"
          type="text"
          placeholder="Title"
          class="field"
      >
      <label>Description</label>
      <input
          v-model="event.description"
          type="text"
          placeholder="Description"
          class="field"
      >
      <h3>Where is your event</h3>
      <label>Location</label>
      <input
          v-model="event.location"
          type="text"
          placeholder="Location"
          class="field"
      >
      <button type="submit">Submit</button>
    </form>
    <pre>{{ event}}</pre>
  </div>
</template>

<style scoped>
</style>