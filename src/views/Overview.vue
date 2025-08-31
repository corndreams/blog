<template>
  <yk-space dir="vertical" style="padding: 20px;">
    <title-bar></title-bar>
    <gather></gather>
    <yk-space style="width: 100%;">
      <datas style="width: 50%;" />
      <div class="repart" style="background-color: #fff;height: 30px;">评论</div>
    </yk-space>
  </yk-space>
</template>

<script lang="ts" setup>
import TitleBar from '@/components/bar/TitleBar.vue'
import gather from '@/components/overview/gather.vue'
import datas from "@/components/overview/datas.vue";
</script>

<style lang="less" scoped></style>