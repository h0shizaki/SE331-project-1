import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faUserPlus,
  faSignInAlt,
  faHome,
  faNoteSticky,
  faBuilding,
  faSignOutAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import '@/services/AxiosInceptorSetup'

library.add(
  faUserSecret,
  faUserPlus,
  faSignInAlt,
  faHome,
  faNoteSticky,
  faBuilding,
  faSignOutAlt,
  faUser
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
