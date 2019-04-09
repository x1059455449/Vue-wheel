import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import Slide from './slide'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-layout', Layout)
Vue.component('g-slide', Slide)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

import createElement from 'vue'

const h = createElement

new Vue({
    el: '#app',
    data: {
        loadingchange1: false,
        loadingchange2: true,
        loadingchange3: false,
        message: '',
        selectedTab: 'finance'
    },
    created() {
        setTimeout(() => {
            let event = new Event('change')
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('succes')
        }, 3000)
    },
    created() {
        // this.$toast('message<a href="https://baidu.com">2</a>', {
        //     // closeButton:{
        //     //     text:'know it',
        //     //     callback () {
        //     //     console.log('user knew it')
        //     // }
        //     // }
        //     enableHtml: false
        // })
    },
    methods: {
        yyy(data){
            console.log('yyy')
            console.log(data)
        },
        changeinput(e) {
            console.log(e);
            //console.log(e.target.value) 
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToastTest () {
            this.showToast('top')
        },
        showToast(position) {
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback() {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 3,
            })
        }
    }
})

//单元测试
/*import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
{
    const Constructor  =  Vue.extend(Button)
    //console.log(Constructor)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount('#test')
    let useElement = vm.$el.querySelector('use')
    //console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor  =  Vue.extend(Button)
    //console.log(Constructor)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    //console.log(useElement)
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor  =  Vue.extend(Button)
    //console.log(Constructor)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor  =  Vue.extend(Button)
    //console.log(Constructor)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}

{   //mock
    const Constructor  =  Vue.extend(Button)
    //console.log(Constructor)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    vm.$mount()
    let spy = chai.spy( () => {

    })
    vm.$on('click',spy)

    console.log(vm.$el)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()

}*/