import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '../views/ShowView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import ShopView from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/show',
      name: 'show',
      component: ShowView
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },

  ]
})

export default router
