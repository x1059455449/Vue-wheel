---
title: Grid布局
---

# Grid布局

### 基本使用

---

<grid-demo></grid-demo>

```
<g-row>
    <g-col span="6">1</g-col>
    <g-col span="6">2</g-col>
    <g-col span="6">3</g-col>
    <g-col span="6">4</g-col>
</g-row>
<g-row>
    <g-col span="12">1</g-col>
    <g-col span="12">2</g-col>
</g-row>
<g-row>
    <g-col span="8">1</g-col>
    <g-col span="8">2</g-col>
    <g-col span="8">3</g-col>
</g-row>
<g-row>
    <g-col span="2">2</g-col>
    <g-col span="22">22</g-col>
</g-row>
<g-row>
    <g-col span="4">4</g-col>
    <g-col span="20">20</g-col>   
</g-row>
<g-row>
    <g-col span="4">1</g-col>
    <g-col span="6">2</g-col>
    <g-col span="6">3</g-col>
    <g-col span="6" offset="2">4</g-col>
</g-row>
```
### 设置gutter/offset
---
<grid-offer-gutter></grid-offer-gutter>

---

```
<g-row class="demo-row" gutter="20">
    <g-col span="8">
    <div class="demo">8</div>
    </g-col>
    <g-col span="8">
    <div class="demo">8</div>
    </g-col>
    <g-col span="8">
    <div class="demo">8</div>
    </g-col>
</g-row>

<g-row class="demo-row" gutter="20">
    <g-col span="6">
    <div class="demo">6</div>
    </g-col>
    <g-col span="5" offset="1">
    <div class="demo">5</div>
    </g-col>
    <g-col span="4" offset="2">
    <div class="demo">4</div>
    </g-col>
    <g-col span="3" offset="3">
    <div class="demo">3</div>
    </g-col>
</g-row>
```
### 页面响应式
<grid-media></grid-media>

```
<g-row gutter="20">
    <g-col span="6" 
    :ipad="{span:6}" :narrow-pc="{span:4}" :pc="{span:4}"
    :wide-pc="{span:8}">
    1</g-col>
    <g-col span="6" 
    :ipad="{span:6}" :narrow-pc="{span:20}" :pc="{span:4}"
    :wide-pc="{span:8}">
    2</g-col>
    <g-col span="6" 
    :ipad="{span:6}" :narrow-pc="{span:20}" :pc="{span:4}"
    :wide-pc="{span:8}">
    3</g-col>
    <g-col span="6" 
    :ipad="{span:6}" :narrow-pc="{span:20}" :pc="{span:4}"
    :wide-pc="{span:8}">
    4</g-col>
</g-row>
```


### row 参数
| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  gutter       | 栅格的间隙      | String,Number |  ——  | —— |
|  align        | 栅格内部元素水平排列方向| String | left,right,center | left |

### col 参数
| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  span         | 栅格占据的列数    | String,Number |  ——  | —— |
|  offset       | 栅格左侧的间隔格数| String,Number | ——  |  —— |
|  ipad         | ≥577px  响应式栅格数    | Object (例子：{span: 4, offset: 4}) | —— |  ——  |
|  npc          | ≥769px  响应式栅格数    | Object (例子：{span: 4, offset: 4}) | —— |  ——  |
|  pc           | ≥993px  响应式栅格数    | Object (例子：{span: 4, offset: 4}) | —— |  ——  |
|  wpc          | ≥1201px 响应式栅格数   | Object (例子：{span: 4, offset: 4}) | —— |  ——  |
