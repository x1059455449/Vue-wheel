<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Vuewheellayout',
        data () {
            return {
                layoutClass: {
                hasSider: false
                }
            }
        },
        mounted () {
            //console.log(this.$children)
            this.$children.forEach((vm) => {
                if(vm.$options.name === "VuewheelSlide"){
                    this.layoutClass.hasSider = true
                }
            });
        }
    }
</script>

<style scoped lang="scss">
.layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border: 1px solid blue;
    &.hasSider {
      flex-direction: row;
    }
}
</style>



    