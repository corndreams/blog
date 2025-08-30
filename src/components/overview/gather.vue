<template>
  <yk-space class="gather">
    <div v-for="(item, index) in overLink" v-bind:key="index" class="gather-card"
      :style="{ background: 'linear-gradient(' + item.bgColor + ')' }">
      <yk-space dir="vertical" size="s">
        <yk-text type="secondary">{{ item.name }}</yk-text>
        <yk-title :level="2" style="margin: 0;">{{ item.total }}</yk-title>
      </yk-space>
      <yk-button shape="square" v-if="item.name != '本地文件'">
        <IconPlusOutline />
      </yk-button>
    </div>
  </yk-space>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import { overLink } from "@/utils/menu";
// import { overview } from "@/mock/data"

// const gathers = ref(overLink)

// console.log(overLink);
// console.log(overview);


// const gatherData = () =>{
//   let data= overview.data
//   gathers.value[0].total =data.file
//   console.log(overLink);
// }

// gatherData()

</script>

<style lang="less" scoped>
.gather {
  width: 100%;

  .gather &-card {
    width: 25%;
    // background: @bg-color-l;
    // background-color: #eee;
    display: flex;
    justify-content: space-between;
    padding: @space-xl;
    border-radius: @radius-m;
    align-items: center;

    &:first-child {

      .yk-title,
      .yk-text {
        color: @white;
      }
    }
  }
}
</style>