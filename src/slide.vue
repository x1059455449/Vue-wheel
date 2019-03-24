<template>
    <transition name="slide">
        <div class="slide" v-if="view">
            <slot></slot>
            <button @click="view = false">close</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'VuewheelSlide',
        data () {
            return {
                view:true
            }
        }
    }
</script>

<style scoped lang="scss">
.slide {
    width: 150px;
    position: relative;
    > button {
        position: absolute;
        top: 0;
        right: 0;
    }
}
  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>