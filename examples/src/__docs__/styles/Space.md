---
title: Space
wrapperClass: md-space
---

# 间距

不通过创建新类的方式来更新您的布局. 间距辅助类在修改元素的 padding 和 margin 时非常有用.

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

使用 playground 来了解不同的辅助类能做些什么. 要了解 他们如何工作，请参阅下面的部分。

## 如何运行

辅助类应用到元素的 margin 或 padding 范围是从 0 到 14. 每个尺寸增量都为 4px. 这些类可以通过 <code>{property}{direction}-{size}</code> 格式使用。

**property** 应用间距类型:

- <code>m</code> - 应用 <code>margin</code>
- <code>p</code> - 应用 <code>padding</code>

**direction** 指定了该属性所应用的侧边:

- <code>t</code> - 应用 <code>margin-top</code> 和 <code>padding-top</code> 的间距
- <code>b</code> - 应用 <code>margin-bottom</code> 和 <code>padding-bottom</code> 的间距
- <code>l</code> - 应用 <code>margin-left</code> 和 <code>padding-left</code> 的间距
- <code>r</code> - 应用 <code>margin-right</code> 和 <code>padding-right</code> 的间距
- <code>x</code> - 应用 <code>{property}-left</code> 和 <code>{property}-right</code> 的间距
- <code>y</code> - 应用 <code>{property}-top</code> 和 <code>{property}-bottom</code> 的间距

**size** 以4px增量控制间距属性:

- 0 - 通过设置为 0 来消除所有 margin 或 padding.
- 1 - 设置 margin 或 padding 为 4px
- 2 - 设置 margin 或 padding 为 8px
- 3 - 设置 margin 或 padding 为 12px
- 4 - 设置 margin 或 padding 为 16px
- 5 - 设置 margin 或 padding 为 20px
- 6 - 设置 margin 或 padding 为 24px
- 7 - 设置 margin 或 padding 为 28px
- 8 - 设置 margin 或 padding 为 32px
- 9 - 设置 margin 或 padding 为 36px
- 10 - 设置 margin 或 padding 为 40px
- 11 - 设置 margin 或 padding 为 44px
- 12 - 设置 margin 或 padding 为 48px
- 13 - 设置 margin 或 padding 为 52px
- 14 - 设置 margin 或 padding 为 56px
- auto - 设置间距为 auto

