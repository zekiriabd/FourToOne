import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from "./app-routing";
import appstats from "./store/app-stats" 

const app = createApp(App)
.use(router)
.use(appstats)
.mount('#app');
