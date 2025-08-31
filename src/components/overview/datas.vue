<template>
  <yk-space dir="vertical" size="xl">
    <div class="data-card">
      <div class="data-card-title">
        <span class="data-card-title-name">访问量</span>
        <yk-radio-group v-model="visitRadio" type="button" :solid="true" @change="getVisit">
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="moon">近一月</yk-radio>
        </yk-radio-group>
      </div>
      <LineChart chart-height="208px" :data="visitData" />
    </div>
    <div class="data-card">
      <div class="data-card-title">
        <span class="data-card-title-name">数据检测</span>
        <yk-radio-group v-model="checkRadio" type="button" :solid="true">
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="day">今天</yk-radio>
        </yk-radio-group>
      </div>
      <div style="display: flex;">
        <PieChart title="设备总数" chart-height="200px" :data="survey.data.device" />
        <PieChart title="访问总数" chart-height="200px" :data="survey.data.website"/>
      </div>
    </div>
  </yk-space>
</template>

<script lang="ts" setup>
import { LineChart,PieChart } from "@/components/echarts/index";
import { visit, survey } from "@/mock/data"
import { onMounted, ref } from "vue";
const visitRadio = ref('moon')
const checkRadio = ref('day')

const visitData = ref(visit.data)
const getVisit=(e:string)=>{
  let data = visit.data;
  if(e=='week'){
    data = data.slice(0,7)
  }
  visitData.value = data
}

// const visitData = ref(visit.data)
// const getVisit = (e: string) => {
//   let data = visit.data;
//   if (e == 'week') {
//     data = data.slice(0, 7)
//   }
//   visitData.value = data
// }

onMounted(()=>{
  getVisit(visitRadio.value)
})
</script>

<style lang="less" scoped>
.data-card {
  padding: @space-xl;
  border-radius: @radius-m;
  background: @bg-color-l;
  width: 100%;
  &-title{
    display: flex;
    justify-content: space-between;
    padding-bottom: @space-l;
    &-name{
      .font-l();
      font-weight: 600;
    }
  }
}
</style>