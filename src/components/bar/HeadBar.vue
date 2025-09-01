<template>
  <div class="head-bar">
    <yk-space align="center" size="m" style="cursor: pointer;" @click="backHome">
      <div class="logo">logo</div>
      <span class="name">我的博客</span>
    </yk-space>
    <yk-space align="center" size="xl">
      <yk-badge is-dot>
        <IconMailOutline style="font-size: 20px;" @click="changeActive(true)" />
      </yk-badge>
      <yk-avatar img-url="https://www.huohuo90.com:3003/user/6353b034dd4b583975e77fbe.png"
        style="height: 30px; width: 30px;"></yk-avatar>
      <div><yk-theme style="font-size: 20px;" /></div>
      <yk-button>退出</yk-button>
    </yk-space>
    <information :active="active" @close="changeActive(false)"/>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import information from '../reply/information.vue'
import { ref } from 'vue'
const router = useRouter()

const active = ref<boolean>(false)

const changeActive = (e:boolean) => {
  active.value = e
}

const backHome = () => {
  router.push('/')
}
</script>

<style lang='less' scoped>
.head-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: @bg-color-l;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 @space-xl;
  // justify-items: auto;
}

.logo {
  height: 24px;
  width: 38px;
}

.name {
  font-size: 20px;
  font-weight: 600;
}
</style>