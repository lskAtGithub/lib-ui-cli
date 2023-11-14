import { createApp } from 'vue'
import libUi from 'lib-ui'

import App from './App.vue'
// import '@lib-ui/theme-chalk/src/index.scss'
import '../dist/theme-chalk/css/index.css'

const app = createApp(App)
app.use(libUi)
app.mount('#app')
