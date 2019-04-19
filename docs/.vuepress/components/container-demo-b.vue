<template>
    <div>
        <g-layout class="container">
            <g-header class="header">header</g-header>
            <g-content class="main">content</g-content>
            <g-footer class="footer">footer</g-footer>
        </g-layout>
    </div>
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

<style lang="scss" scoped>
.container{
  color: #000;
  text-align: center;
  .header{
    background: rgba(31, 87, 243, 0.6);
  }
  .main{

    background: #fff;
  }
  .footer{

    background: rgba(31, 87, 243, 0.6);
  }
  .slide{
      background: aquamarine;
  }
}
</style>