import { createWebHistory, createRouter } from 'vue-router'

import IndexView from '@/views/IndexView.vue'
import OrderView from '@/views/OrderView.vue'
  
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/order',
    component: IndexView,
    children: [
      { 
        path: '/order', 
        name: 'order',
        component: OrderView,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router