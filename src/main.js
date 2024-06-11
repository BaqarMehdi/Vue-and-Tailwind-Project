import { createApp } from 'vue'
import App from './App.vue'
import '../src/style.css'
import DashboardPage from "@/components/DashboardPage.vue";
import NavbarPage from './components/NavbarPage.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "../src/routes"

const app = createApp(App)
app.component('DashboardPage',DashboardPage)

app.component('NavbarPage', NavbarPage)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
