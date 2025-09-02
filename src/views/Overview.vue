<template>
  <yk-space dir="vertical" style="padding: 20px;">
    <title-bar title="总览" :isSearch="false"></title-bar>
    <gather></gather>
    <yk-space style="width: 100%;">
      <datas style="width: 50%;" />
      <Comment style="width: 50%;" />
    </yk-space>
  </yk-space>
</template>

<script lang="ts" setup>
import TitleBar from '@/components/bar/TitleBar.vue'
import gather from '@/components/overview/gather.vue'
import datas from "@/components/overview/datas.vue";
import { Comment } from '@/components/reply/index';
</script>

<style lang="less" scoped></style>