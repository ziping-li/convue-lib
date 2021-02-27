---
title: Float
wrapperClass: md-float
---

# 浮动

使用响应式 float 工具在任何断点上应用自定义浮动。

需要全局引入:

```js
import '@convue-lib/styles';
```

| 代码 | 类型                 | 像素范围 |
| ---- | -------------------- | -------- |
| xs   | 小型手机             | >=0px    |
| sm   | 大型手机到小型平板   | ≥576px   |
| md   | 小型号到中型号的平板 | ≥768px   |
| lg   | 大型号平板到手提电脑 | ≥992px   |
| xl   | 桌面端               | ≥1200px  |
| xxl  | 超宽屏幕             | ≥1600px  |

## 类

轻松切换一个带有类的 float：

```vue demo
<template>
  <div>
    <div class="float-left">Float left on all viewport sizes</div>
    <br />
    <div class="float-right">Float right on all viewport sizes</div>
    <br />
    <div class="float-none">Don't float on all viewport sizes</div>
  </div>
</template>
```

## 响应式

Floats 也可以在每个断点（视图）的基础上适用。

```vue demo
<template>
  <div>
    <div class="float-sm-left">Float left on viewports sized SM (small) or wider</div>
    <br />
    <div class="float-md-left">Float left on viewports sized MD (medium) or wider</div>
    <br />
    <div class="float-lg-left">Float left on viewports sized LG (large) or wider</div>
    <br />
    <div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div>
    <br />
  </div>
</template>
```

以下是所有可用的支持类列表：

- .float-left
- .float-right
- .float-none
- .float-xs-left
- .float-xs-right
- .float-xs-none
- .float-sm-left
- .float-sm-right
- .float-sm-none
- .float-md-left
- .float-md-right
- .float-md-none
- .float-lg-left
- .float-lg-right
- .float-lg-none
- .float-xl-left
- .float-xl-right
- .float-xl-none
- .float-xxl-left
- .float-xxl-right
- .float-xxl-none
