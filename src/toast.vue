<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    //侵入性太强，应该使用插件写法
    // import Vue from 'vue'
    // Vue.prototype.$toast = function () {
    //     console.log('woshi toast')
    // }
    export default {
        name:'VuewheelToast'
    }
</script>

<style scoped lang="scss">
$font-size:14px;
$toast-height:40px;
$toast-bg:rgba(0,0,0,0.74);
.toast {
    border: 1px solid red;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    color:beige;
    display: flex;
    align-items: center;
    background:  $toast-bg;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding: 0 16px;
}
</style>