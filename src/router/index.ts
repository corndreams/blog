import { createWebHistory, createRouter } from 'vue-router'

import IndexView from '@/views/IndexView.vue'
import OverView from '@/views/OverView.vue'
  
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/overview',
    component: IndexView,
    children: [
      { 
        path: '/overview', 
        name: 'overview',
        component: OverView,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router