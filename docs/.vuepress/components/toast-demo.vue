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
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast4 () {
            this.showToast('top')
        },
        showToast(position) {
            this.$toast(` ${parseInt(Math.random() * 100)}`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '关闭',
                    callback() {
                        console.log('已经关闭')
                    }
                },
                autoClose: 3,
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>