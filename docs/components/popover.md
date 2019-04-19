---
title: Popover 弹出框
---

# Popover 弹出框

### 使用方法

---

<popover-demo></popover-demo>

---
```
<div>
    <g-popover>
        <template slot="content">
            <div>内容1</div>
        </template>
        <g-button>Click(Top)</g-button>
    </g-popover>
    <g-popover position="bottom">
        <template slot="content">
            <div>内容2</div>
        </template>
        <g-button>Click(Botton)</g-button>      
    </g-popover>
    <g-popover position="left">
        <template slot="content">
            <div>内容3</div>
        </template>
        <g-button>Click(Left)</g-button>      
    </g-popover>
    <g-popover position="right">
        <template slot="content">
            <div>内容4</div>
        </template>
        <g-button>Click(Right)</g-button>      
    </g-popover>
    <g-popover trigger="hover">
        <template slot="content">
            <div>内容5</div>
        </template>
        <g-button>Hover</g-button>      
    </g-popover>
</div>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import Vue from 'vue'
Vue.use(plugin)
    export default {
        components:{
            'g-popover':Popover,
            'g-button':Button
        }
    }
</script>
```

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|-----|:-----|
|  position    | 弹框位置         | String |  top , right , left , bottom  | top |
|  trigger     | 弹框触发方式      | String |  click , hover   | click |