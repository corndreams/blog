<template>
  <div class="card subset">
    <yk-space>
      <div class="subset-menu" :class="{'subset-menu-seleted':selected==-1}">
        全部 {{ subset.data.count }}
      </div>
      <div class="subset-menu" v-for="item in state.data" :key="item.id">{{ item.name }} {{ item.value }}</div>
      <div class="subset-menu" v-for="item in subset.data.list" :key="item.id" v-show="item.value > 0">{{ item.name }} {{
        item.value }}</div>
    </yk-space>
  </div>
</template>

<script lang="ts" setup>
import { subset, state } from '@/mock/data';
import { ref } from 'vue';
// import { useSubsetStore } from '@/store/subset';

const selected=ref(-1)

// const subsetStore = useSubsetStore()

// const getSubset = () => {
//   subsetStore.data = subset.data.list
//   subsetStore.count = subset.data.count
//   console.log(subsetStore);
// }

// getSubset()
</script>

<style lang="less" scoped>
.subset{
  padding: @space-l @space-xl;
  &-menu{
    padding: 0 @space-l;
    background-color: @bg-color-m;
    border-radius: @radius-r;
    line-height: 32px;
    user-select: none;
  }
}
</style>