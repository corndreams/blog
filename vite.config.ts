import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { YikeResolver } from '@yike-design/resolver' // https://vitejs.dev/config/ export default
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [YikeResolver] }),
    Components({ resolvers: [YikeResolver] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "@yike-design/ui/es/components/styles/basis.less";`,
      },
    },
  },
})
