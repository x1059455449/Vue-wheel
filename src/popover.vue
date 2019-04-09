<template>
  <div class="popover" ref="popover"> 
    <div class="content-wrapper" v-if="visible" ref="contentWrapper"
      :class="{[`position-${position}`]:true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>


<script>
export default {
  name: "VuewheelPopover",
  data(){
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value){
        return ['click','hover'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    openEvent(){
      return (this.trigger === 'click') ? 'click' : 'mouseenter'
    },
    closeEvent(){
      return (this.trigger === 'click') ? 'click' : 'mouseleave'      
    }
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    }else{
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  beforeDestroy(){
    const {popover} = this.$refs
    if (this.trigger === 'click'){
      popover.removeEventListener('click', this.onClick)
    }else{
      popover.removeEventListener('mouseenter', this.open)
      popover.removeEventListener('mouseleave', this.close)
    }
  },
  methods: {
    positionContent(){
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {width,height,top,left} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let position = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: height + top + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + ((height - height2) / 2),
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + ((height - height2) / 2),
          left: width + left + window.scrollX
        }
      }
      contentWrapper.style.left = position[this.position].left + 'px'
      contentWrapper.style.top = position[this.position].top + 'px'
    },
    onClickDocument(e){
      if(this.$refs.popover && 
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) 
      ){return}
      if(this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))           
      ){return}
      this.close()
    },
    open(){
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click',this.onClickDocument)
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click',this.onClickDocument)
    },
    onClick(event){
      if(this.$refs.triggerWrapper.contains(event.target)){
        if(this.visible === true){
          this.close()
        }else{
          this.open()
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
 $border-color: rgb(139, 202, 38);
  $border-radius: 4px;
  $border-width: 2px;
  $calc: calc(100% - 3px);
  .popover {
    display: inline-block;
    position: relative;
    > .triggerWrapper{
      display: inline-block;
    }
  }
  .content-wrapper {
    position: absolute;
    border: $border-width solid $border-color;
    border-radius: $border-radius;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;//英文网站建议不要这样写
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    z-index: 20;
    &::before,&::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after{
        left: 10px;
        border-bottom: none;
      }
      &::before{
        border-top-color: $border-color;
        top: 100%;
      }    
      &::after{
        border-top-color: white;
        top: $calc;
      }
    }
    &.position-bottom{
      margin-top: 10px;
      &::before, &::after{
        left: 10px;
        border-top: none;
      }
      &::before{
        border-bottom-color: $border-color;
        bottom: 100%;
      }    
      &::after{
        border-bottom-color: white;
        bottom: $calc;
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
        border-right: none;
      }
      &::before{
        border-left-color: $border-color;
        left: 100%;
      }    
      &::after{
        border-left-color: white;
        left: $calc;
      }
    }
    
    &.position-right{
      margin-left: 10px;
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
        border-left: none;
      }
      &::before{
        border-right-color: $border-color;
        right: 100%;
      }    
      &::after{
        right: $calc;
        border-right-color: white;
      }
    }           
}  
</style>