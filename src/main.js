import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios'
import './assets/css/common.css'
axios.defaults.withCredentials = true

const app = createApp(App)
app.config.globalProperties.$axios = axios
installElementPlus(app)
app.use(store).use(router).mount('#app')