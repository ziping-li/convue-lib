---
title: Text
wrapperClass: md-text
---

# 文本和排版

控制文本大小、对齐、换行、溢出、变形等等，同理这些类可以通过 <code>{property}-{breakfirst}-{value}</code> 格式使用。

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

## 字体宽度

默认情况下, 支持 400, 500, 700, 900 字体宽度.

```vue demo
<template>
  <div>
    <p class="font-400">Normal weight text.</p>
    <p class="font-500">Light weight text.</p>
    <p class="font-700">Medium weight text.</p>
    <p class="font-900">Thin weight text.</p>
  </div>
</template>
```

## 字体样式

默认情况下, 支持 <code>normal</code>, <code>italic</code>, <code>oblique</code> 字体样式.

```vue demo
<template>
  <div>
    <p class="font-normal">Normal text.</p>
    <p class="font-italic">Italic text.</p>
    <p class="font-oblique">Oblique text.</p>
  </div>
</template>
```

## 装饰线

使用 <code>.text-decoration-none</code> 移除文本装饰线或使用 <code>.text-decoration-overline</code>, <code>.text-decoration-underline</code>, 和 <code>.text-decoration-line-through</code> 添加一个 上划线, 下划线或删除线.

```vue demo
<template>
  <div>
    <a href="#" class="text-decoration-none">Non-underlined link</a>
    <div class="text-decoration-line-through">Line-through text</div>
    <div class="text-decoration-overline">Overline text</div>
    <div class="text-decoration-underline">Underline text</div>
  </div>
</template>
```

## 变形

文本 capitalization 类可以转换文字的大小写。

```vue demo
<template>
  <div>
    <p class="text-lowercase">Lowercased text.</p>
    <p class="text-uppercase">Uppercased text.</p>
    <p class="text-capitalize">CapiTaliZed text.</p>
  </div>
</template>
```

## 文本对齐方式

默认情况下, 支持 <code>left</code>, <code>center</code>, <code>right</code> 对齐方式.

```vue demo
<template>
  <div>
    <p class="text-center">Center text.</p>
    <p class="text-left">Left text.</p>
    <p class="text-right">Right text.</p>
  </div>
</template>
```

## 文字溢出显示省略号

通过 <code>.ellipsis</code> 或者 <code>.ellipsis-{number}</code> 设置，其中 number 为显示的行数。

- .ellipsis
- .ellipsis-1
- .ellipsis-2
- .ellipsis-3
- .ellipsis-4
- .ellipsis-5
- .ellipsis-6
- .ellipsis-7
- .ellipsis-8
- .ellipsis-9
- .ellipsis-10
- .ellipsis-11
- .ellipsis-12
- .ellipsis-13
- .ellipsis-14

```vue demo
<template>
  <div style="width: 300px">
    <p class="ellipsis">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem obcaecati consequatur ipsam id
      maiores. Porro fuga quia voluptas impedit culpa, voluptatum assumenda laborum, harum
      voluptatem aliquid facilis enim consequuntur sint.
    </p>

    <p class="ellipsis-2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem obcaecati consequatur ipsam id
      maiores. Porro fuga quia voluptas impedit culpa, voluptatum assumenda laborum, harum
      voluptatem aliquid facilis enim consequuntur sint.
    </p>

    <p class="ellipsis-3">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem obcaecati consequatur ipsam id
      maiores. Porro fuga quia voluptas impedit culpa, voluptatum assumenda laborum, harum
      voluptatem aliquid facilis enim consequuntur sint.
    </p>
  </div>
</template>
```
