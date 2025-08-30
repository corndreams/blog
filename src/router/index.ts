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
        name: '总览',
        component: OverView,
      },
      {
        path: '/localfile',
        name: '本地文件',
        component: OverView,
      },
      {
        path: '/article',
        name: '博客文章',
        component: OverView,
      },
      {
        path: '/gallery',
        name: '图库',
        component: OverView,
      },
      {
        path: '/diary',
        name: '随笔',
        component: OverView,
      },
      {
        path: '/setting',
        name: '设置',
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