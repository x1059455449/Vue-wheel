const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {
    it('存在.', () => {
         expect(Input).to.be.ok
    })
     describe('接收props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        }) 
        it('可以接收value', () => {
            //const Constructor = Vue.extend(Input)
            vm = new Constructor({
            propsData: {
               value: '1234'
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            //vm.$destroy()
        })
        it('可以接收disabled', () => {
           //const Constructor = Vue.extend(Input)
           vm = new Constructor({
           propsData: {
               disabled: true
           }
           }).$mount()
           const inputElement = vm.$el.querySelector('input')
           console.log(inputElement.outerHTML)
           expect(inputElement.disabled).to.equal(true)
           //vm.$destroy()
       })
       it('可以接收readonly', () => {
           //const Constructor = Vue.extend(Input)
           vm = new Constructor({
           propsData: {
               readonly: true
           }
           }).$mount()
           const inputElement = vm.$el.querySelector('input')
           console.log(inputElement.outerHTML)
           expect(inputElement.readOnly).to.equal(true)
           //vm.$destroy()
       })
       it('可以接收error', () => {
           //const Constructor = Vue.extend(Input)
           vm = new Constructor({
           propsData: {
               error: '你对了'
           }
           }).$mount()
           const useElement = vm.$el.querySelector('use')
           expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
           const inputElement = vm.$el.querySelector('input')
           const errorMessage = vm.$el.querySelector('.errorMessage')
           expect(errorMessage.innerText).to.equal('你对了')
           //vm.$destroy()
       })
     })
     describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件', () => {
            ['change','input','focus','blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                //触发input的change事件
                let event = new Event(eventName)
                //为了兼容v-model
                Object.defineProperty(event,'target',{
                    value:{value:'v-model'},
                    enumerable:true
                })
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                console.log(eventName)
                //expect(callback).to.have.been.called
                //expect(callback).to.have.been.calledWith(event)
                expect(callback).to.have.been.calledWith('v-model')
            })   
        })
        // it('支持input事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('input',callback)
        //     //触发input的change事件
        //     let event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //expect(callback).to.have.been.called
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持focus事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('focus',callback)
        //     //触发input的change事件
        //     let event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //expect(callback).to.have.been.called
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持blur事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('blur',callback)
        //     //触发input的change事件
        //     let event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //expect(callback).to.have.been.called
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })
})