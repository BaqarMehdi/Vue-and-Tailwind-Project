// main.js

// Import createApp function from Vue
import { createApp } from 'vue'

// Import the root component (App.vue)
import App from './App.vue'

// Import library object from Font Awesome's SVG core
// import { library } from '@fortawesome/fontawesome-svg-core'

// Import subset of solid (filled) icons from Font Awesome
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Import global styles (e.g., for Tailwind CSS)
import '../src/style.css'


import NavbarPage from './components/NavbarPage.vue'

app.component('NavbarPage', NavbarPage)

// Import FontAwesomeIcon component if you're using it
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import router configuration (assuming it's defined in routes.js)
import router from "../src/routes"

// Create a new Vue app instance using the createApp function
const app = createApp(App)

// Register the router with the Vue app
app.use(router)

// Mount the Vue app to the DOM element with the ID 'app'
app.mount('#app')
