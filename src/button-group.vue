<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'vuewheebuttonGroup',
        mounted () {
            //console.log(this.$children);//Vue只打印实例
            //console.log(this.$el);
            //console.log(this.$el.children);
            for(let node of this.$el.children) {
                console.log(node);
                let name = node.nodeName.toLowerCase()
                if( name !== 'button') {
                    console.warn(`该组件的子元素应该为g-button,不应该是${name}`)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
$font-size:14px;
$button-height:32px;
$button-bg:white;
$button-active-bg:#eee;
$border-radius:4px;
$border-color:#999;
$border-color-hover:#666;
$color:#333;
    .button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            // 第一个元素不需要margin-left
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>