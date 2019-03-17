<template>
    <div class="container" :class="{error}"> 
        <input type="text" :value="value" :disabled="disabled"
        :readonly="readonly" 
        @change="$emit('change',$event)"
        @input="$emit('input', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'vuewheelinput',
        components:{Icon},
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        }
    }
</script>

<style scoped lang="scss">
    // --button-height: 32px;
    // --font-size: 14px;
    // --button-bg: white;
    // --button-active-bg: aqua;
    // --border-radius: 4px;
    // --color: #333;
    // --border-color: #999;
    // --border-color-hover: rgb(187, 39, 39);
    $height:32px;//声明一个变量
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    .container {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        :not(last-child) {margin-right: .5em;}
            > input {
                height: 32px;
                border: 1px solid $border-color;
                border-radius: 4px;
                padding: 0 8px;
                &:hover{
                    border-color: $border-color-hover;
                }
                &:focus{
                    box-shadow: inset 0 1px 3px $box-shadow-color;
                    outline: none;
                }
                &[disabled],&[readonly] {
                    border-color: #ccc;
                    color: #ccc;
                    cursor: not-allowed;
                }
            }
            &.error {
                > input {
                    border-color: $red;
                }
            }
            .icon-error {
                fill: $red;
            }
            .errorMessage {
                color: $red;
            }
        }
        
</style>