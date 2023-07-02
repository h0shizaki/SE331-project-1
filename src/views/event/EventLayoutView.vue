<script setup lang="ts">
import {ref} from "vue";
import type {EventItem} from "@/type";
import EventService from "@/services/EventService";
import {useRouter} from "vue-router";
import {useEventStore} from "@/stores/event";
import {storeToRefs} from "pinia";

const router = useRouter()

const store = useEventStore()
const event = storeToRefs(store).event

const id = event.value?.id
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