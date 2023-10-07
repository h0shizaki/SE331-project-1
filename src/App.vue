<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router';
import {useMessageStore} from "@/stores/message";
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/auth";
const authStore = useAuthStore()
const router = useRouter()

const token = localStorage.getItem('access_token')
const user = localStorage.getItem('user')

if(token && user) {
  authStore.reload(token,JSON.parse(user))
}else{
  authStore.logout()
}

const store = useMessageStore()
const {message} = storeToRefs(store)



const logout = () => {
  authStore.logout()
  router.push({'name': 'login'})
}

</script>

<template>
  <header class="max-h-screen leading-normal">
    <div id="flashMessage" v-if="message">
      <h4>{{message}}</h4>
    </div>
    <nav class="flex p-2">
      <ul v-if="!authStore.currentUserName" class="flex navbar-nav ml-auto">
        <li class="nav-item px-2">
          <RouterLink :to="{'name': 'eventList' , query: {perPage : 3} }">
            <font-awesome-icon icon="home" />
            Home
          </RouterLink>
        </li>
        <li class="nav-item px-2">
          <RouterLink :to="{'name':'organizer'}">
            <font-awesome-icon icon="building" />
            Organizer
          </RouterLink>
        </li>
        <li class="nav-item px-2">
          <RouterLink to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign up
          </RouterLink>
        </li>
        <li class="nav-item px-2">
          <RouterLink to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Sign in
          </RouterLink>
        </li>
      </ul>

      <ul v-if="authStore.currentUserName" class="flex navbar-nav ml-auto">
        <li class="nav-item px-2">
          <RouterLink :to="{'name': 'eventList' , query: {perPage : 3} }">
            <font-awesome-icon icon="home" />
            Home
          </RouterLink>
        </li>
        <li class="nav-item px-2">
          <RouterLink :to="{'name':'organizer'}">
            <font-awesome-icon icon="building" />
            Organizer
          </RouterLink>
        </li>
        <li class="nav-item px-2" v-if="authStore.isAdmin()">
          <RouterLink :to="{'name': 'addEvent'}">
            <font-awesome-icon icon="note-sticky" />
            New Event
          </RouterLink>
        </li>
        <li class="nav-item px-2" v-if="authStore.isAdmin()">
          <RouterLink :to="{'name': 'addOrganizer'}">
            <font-awesome-icon icon="note-sticky" />
            New Organizer
          </RouterLink>
        </li>
        <li class="nav-item px-2">
          <RouterLink to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ authStore.currentUserName }}
          </RouterLink>
        </li>
        <li class="nav-item px-2 hover:cursor-pointer" @click="logout">
          <a  class="nav-link">
            <font-awesome-icon icon="sign-out-alt" />Sign out
          </a>
        </li>
      </ul>

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
