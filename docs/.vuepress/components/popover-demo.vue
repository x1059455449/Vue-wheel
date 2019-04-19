<template>
    <div>
        <g-popover>
            <template slot="content">
                <div>内容1</div>
            </template>
            <g-button>Click(Top)</g-button>
        </g-popover>
        <g-popover position="bottom">
            <template slot="content">
                <div>内容2</div>
            </template>
            <g-button>Click(Botton)</g-button>      
        </g-popover>
        <g-popover position="left">
            <template slot="content">
                <div>内容3</div>
            </template>
            <g-button>Click(Left)</g-button>      
        </g-popover>
        <g-popover position="right">
            <template slot="content">
                <div>内容4</div>
            </template>
            <g-button>Click(Right)</g-button>      
        </g-popover>
        <g-popover trigger="hover">
            <template slot="content">
                <div>内容5</div>
            </template>
            <g-button>Hover</g-button>      
        </g-popover>
    </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import Vue from 'vue'
Vue.use(plugin)
    export default {
        components:{
            'g-popover':Popover,
            'g-button':Button
        }
    }
</script>

<style lang="scss" scoped>

</style>