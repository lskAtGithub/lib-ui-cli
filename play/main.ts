import { createApp } from 'vue'
import libUi from 'lib-ui'

import App from './App.vue'

const app = createApp(App)
app.use(libUi)
app.mount('#app')
