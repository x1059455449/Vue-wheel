<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'VueWheelCol',
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>

<style scoped lang="scss">
.col {
    height: 100px;
    width: 50%;
    background: greenyellow;
    border: 1px solid beige;

    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {//#为SCSS的插值语法
            width: ($n/24)*100%;
        }
    }
}
</style>