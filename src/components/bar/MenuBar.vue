<template>
  <yk-space dir="vertical" class="menu-bar" size="m">
    <router-link :to="item.path" v-for="item in navLinks" v-bind:key="item.path" class="menu-item">
      <yk-space align="center" size="m">
        <component :is="item.icon" />
        <yk-text>{{ item.name }}</yk-text>
      </yk-space>
    </router-link>
  </yk-space>
</template>

<script lang="ts" setup>
import { navLinks } from "@/utils/menu";

</script>

<style lang="less" scoped>
.menu-bar {
  width: 160px;
  padding: @space-l;
  position: fixed;
  top: 72px;
  left: 8px;

  .menu-item {
    width: 100%;
    height: 40px;
    // background-color: @bg-color-l;
    border-radius: @radius-m;
    padding: 0 @space-l;
    display: flex;
    align-items: center;
    text-decoration: none;

    .yk-icon {
      color: @font-color-ss;
      widows: 16px;
      height: 16px;
    }

    &:hover {
      background-color: @bg-color-l;
    }
  }

  .router-link-active {
    background: linear-gradient(180deg, #2b5aede0 0%, #2B5AED 100%);

    .yk-icon {
      color: @bg-color-l;
    }

    .yk-text {
      color: @bg-color-l;
    }
  }
}
</style>