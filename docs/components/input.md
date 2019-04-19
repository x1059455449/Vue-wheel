---
title: Input 输入框
---

# Input 输入框

### 使用方法

---

<input-demo></input-demo>

```
<div class="box">
    <g-input value="张三" disabled></g-input>
    <g-input value="李四" readonly></g-input>
    <g-input value="周六"></g-input>
    <g-input value="王八" v-model="message"></g-input>
    <p>{{message}}</p>
    <button @click="message+=5">+5</button>
</div>
<div class="box">
    <g-input value="吴" error="姓名不能少于两个字"></g-input>
</div>
```

---

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值  |
|:------------- |:---------------|:-----|-----|:-----|
|  value         | 输入框占位文本  | String |  ——  | —— |
|  disabled     | 禁用状态         | Boolean | —— | false |
|  readonly      | 只读状态        | Boolean | —— | false |
|  error        |  设置错误状态的提示信息 | String  | ——  |  ——  |
