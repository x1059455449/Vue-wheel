<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'VuewheelTabsHead',
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(item,vm) => {
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      let {left: wrapperLeft} = this.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - wrapperLeft}px`
    })
  }
}
</script>

<style lang='scss' scoped>
  $tab-height: 40px;
  $active-color: rgb(0, 179, 134);
  $border-color: #ccc;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color; 
    > .actions-wrapper{
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
    > .line{
      width: 96px;
      position: absolute;
      bottom: -1px;
      border-bottom: 2px solid $active-color;
      transition: all .3s;
    }
  }
</style>