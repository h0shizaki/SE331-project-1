<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import {useMassageStore} from "@/stores/message";
import {storeToRefs} from "pinia";

const store = useMassageStore()
const {message} = storeToRefs(store)

</script>

<template>
  <header>
    <div id="flashMessage" v-if="message">
      <h4>{{message}}</h4>
    </div>
    <nav>
      <RouterLink :to="{'name': 'eventList' , query: {perPage : 3} }">Home</RouterLink>
      |
      <RouterLink :to="{'name': 'about'}">About</RouterLink>
      |
      <RouterLink :to="{'name':'category'}">Category</RouterLink>
      |
      <RouterLink :to="{'name': 'studentList'}">Student List</RouterLink>
    </nav>
  </header>
  <RouterView/>
</template>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
