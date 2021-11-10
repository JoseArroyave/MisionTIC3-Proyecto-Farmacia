//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import BootstrapVue from 'bootstrap-vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')
//Vue.use(BootstrapVue);
//Vue.use(IconsPlugin)
