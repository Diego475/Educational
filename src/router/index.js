import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SingUp from '../views/SingUp'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/singUp',
    component: SingUp,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
