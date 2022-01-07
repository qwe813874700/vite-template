import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueI18n from './plugins/i18n'

const app = createApp(App)

app.use(VueI18n)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app')
