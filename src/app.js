import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('button-group',ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loadingchange1:false,
        loadingchange2:true,
        loadingchange3:false
    }
})