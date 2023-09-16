<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import {useMessageStore} from "@/stores/message";
import {storeToRefs} from "pinia";

const store = useMessageStore()
const {message} = storeToRefs(store)

</script>

<template>
  <header class="max-h-screen leading-normal">
    <div id="flashMessage" v-if="message">
      <h4>{{message}}</h4>
    </div>
    <nav class="p-3 font-bold text-green-300">
      <RouterLink :to="{'name': 'eventList' , query: {perPage : 3} }">Home</RouterLink>
      |
      <RouterLink :to="{'name':'organizer'}">Organizer</RouterLink>
      |
      <RouterLink :to="{'name': 'studentList'}">Student List</RouterLink>
      |
      <RouterLink :to="{'name': 'addEvent'}">New Event</RouterLink>
      |
      <RouterLink :to="{'name': 'addOrganizer'}">New Organizer</RouterLink>
    </nav>
  </header>
  <RouterView/>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes yellowFade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation: yellowFade 3s ease-in-out;
}
</style>
