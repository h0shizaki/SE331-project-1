<script setup lang="ts">

import {ref} from "vue";
import type {EventItem, OrganizerItem} from "@/type";
import '@/assets/form.css';
import {useRouter} from "vue-router";
import {useMessageStore} from "@/stores/message";
import OrganizerService from "@/services/OrganizerService";
import ImageUpload from "@/components/ImageUpload.vue";
const org = ref<OrganizerItem>({
  id: 0,
  organizationName: '',
  address: '',
  images: []
})

const store = useMessageStore()
const router = useRouter()
const saveOrg = () => {
  OrganizerService.saveOrganizers(org.value)
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
      <ImageUpload v-model="org.images" :max="1" />

      <button type="submit">Submit</button>
    </form>
    <pre>{{ org }}</pre>
  </div>
</template>

<style scoped>
</style>