import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    component: () => import('../views/FilmCard.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/searchres',
    name: 'searchres',
    component: () => import('../views/SearchResults.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV),
  routes,
  scrollBehavior() {
    return {top: 0}
  }
})

export default router
