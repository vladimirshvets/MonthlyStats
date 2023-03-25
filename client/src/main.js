// App
import { createApp } from 'vue'
import App from './App.vue'

// Router
import { router } from './router.js';

// Vuetify
import { vuetify } from './vuetify.js';

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
