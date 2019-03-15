import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el:'#app',
    data:{
        loadingchange1:false,
        loadingchange2:true,
        loadingchange3:false
    }
})