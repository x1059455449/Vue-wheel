<template>
    <div>
        <g-button @click="showToast1">top</g-button>
        <g-button @click="showToast2">middle</g-button>
        <g-button @click="showToast3">bottom</g-button>
        <g-button @click="showToast4">dianji</g-button>
    </div>
</template>

<script>
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import Vue from 'vue'
Vue.use(plugin)
    export default {
        components:{
            'g-button':Button,
            'g-toast':Toast
        },
    methods: {
        showToast1(){
        this.$toast({
            autoClose: 2
        })
        },
        showToast2(){
        this.$toast({
            closeButton: true,
            message: '这是一条消息'
        })
        },
        showToast3(){
        this.$toast({
            closeButton: true,
            position: 'bottom'
        })
        },
        showToast4(){
        this.$toast({
            closeButton: true,
            position: 'middle'
        })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>