---
title: Tabs 标签
---

# Tabs 标签

### 使用方法

<tabs-demo></tabs-demo>

```
<g-tabs :selected.sync="selectedTab">
    <g-tabs-head>
        <g-tabs-item name="set" disabled>
            <g-icon name="setting"></g-icon>Banned using
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
//default:finance
data () {
    return {
        selectedTab: 'finance'
    }
}
```