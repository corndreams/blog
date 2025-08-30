<template>
  <div class="head-bar">
    <yk-space align="center" size="m" style="cursor: pointer;">
      <div class="logo">logo</div>
      <span class="name">我的博客</span>
    </yk-space>
    <yk-space align="center" size="xl">
      <yk-badge is-dot>
        <IconMailOutline style="font-size: 20px;" />
      </yk-badge>
      <div><yk-theme style="font-size: 20px;" /></div>
      <yk-button>退出</yk-button>
    </yk-space>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.head-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: @bg-color-l;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 @space-xl;
  // justify-items: auto;
}

.logo{
  height: 24px;
  width: 38px;
}

.name{
  font-size: 20px;
  font-weight: 600;
}
</style>