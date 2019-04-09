<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'VuewheelTabsBody',
  inject: ['eventBus']
}
</script>

<style lang='scss' scoped>
  .tabs-body{
    padding: 1em 0;
  }
</style>