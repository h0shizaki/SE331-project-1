<script setup lang="ts">

import {ref} from "vue";
import type {EventItem, OrganzierItem} from "@/type";
import '@/assets/form.css';
import EventService from "@/services/EventService";
import {useRouter} from "vue-router";
import {useMessageStore} from "@/stores/message";
const org = ref<OrganzierItem>({
  id: 0,
  organizationName: '',
  address: ''
})

const store = useMessageStore()
const router = useRouter()
const saveOrg = () => {
  EventService.saveOrganizers(org.value)
      .then( res => {
        console.log(res.data)
        router.push({
          name: 'organizer'
        })
        store.updateMessage('You are successfully add new organizer for ' + res.data.organizationName)
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
    <form @submit.prevent="saveOrg">
      <label>Organizer Name</label>
      <input
          v-model="org.organizationName"
          type="text"
          placeholder="Organizer Name"
          class="field"
      >
      <label>Organizer Address</label>
      <input
          v-model="org.address"
          type="text"
          placeholder="Address"
          class="field"
      >
      <button type="submit">Submit</button>
    </form>
    <pre>{{ org }}</pre>
  </div>
</template>

<style scoped>
</style>