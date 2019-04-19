---
title: Container 布局
---

# Container 布局

### 三栏布局

---

<container-demo-a></container-demo-a>

---
```
<g-layout class="container">
    <g-header class="header">header</g-header>
    <g-layout>
        <g-slide class="slide">Slide</g-slide>
        <g-content>content</g-content>
    </g-layout>
    <g-footer class="footer">footer</g-footer>
</g-layout>
```

### 三栏布局（侧边栏与主栏分离）

---
<container-demo-c></container-demo-c>

---
```
<g-layout class="container">
    <g-slide class="slide">Slide</g-slide>
    <g-layout>
        <g-header class="header">header</g-header>
        <g-content class="main">content</g-content>
        <g-footer class="footer">footer</g-footer>
    </g-layout>           
</g-layout>
```

### 经典上中下布局

---

<container-demo-b></container-demo-b>

---
```
<g-layout class="container">
    <g-header class="header">header</g-header>
    <g-content class="main">content</g-content>
    <g-footer class="footer">footer</g-footer>
</g-layout>
```
