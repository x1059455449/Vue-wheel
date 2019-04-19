<template>
    <div>
    <g-row class="demo-row" gutter="20">
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
    </g-row>

    <g-row class="demo-row" gutter="20">
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="5" offset="1">
        <div class="demo">5</div>
      </g-col>
      <g-col span="4" offset="2">
        <div class="demo">4</div>
      </g-col>
      <g-col span="3" offset="3">
        <div class="demo">3</div>
      </g-col>
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