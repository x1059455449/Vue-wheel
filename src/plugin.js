import Toast from './toast'

export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message) {
            //alert(message)
            //不使用Vue的写法
            // var div = document.createElement('div')
            // div.textContent = message
            // document.body.appendChild(div)
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            console.log(message)
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
