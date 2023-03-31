import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('./components/LoginComponent.vue')
  },
  {
    path: '/register',
    component: () => import('./components/RegisterComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router