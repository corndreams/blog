<template>
  <div ref="chart" class="chart" :style="{ height: chartHeight }"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, markRaw, watch } from "vue";

import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
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
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

// // 接下来的使用就跟之前一样，初始化图表，设置配置项
const chart = ref<HTMLDivElement>()

const myChart = ref()

const props = defineProps(['data', 'chartHeight', 'title'])

const option = ref()
const survey = (e: any) => {
  let total: number = 0;
  for (let i = 0; i < e.length; i++) {
    total += e[i].value
  }
  option.value = {
    color: ['#285AED', '#FA5247', '#1CCBB6', '#F625AF', '#FFB435'],
    title: {
      text: total,
      subtext: props.title,
      left: 'center',
      top: '34%',
      textStyle: {
        fontSize: 32,
        color: '#686B73',
        algin: 'center',
      },
      subtextStyle: {
        fontSize: 14,
        color: '#686B73'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
      bottom: 0,
      icon: 'circle'
    },

    series: [
      {
        //name:"设备总数”
        type: 'pie',
        radius: ['60%', '76%'],
        avoidLabelOverlap: true,
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,//默认县示美闲，如果此处是true，则数据重爱
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: e,
      }
    ]
  }
}
// survey(props.data)

onMounted(() => {
  survey(props.data)
  myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement))
  myChart.value.setOption(option.value)
  window.addEventListener("resize", () => {
    myChart.value.resize()
  })
})
watch(
  () => props.data,
  (n) => {
    survey(n)
    myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement))
    myChart.value.setOption(option.value)
  }
)

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    myChart.value.resize()
  })
})
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
}
</style>