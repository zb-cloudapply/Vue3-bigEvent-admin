import { createApp } from 'vue'
import '@/assets/main.scss'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import pinia from './stores'

const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
