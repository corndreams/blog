<template>
  <div class="top-title">
    <yk-title :level="3" style="margin: 0;line-height: 36px;">{{ props.title }}</yk-title>
    <slot name="custom"></slot>
    <yk-space v-show="isSearch">
      <yk-button type="secondary" v-show="SearchData" @click="cancleSearch">111</yk-button>
      <yk-input-search style="width: 320px;" placeholder="请输入..." v-model="SearchData">
        <template #suffix>
          <yk-button>
            <IconSearchOutline />
          </yk-button>
        </template>
      </yk-input-search>
    </yk-space>
  </div>
</template>

<script lang="ts" setup>
// import { IconSearchOutline } from '@yike-design/ui/es/components/svg-icon';
import { ref } from 'vue';

const SearchData = ref()

const props = defineProps([
  'title',
  'isSearch'
])

const emit=defineEmits(['serach'])

const serach=()=>{
  emit('serach',SearchData.value)
}

const cancleSearch=()=>{

}

serach()

</script>

<style lang="less" scoped>
.top-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>