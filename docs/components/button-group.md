---
title: Button-Group 按钮
---

# ButtonGroup 按扭

### 使用方法

---
<button-group-demo></button-group-demo>

```
<g-button-group style="margin:20px;">
<g-button icon="left">上一页</g-button>
<g-button>更多</g-button>
<g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|-----|:-----|
|  icon         | 图标名          | String |  ——  | —— |
|  position     | 图标位置        | String |  left , right   | left |
|  loading      | 有loading效果的按钮，点击之后出现loading，再次点击恢复正常| Boolean | —— | false |
