import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el:'#app',
    data:{
        loadingchange1:false,
        loadingchange2:true,
        loadingchange3:false
    },
    created () {
        setTimeout(() => {
            let event = new Event('change')
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('succes')
        },3000)
    },
    methods:{
        changeinput (e) {
            console.log(e);
            console.log(e.target.value) 
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