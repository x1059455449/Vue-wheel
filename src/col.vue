<template>
    <div class="col" :class="colorClass"
    :style="colorStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'VueWheelCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }
        },
        data () {
            return {
                gutter:0
                
            }
        },
        // created () {
        //     console.log('col created');
        // },
        // mounted () {
        //     console.log('col mounted');
        // },
        computed: {
            colorClass () {
                let {span,offset} = this
                return [span &&`col-${span}`,
                offset && `offset-${offset}`
                ]
            },
            colorStyle () {
                //console.log('changing')
                return {
                    paddingLeft: this.gutter/2 + 'px',
                    paddingRight: this.gutter/2 + 'px'
                }
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
    $class-prefix: offset-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {//#为SCSS的插值语法
            margin-left: ($n/24)*100%;
        }
    }
}
</style>