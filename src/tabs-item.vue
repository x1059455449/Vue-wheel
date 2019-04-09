<template>
  <div class="tabs-item" :class="classes" @click="onClick" :data-name="name">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'VuewheelTabsItem',
  data(){
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes(){
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  inject: ['eventBus'],
  methods: {
    onClick(){
      if(this.disabled) return
      this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
      this.$emit('click',this)
    }
  },
  created(){
    if(this.eventBus){
      this.eventBus.$on('update:selected',(name) => {
        this.active = (name === this.name)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  $active-color: rgb(0, 179, 134);
  $disabled-color: rgba(0,0,0,0.3);
  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover{
      color: $active-color;
    }
    &.active{
      color: $active-color;
      font-weight: bold;
    }
    &.disabled{
      color: $disabled-color;
      cursor: no-drop;
    }
  }
</style>