<template>
  <div ref="chart" class="chart" :style="{height:chartHeight}"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, markRaw, watch } from "vue";

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// // 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

// // 接下来的使用就跟之前一样，初始化图表，设置配置项
const chart = ref<HTMLDivElement>()

const myChart = ref()

const props = defineProps(['data', 'chartHeight'])

const xAxisD = ref<string[]>([])
const seriesD = ref<number[]>([])
const option = ref()
const visit = (e: any) => {
  xAxisD.value = [];
  seriesD.value = [];
  for (let i = 0; i < e.length; i++) {
    xAxisD.value.push(e[i].date)
    seriesD.value.push(e[i].count)
  }
  option.value = {
    color: ['#285AED'],
    grid: {
      top: '4%',
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: xAxisD.value
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: seriesD.value,
        type: 'line',
        smooth: true
      }
    ]
  }
}

onMounted(()=>{
  visit(props.data)
  myChart.value =markRaw(echarts.init(chart.value as HTMLDivElement))
  myChart.value.setOption(option.value)
  window.addEventListener("resize",()=>{
    myChart.value.resize()
  })
})
watch(
  ()=> props.data,
  (n) =>{
    visit(n)
    myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement))
    myChart.value.setOption(option.value)
  }
)

onBeforeUnmount(()=>{
  window.removeEventListener("resize",()=>{
    myChart.value.resize()
  })
})
// const myChart = echarts.init(document.getElementById('main'));
// myChart.setOption({
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line',
//       smooth: true
//     }
//   ]
// });
</script>

<style lang="less" scoped>
.chart{
  width: 100%;
}
</style>