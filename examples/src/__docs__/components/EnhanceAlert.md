# EnhanceAlert 警告提示

<code>enhance-alert</code> 在 <code>Ant Design Vue</code> 的 <code>a-alert</code>> 的基础上增加了 <code>default slot</code>，并保留了 <code>a-alert</code> 原有的属性，查看更多设置参考 [a-alert](https://2x.antdv.com/components/alert-cn).

```js
import EnhanceAlert from '@convue-lib/enhance-alert';
```

# 基本用法

没有 description 的显示.

```vue demo
<template>
  <EnhanceAlert message="Informational Notes" type="info" show-icon>
    <a-button type="primary">Link</a-button>
  </EnhanceAlert>
</template>
```

# 描述

带有有 description 的显示.

```vue demo
<template>
  <EnhanceAlert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    show-icon
  >
    <a-button type="primary">Link</a-button>
  </EnhanceAlert>
</template>
```

# 定位

通过修改 <code>position</code> 属性修改定位.

```vue demo
<template>
  <EnhanceAlert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    show-icon
    position="right"
  >
    <a-button type="primary">Link</a-button>
  </EnhanceAlert>
</template>
```

## 属性

| 参数     | 说明                        | 类型                         | 默认值              |
| -------- | --------------------------- | ---------------------------- | ------------------- |
| position | <p>default slot 的定位 </p> | <span>bottom \| right</span> | <code>bottom</code> |

## 插槽

| 名称    | 描述                   |
| ------- | ---------------------- |
| default | <p>默认 Vue 插槽。</p> |
