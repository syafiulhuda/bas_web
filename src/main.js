import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import myAxios from './plugin/axios'
import VueAxios from 'vue-axios'
import piniaPluginPersitedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives
})

//Axios
app.use(VueAxios, myAxios)
app.provide('myAxios', app.config.globalProperties.axios)
//Not Axios
const pinia = createPinia()
pinia.use(piniaPluginPersitedstate)

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
