# OtpInput 输入验证码

用于一组数字验证码的输入.

```js
import OtpInput from '@convue-lib/otp-input';
```

## 基本用法

默认为 6 位数字输入框.

```vue demo
<template>
  <OtpInput v-model.value="value"></OtpInput>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');

    return {
      value,
    };
  },
});
</script>
```

## 自动聚焦

通过设置 <code>autofocus</code> 属性可以让输入框自动聚焦，会聚焦到最先没有默认值的输入框.

```vue demo
<template>
  <OtpInput v-model.value="value" autofocus></OtpInput>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('12');

    return {
      value,
    };
  },
});
</script>
```

## 输入框个数

通过设置 <code>numbers</code> 属性可以修改输入框个数.

```vue demo
<template>
  <OtpInput v-model.value="value1" :numbers="4"></OtpInput>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');

    return {
      value1,
    };
  },
});
</script>
```

## 尺寸

通过设置 <code>size</code> 属性可以修改输入框的尺寸， <code>OtpInput</code> 有三种尺寸 <code>small</code>, <code>default</code>, <code>large</code> ，与 <code>Ant Vue Design</code> 的 <code>a-input</code> 对应.

```vue demo
<template>
  <OtpInput v-model.value="value" size="small"></OtpInput>
  <OtpInput v-model.value="value" size="default"></OtpInput>
  <OtpInput v-model.value="value" size="large"></OtpInput>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');

    return {
      value,
    };
  },
});
</script>
```

## 自定义样式

传入 <code>style</code> 属性可以修改输入框样式.

```vue demo
<template>
  <OtpInput v-model.value="value1" :style="{ border: '1px solid #ddd' }"></OtpInput>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');

    return {
      value1,
    };
  },
});
</script>
```

## 验证

传入 <code>error-message</code> 属性，输入框会显示错误信息提示. 如果传 '' 或者不传则不显示.

```vue demo
<template>
  <OtpInput v-model.value1="value" :error-message="errorMessage"></OtpInput>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const errorMessage = '无效的验证码';

    return {
      value1,
      errorMessage,
    };
  },
});
</script>
```

## 属性

| 参数           | 说明                | 类型                                   | 默认值                |
| -------------- | ------------------- | -------------------------------------- | --------------------- |
| value(v-model) | <p>输入框内容 </p>  | <span>string</span>                    | -                     |
| numbers        | <p>输入框的个数</p> | <span>number</span>                    | <code>6</code>        |
| autofocus      | <p>是否自动聚焦</p> | <span>boolean </span>                  | <code>false</code>    |
| size           | <p>尺寸</p>         | <span>small \| default \| large</span> | <code>default</code>  |
| style          | <p>自定义样式</p>   | <span>CSSStyleDeclaration</span>       | <code>() => {}</code> |
| errorMessage   | <p>错误信息</p>     | <span>string</span>                    | <code>''</code>       |

## 事件

| 名称   | 说明                          | 回调参数                     |
| ------ | ----------------------------- | ---------------------------- |
| change | <p>输入框内容变化时的回调</p> | <span>function(value)</span> |
