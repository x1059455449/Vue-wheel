---
title: Button 按钮
---

# Button 按钮

### 使用方法

---

<button-demo></button-demo>

```
<g-button icon="setting">
                Button
            </g-button>
            <g-button>
                Button
            </g-button>
            <g-button icon="setting" icon-position="right">
                Button
            </g-button>
            <g-icon name="cdownload"></g-icon>
            <g-button icon="cdownload" icon-position="right">
                DownLoad
            </g-button>
```

---

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|-----|:-----|
|  icon         | 图标名          | String |  ——  | —— |
|  position     | 图标位置        | String |  left , right   | left |
|  loading      | 有loading效果的按钮，点击之后出现loading，再次点击恢复正常| Boolean | —— | false |


