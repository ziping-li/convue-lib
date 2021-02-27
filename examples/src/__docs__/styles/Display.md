---
title: Display
wrapperClass: md-display
---

# 辅助显示

显示辅助器允许你控制内容的显示。 可以根据当前视图或实际元素显示类型有条件地显示内容。

需要全局引入:

```js
import '@convue-lib/styles';
```

| 代码 | 类型                 | 像素范围 |
| ---- | -------------------- | -------- |
| xs   | 小型手机             | >=0px   |
| sm   | 大型手机到小型平板   | ≥576px   |
| md   | 小型号到中型号的平板 | ≥768px   |
| lg   | 大型号平板到手提电脑 | ≥992px   |
| xl   | 桌面端               | ≥1200px  |
| xxl  | 超宽屏幕             | ≥1600px  |


## 显示

指定元素的 display 属性。 这些类可以应用于从 xs 到 xxl 的所有断点。 当使用基础类时，<code>.d-{value}</code>。

- <code>.d-{value}</code> 用于所有
- <code>.d-{breakpoint}-{value}</code> 用于 xs, sm, md, lg, xl 和 xxl

该 value 属性的值是以下之一：

- none
- inline
- inline-block
- block
- table
- table-cell
- table-row
- flex
- inline-flex

```vue demo
<template>
  <div>
    <div class="d-inline">
      d-inline
    </div>
    <div class="d-inline">
      d-inline
    </div>
  </div>
</template>
```

```vue demo
<template>
  <div>
    <div class="d-block">
      d-block
    </div>
    <div class="d-block">
      d-block
    </div>
  </div>
</template>
```

