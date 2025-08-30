<template>
  <yk-space dir="vertical" size="xl">
    <div class="data-card">
      <div class="data-card-title">
        <span class="data-card-title-name">统计</span>
        <yk-radio-group v-model="radio" type="button" :solid="true">
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="day">今天</yk-radio>
        </yk-radio-group>
      </div>
    </div>
    <div class="data-card">
      <div class="data-card-title">
        <span class="data-card-title-name">统计</span>
        <yk-radio-group v-model="radio" type="button" :solid="true">
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="day">今天</yk-radio>
        </yk-radio-group>
      </div>
    </div>
  </yk-space>
</template>

<script>
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