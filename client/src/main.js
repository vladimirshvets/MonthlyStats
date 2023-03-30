// App
import { createApp } from 'vue'
import App from './App.vue'

// Router
import { router } from './router.js';

// Vuetify
import { vuetify } from './vuetify.js';

// Date picker
import '@vuepic/vue-datepicker/dist/main.css';

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
