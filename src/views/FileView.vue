<template>
  <yk-space dir="vertical" style="padding: 20px;">
    <title-bar title="本地文件" :isSearch="false" class="">
      <template #custom>
        <yk-space align="center">
          <yk-text type="third">文件上传不超过20M</yk-text>
          <yk-button>上传</yk-button>
        </yk-space>
      </template>
    </title-bar>
  </yk-space>
</template>

<script lang="ts" setup>
import TitleBar from "@/components/bar/TitleBar.vue";
</script>

<style lang="less" scoped>

</style>