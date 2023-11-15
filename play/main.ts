import { createApp } from 'vue'
import libUi from 'lib-ui'

import App from './App.vue'
// import '@lib-ui/theme-chalk/src/index.scss'
import '../dist/lib-ui/theme-chalk/index.css'

const app = createApp(App)
app.use(libUi)
app.mount('#app')
