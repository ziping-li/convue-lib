---
title: Flex
wrapperClass: md-flex
---

# 弹性布局

使用响应的 flexbox 实用程序通过对齐、排列等方式控制 flex 容器的布局, 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称”项目”。

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

## 启用 flexbox

使用 <code>flex-direction: column</code> 工具类, 你可以将任何元素转换为 <code>flexbox</code> 容器并将该元素的子元素转成 flex 元素. 使用附加的 flex 属性工具类，您可以进一步定制它们的交互。

```vue demo
<template>
  <div class="border d-flex">I'm a flexbox container!</div>
</template>
```

```vue demo
<template>
  <div class="border d-inline-flex">I'm an inline flexbox container!</div>
</template>
```

您还可以基于各种断点应用自定义的 <code>flex</code> 工具类。

- .d-flex
- .d-inline-flex
- .d-xs-flex
- .d-xs-inline-flex
- .d-sm-flex
- .d-sm-inline-flex
- .d-md-flex
- .d-md-inline-flex
- .d-lg-flex
- .d-lg-inline-flex
- .d-xl-flex
- .d-xl-inline-flex
- .d-xxl-flex
- .d-xxl-inline-flex

## Flex (主轴) 方向

默认情况下, <code>d-flex</code> 应用于 <code>flex-direction: row</code> 并且一般可以省略。 但是，在某些情况下，您可能需要显式地定义它。

```vue demo
<template>
  <div class="d-flex direction-row">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>

  <div class="d-flex direction-row-reverse">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>
</template>
```

<code>column</code> 和 <code>column-reverse</code> 工具类可以用于改变 <code>flexbox</code> 容器的方向. 请注意, IE11 和 Safari 可能存在列方向的问题.

```vue demo
<template>
  <div class="d-flex direction-column">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>

  <div class="d-flex direction-column-reverse">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>
</template>
```

<code>flex-direction</code> 也有响应式变化。

- .direction-row
- .direction-row-reverse
- .direction-column
- .direction-column-reverse
- .direction-xs-row
- .direction-xs-row-reverse
- .direction-xs-column
- .direction-xs-column-reverse
- .direction-sm-row
- .direction-sm-row-reverse
- .direction-sm-column
- .direction-sm-column-reverse
- .direction-md-row
- .direction-md-row-reverse
- .direction-md-column
- .direction-md-column-reverse
- .direction-lg-row
- .direction-lg-row-reverse
- .direction-lg-column
- .direction-lg-column-reverse
- .direction-xl-row
- .direction-xl-row-reverse
- .direction-xl-column
- .direction-xl-column-reverse
- .direction-xxl-row
- .direction-xxl-row-reverse
- .direction-xxl-column
- .direction-xxl-column-reverse

## Flex 横轴对齐

可以通过 flex 的 justify 类改变 <code>justify-content</code> 设置. 默认情况下, 这将修改 x 轴 上的 flex 项目, 但是当使用 <code>flex-direction: column</code> 时将被反转从而修改 y 轴. 从 <code>flex-start</code> (浏览器默认), <code>flex-end</code>, <code>center</code>, <code>space-between</code>, 或 <code>space-acound</code> 选择一个值.

```vue demo
<template>
  <div class="d-flex justify-flex-start">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>

  <div class="d-flex justify-flex-end">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>

  <div class="d-flex justify-center">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>

  <div class="d-flex justify-space-between">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>

  <div class="d-flex justify-space-around">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
  </div>
</template>
```

<code>justify-content</code> 同样也有一些弹性变量.

- .justify-flex-start
- .justify-flex-end
- .justify-center
- .justify-space-between
- .justify-space-around
- .justify-xs-flex-start
- .justify-xs-flex-end
- .justify-xs-center
- .justify-xs-space-between
- .justify-xs-space-around
- .justify-sm-flex-start
- .justify-sm-flex-end
- .justify-sm-center
- .justify-sm-space-between
- .justify-sm-space-around
- .justify-md-flex-start
- .justify-md-flex-end
- .justify-md-center
- .justify-md-space-between
- .justify-md-space-around
- .justify-lg-flex-start
- .justify-lg-flex-end
- .justify-lg-center
- .justify-lg-space-between
- .justify-lg-space-around
- .justify-xl-flex-start
- .justify-xl-flex-end
- .justify-xl-center
- .justify-xl-space-between
- .justify-xl-space-around
- .justify-xxl-flex-start
- .justify-xxl-flex-end
- .justify-xxl-center
- .justify-xxl-space-between
- .justify-xxl-space-around

## Flex 纵轴对齐

可以通过 <code>flex</code> 的 <code>align</code> 类改变 <code>align-items</code> 设置. 默认情况下, 这将修改 y 轴 上的 <code>flex</code> 项目, 但是当使用 <code>flex-direction: column</code> 时将被反转从而修改 x 轴. 从 <code>flex-start</code> , <code>flex-end</code>, <code>center</code>, <code>baseline</code>, 或 <code>stretch</code>(浏览器默认) 选择一个值.

```vue demo
<template>
  <div class="align">
    <div class="d-flex align-flex-start">
      <div>Flex item 1</div>
      <div>Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex align-flex-end">
      <div>Flex item 1</div>
      <div>Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex align-center">
      <div>Flex item 1</div>
      <div>Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex align-baseline">
      <div>Flex item 1</div>
      <div>Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex align-stretch">
      <div>Flex item 1</div>
      <div>Flex item 2</div>
      <div>Flex item 3</div>
    </div>
  </div>
</template>
```

<code>align-items</code> 同样也有一些弹性变量.

- .align-flex-start
- .align-flex-end
- .align-center
- .align-baseline
- .align-stretch
- .align-xs-flex-start
- .align-xs-flex-end
- .align-xs-center
- .align-xs-baseline
- .align-xs-stretch
- .align-sm-flex-start
- .align-sm-flex-end
- .align-sm-center
- .align-sm-baseline
- .align-sm-stretch
- .align-md-flex-start
- .align-md-flex-end
- .align-md-center
- .align-md-baseline
- .align-md-stretch
- .align-lg-flex-start
- .align-lg-flex-end
- .align-lg-center
- .align-lg-baseline
- .align-lg-stretch
- .align-xl-flex-start
- .align-xl-flex-end
- .align-xl-center
- .align-xl-baseline
- .align-xl-stretch
- .align-xxl-flex-start
- .align-xxl-flex-end
- .align-xxl-center
- .align-xxl-baseline
- .align-xxl-stretch

## Flex 自身对齐

可以通过 <code>flex</code> 的 <code>align-self</code> 类改变 <code>align-self</code> 设置. 默认情况下, 这将修改 x 轴 上的 flex 项目, 但是当使用 <code>flex-direction: column</code> 时将被反转从而修改 y 轴. 从 <code>flex-start</code> , <code>flex-end</code>, <code>center</code>, <code>baseline</code>, 或 <code>stretch</code>(浏览器默认) 选择一个值.

```vue demo
<template>
  <div class="align">
    <div class="d-flex">
      <div>Flex item 1</div>
      <div class="align-self-flex-start">Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex">
      <div>Flex item 1</div>
      <div class="align-self-flex-end">Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex">
      <div>Flex item 1</div>
      <div class="align-self-center">Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex">
      <div>Flex item 1</div>
      <div class="align-self-baseline">Flex item 2</div>
      <div>Flex item 3</div>
    </div>

    <div class="d-flex">
      <div>Flex item 1</div>
      <div class="align-self-stretch">Flex item 2</div>
      <div>Flex item 3</div>
    </div>
  </div>
</template>
```

<code>align-self</code> 同样也有一些弹性变量.

- .align-self-flex-start
- .align-self-flex-end
- .align-self-center
- .align-self-baseline
- .align-self-stretch
- .align-self-xs-flex-start
- .align-self-xs-flex-end
- .align-self-xs-center
- .align-self-xs-baseline
- .align-self-xs-stretch
- .align-self-sm-flex-start
- .align-self-sm-flex-end
- .align-self-sm-center
- .align-self-sm-baseline
- .align-self-sm-stretch
- .align-self-md-flex-start
- .align-self-md-flex-end
- .align-self-md-center
- .align-self-md-baseline
- .align-self-md-stretch
- .align-self-lg-flex-start
- .align-self-lg-flex-end
- .align-self-lg-center
- .align-self-lg-baseline
- .align-self-lg-stretch
- .align-self-xl-flex-start
- .align-self-xl-flex-end
- .align-self-xl-center
- .align-self-xl-baseline
- .align-self-xl-stretch
- .align-self-xxl-flex-start
- .align-self-xxl-flex-end
- .align-self-xxl-center
- .align-self-xxl-baseline
- .align-self-xxl-stretch

## Flex 换行

默认情况下 <code>.d-flex</code> 不提供任何包装(其行为类似于 <code>flex-wrap：nowrap</code>)。 这可以通过使用 <code>flex-{condition}</code> 格式的 <code>flex-wrap</code> 辅助类进行修改, condition 的值可以为 <code>nowrap</code>, <code>wrap</code> 或 <code>wrap-reverse</code>.

```vue demo
<template>
  <div class="align">
    <div class="d-flex wrap-nowrap">
      <div v-for="item in 20">Flex item {{ item }}</div>
    </div>
    <div class="d-flex wrap-wrap">
      <div v-for="item in 20">Flex item {{ item }}</div>
    </div>
    <div class="d-flex wrap-wrap-reverse">
      <div v-for="item in 20">Flex item {{ item }}</div>
    </div>
  </div>
</template>
```

<code>flex-wrap</code> 同样也有一些弹性变量.

- .wrap-nowrap
- .wrap-wrap
- .wrap-wrap-reverse
- .wrap-xs-nowrap
- .wrap-xs-wrap
- .wrap-xs-wrap-reverse
- .wrap-sm-nowrap
- .wrap-sm-wrap
- .wrap-sm-wrap-reverse
- .wrap-md-nowrap
- .wrap-md-wrap
- .wrap-md-wrap-reverse
- .wrap-lg-nowrap
- .wrap-lg-wrap
- .wrap-lg-wrap-reverse
- .wrap-xl-nowrap
- .wrap-xl-wrap
- .wrap-xl-wrap-reverse
- .wrap-xxl-nowrap
- .wrap-xxl-wrap
- .wrap-xxl-wrap-reverse

## Flex 排序

您可以使用 <code>order</code> 工具类改变 <code>flex</code> 项目的视觉排序.

```vue demo
<template>
  <div class="d-flex">
    <div class="order-3">Flex item 1</div>
    <div class="order-2">Flex item 2</div>
    <div class="order-1">Flex item 3</div>
  </div>
</template>
```

<code>order</code> 同样也有一些弹性变量.

- .order-0
- .order-1
- .order-2
- .order-3
- .order-4
- .order-5
- .order-6
- .order-7
- .order-8
- .order-9
- .order-10
- .order-11
- .order-12
- .order-13
- .order-14
- .order-xs-0
- .order-xs-1
- .order-xs-2
- .order-xs-3
- .order-xs-4
- .order-xs-5
- .order-xs-6
- .order-xs-7
- .order-xs-8
- .order-xs-9
- .order-xs-10
- .order-xs-11
- .order-xs-12
- .order-xs-13
- .order-xs-14
- .order-sm-0
- .order-sm-1
- .order-sm-2
- .order-sm-3
- .order-sm-4
- .order-sm-5
- .order-sm-6
- .order-sm-7
- .order-sm-8
- .order-sm-9
- .order-sm-10
- .order-sm-11
- .order-sm-12
- .order-sm-13
- .order-sm-14
- .order-md-0
- .order-md-1
- .order-md-2
- .order-md-3
- .order-md-4
- .order-md-5
- .order-md-6
- .order-md-7
- .order-md-8
- .order-md-9
- .order-md-10
- .order-md-11
- .order-md-12
- .order-md-13
- .order-md-14
- .order-lg-0
- .order-lg-1
- .order-lg-2
- .order-lg-3
- .order-lg-4
- .order-lg-5
- .order-lg-6
- .order-lg-7
- .order-lg-8
- .order-lg-9
- .order-lg-10
- .order-lg-11
- .order-lg-12
- .order-lg-13
- .order-lg-14
- .order-xl-0
- .order-xl-1
- .order-xl-2
- .order-xl-3
- .order-xl-4
- .order-xl-5
- .order-xl-6
- .order-xl-7
- .order-xl-8
- .order-xl-9
- .order-xl-10
- .order-xl-11
- .order-xl-12
- .order-xl-13
- .order-xl-14
- .order-xxl-0
- .order-xxl-1
- .order-xxl-2
- .order-xxl-3
- .order-xxl-4
- .order-xxl-5
- .order-xxl-6
- .order-xxl-7
- .order-xxl-8
- .order-xxl-9
- .order-xxl-10
- .order-xxl-11
- .order-xxl-12
- .order-xxl-13
- .order-xxl-14

## Flex 增长系数和收缩系数

antd-vue-wrapper 有用于手动应用增长和收缩系数的辅助类. 通过添加 <code>{condition}-{value}</code> 格式的辅助类来使用. <code>condition</code> 可以是 <code>grow</code> 或 <code>shrink</code> 两者之一, value可以是 0 或 1 两者之一. <code>grow</code> 将允许元素增长以填充可用的空间, 然而 <code>shrink</code> 将允许项目收缩到它的内容所需要的空间. 但是，只有当项目必须收缩以适合其容器时才会发生这种情况，例如容器大小调整或受到 <code>grow-1</code> 的影响。 值0将阻止该条件的发生，而1则允许出现这种情况。 以下类可用：

- grow-0
- grow-1
- shrink-0
- shrink-1

```vue demo
<template>
  <div class="d-flex wrap-nowrap">
    <div class="grow-0 shrink-0">Flex item 1</div>
    <div class="grow-1 shrink-0">Flex item 2</div>
    <div class="grow-0 shrink-1">Flex item 3</div>
  </div>
</template>
```

这些辅助类同样可以基于断点以 <code>{condition}-{breakpoint}-{state}</code> 的格式创建更多的弹性变量. 以下组合可用：

- grow-xs-0
- grow-sm-0
- grow-md-0
- grow-lg-0
- grow-xl-0
- grow-xxl-0
- grow-xs-1
- grow-sm-1
- grow-md-1
- grow-lg-1
- grow-xl-1
- grow-xxl-1
- shrink-xs-0
- shrink-sm-0
- shrink-md-0
- shrink-lg-0
- shrink-xl-0
- shrink-xxl-0
- shrink-xs-1
- shrink-sm-1
- shrink-md-1
- shrink-lg-1
- shrink-xl-1
- shrink-xxl-1

同时我们支持 <code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code> 的简写, <code>flex-none(0 0 auto)</code>、<code>flex-auto(1 1 auto)</code> 和 <code>flex-1(1 0 auto)</code>.

- flex-none
- flex-auto
- flex-1
- flex-xs-none
- flex-xs-auto
- flex-xs-1
- flex-sm-none
- flex-sm-auto
- flex-sm-1
- flex-md-none
- flex-md-auto
- flex-md-1
- flex-lg-none
- flex-lg-auto
- flex-lg-1
- flex-xl-none
- flex-xl-auto
- flex-xl-1
- flex-xxl-none
- flex-xxl-auto
- flex-xxl-1
