<template>
    <g-row gutter="20">
        <g-col span="6" 
        :ipad="{span:6}" :narrow-pc="{span:4}" :pc="{span:4}"
        :wide-pc="{span:8}">
        1</g-col>
        <g-col span="6" 
        :ipad="{span:6}" :narrow-pc="{span:20}" :pc="{span:4}"
        :wide-pc="{span:8}">
        2</g-col>
        <g-col span="6" 
        :ipad="{span:6}" :narrow-pc="{span:20}" :pc="{span:4}"
        :wide-pc="{span:8}">
        3</g-col>
        <g-col span="6" 
        :ipad="{span:6}" :narrow-pc="{span:20}" :pc="{span:4}"
        :wide-pc="{span:8}">
        4</g-col>
    </g-row>
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