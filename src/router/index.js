import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cv from '../views/Cv.vue'
import Projects from '../views/Projects.vue'
import DronePhotos from '../views/DronePhotos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    name: 'cv',
    component: Cv
  },
  {
    path: '/project',
    name: 'projects',
    component: Projects
  },
  {
    path: "/dronephotos",
    name: 'dronePhotos',
    component: DronePhotos
  }
]

const router = new VueRouter({
  routes
})

export default router
