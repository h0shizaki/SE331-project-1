<script setup lang="ts">
import {ref} from "vue";
import type {EventItem} from "@/type";
import EventService from "@/services/EventService";
import {useRouter} from "vue-router";

const event = ref<EventItem | null>(null)
const router = useRouter()
const props = defineProps({
  id: String
})

EventService.getEventById(Number(props.id))
  .then( res => {
    event.value = res.data
  })
  .catch( err => {
    console.log(err)
    if(err.response && err.response.status === 404){
      router.push({name: '404-resource', params: {resource: 'event'} })
    }else{
      router.push({name: 'network-error' })
    }
  })
</script>

<template>
  <div v-if="event">
    <h1>{{event.title}}</h1>
    <div id="nav">
      <router-link :to="{name: 'eventDetail' , params: {id} }">Details</router-link> |
      <router-link :to="{name: 'eventRegister' , params: {id} }">Register</router-link> |
      <router-link :to="{name: 'eventEdit' , params: {id} }">Edit</router-link>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<style scoped>

</style>