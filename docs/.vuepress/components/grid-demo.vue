<template>
    <div>
        <g-row>
            <g-col span="6">1</g-col>
            <g-col span="6">2</g-col>
            <g-col span="6">3</g-col>
            <g-col span="6">4</g-col>
        </g-row>
        <g-row>
            <g-col span="12">1</g-col>
            <g-col span="12">2</g-col>
        </g-row>
        <g-row>
            <g-col span="8">1</g-col>
            <g-col span="8">2</g-col>
            <g-col span="8">3</g-col>
        </g-row>
        <g-row>
            <g-col span="2">2</g-col>
            <g-col span="22">22</g-col>
        </g-row>
        <g-row>
            <g-col span="4">4</g-col>
            <g-col span="20">20</g-col>   
        </g-row>
        <g-row>
            <g-col span="4">1</g-col>
            <g-col span="6">2</g-col>
            <g-col span="6">3</g-col>
            <g-col span="6" offset="2">4</g-col>
        </g-row>
    </div>
</template>

<script>
import Col from '../../../src/col'
import Row from '../../../src/row'
    export default {
        components:{
            'g-col':Col,
            'g-row':Row
        }
    }
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.row{
  margin: 10px 0;
  .col {
    background: #ddd;
    border: 1px solid #aaa;
    min-height: 25px;
    display: flex;
    justify-content: center;
  }
}
</style>