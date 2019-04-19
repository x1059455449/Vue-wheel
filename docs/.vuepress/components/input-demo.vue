<template>
    <div>
    <div class="box">
        <g-input value="张三" disabled></g-input>
        <g-input value="李四" readonly></g-input>
        <g-input value="周六"></g-input>
        <g-input value="王八" v-model="message"></g-input>
        <p>{{message}}</p>
        <button @click="message+=5">+5</button>
    </div>
    <div class="box">
        <g-input value="吴" error="姓名不能少于两个字"></g-input>
    </div>
    </div>
</template>

<script>
import Input from '../../../src/input'
    export default {
        components:{
            'g-input': Input
        },
        data () {
            return {
                message:'v-model的值'
            }
        }
    }

</script>

<style lang="scss" scoped>
.box {
    margin: 10px 0;
  }
</style>