<template>
  <g-layout class="container">
        <g-slide class="slide">Slide</g-slide>
        <g-layout>
            <g-header class="header">header</g-header>
            <g-content class="main">content</g-content>
            <g-footer class="footer">footer</g-footer>
        </g-layout>           
    </g-layout>
</template>


<script>
import Content from '../../../src/content'
import Footer from '../../../src/footer'
import Header from '../../../src/header'
import Layout from '../../../src/layout'
import Slide from '../../../src/slide'
    export default {
        components:{
            'g-content':Content,
            'g-footer':Footer,
            'g-header':Header,
            'g-layout':Layout,
            'g-slide':Slide
        }
    }
</script>

<style lang='scss' scoped>
.container{
  color: #000;
  text-align: center;
  .header{
    height: 50px;
    background: rgba(0, 179, 134,.6);
  }
  .main{
    height: 100px;
    background: #fff;
  }
  .footer{
    height: 50px;
    background: rgba(0, 179, 134,.6);
  }
}

</style>