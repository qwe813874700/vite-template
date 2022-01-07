import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
