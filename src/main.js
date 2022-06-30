import { createApp } from 'vue'
// import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faStore,faHouseChimney,faClockRotateLeft,faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone,faStore,faHouseChimney,faClockRotateLeft,faPlus)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')