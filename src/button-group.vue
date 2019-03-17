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
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>