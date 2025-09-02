import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@yike-design/ui/es/index.less'
// 引入全局方法
import { YkMessage, YkNotification } from '@yike-design/ui'
import Icon from '@yike-design/ui/es/components/svg-icon'

import './style.less'

const app = createApp(App)

const pinia = createPinia()

app.config.globalProperties.$notification = YkNotification
app.config.globalProperties.$message = YkMessage

app.use(router)
app.use(pinia)
app.use(Icon)
app.mount('#app')
