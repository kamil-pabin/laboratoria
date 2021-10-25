import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Laboratorium1 from '../views/Laboratorium1.vue'
import Laboratorium2 from '../views/Laboratorium2.vue'
import Laboratorium3 from '../views/Laboratorium3.vue'
import Laboratorium4 from '../views/Laboratorium4.vue'
import Laboratorium5 from '../views/Laboratorium5.vue'
import Laboratorium6 from '../views/Laboratorium6.vue'
import Laboratorium7 from '../views/Laboratorium7.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Laboratorium1',
    name: 'Laboratorium1',
    component: Laboratorium1
  },
  {
    path: '/Laboratorium2',
    name: 'Laboratorium2',
    component: Laboratorium2
  },
  {
    path: '/Laboratorium3',
    name: 'Laboratorium3',
    component: Laboratorium3
  },
  {
    path: '/Laboratorium4',
    name: 'Laboratorium4',
    component: Laboratorium4
  },
  {
    path: '/Laboratorium5',
    name: 'Laboratorium5',
    component: Laboratorium5
  },
  {
    path: '/Laboratorium6',
    name: 'Laboratorium6',
    component: Laboratorium6
  },
  {
    path: '/Laboratorium7',
    name: 'Laboratorium7',
    component: Laboratorium7
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
