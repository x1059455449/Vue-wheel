const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected prop', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tabs selected="finance">
    <g-tabs-head>
        <g-tabs-item name="set" disabled>
            <g-icon name="setting"></g-icon>setting more
        </g-tabs-item>
        <g-tabs-item name="finance">
            finance
        </g-tabs-item>
        <g-tabs-item name="sports">
            sports
        </g-tabs-item>
        <g-tabs-item name="news">
            news
        </g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="set">something about setting</g-tabs-pane>
        <g-tabs-pane name="finance">something about finance</g-tabs-pane>
        <g-tabs-pane name="sports">something about sports</g-tabs-pane>
        <g-tabs-pane name="news">something about news</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let ele = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(ele.classList.contains('active')).to.be.true
      done()
    })
  })
  
  it('接受 direction prop',() => {
    
  })
})