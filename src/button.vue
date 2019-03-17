<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <!-- <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`" ></use></svg> -->
        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Vue from 'vue'
    import Button from './button'
    import Icon from './icon'
    import ButtonGroup from './button-group'

    Vue.component('g-button',Button)
    Vue.component('g-icon',Icon)
    Vue.component('button-group',ButtonGroup)
    export default {
        name:'vuewheebutton',
       //props:['icon','iconPosition']
       props:{
           icon:{},
           iconPosition:{
               type:String,
               default:'left',
                //属性检查器
                validator (value) {
                    console.log(value);
                    // if(value !== 'left' && value !== 'right') {
                    //     console.log('please input left or right')
                    //     return false
                    // } else {
                    //     return true
                    // }
                    //优化
                    return !(value !== 'left' && value !== 'right')
                    //return value !== 'left' && value !== 'right' ? false : true;
                }    
           },
           loading:{
                type:Boolean,
                default:false
            } 
       }
    }
</script>

<style  lang="scss" scoped>
@keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg)}
}
    .g-button {
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
        &:active {
            background-color: var(--button-active-bg);
        }
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }       
</style>