import Vue from 'vue'
import VueRouter from 'vue-router'
import Conversor from '../views/Conversor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Conversor
  },
]

const router = new VueRouter({
  routes
})

export default router
