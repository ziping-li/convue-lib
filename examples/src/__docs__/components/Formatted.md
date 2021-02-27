# Formatted 格式化输入

将输入格式化显示，方便用户快速输入想要的内容.

```js
import Formatted from '@convue-lib/formatted';
```

## 基本用法

默认格式化为金额千分位现实.

```vue demo
<template>
  <Formatted v-model="currency" @change="onChange"></Formatted>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Formatted from '@convue-lib/formatted';

export default defineComponent({
  components: {
    Formatted
  },
  setup() {
    const currency = ref('');

    const onChange = (val) => {
      console.log(val);
    };

    return {
      currency,
      onChange,
    };
  },
});
</script>
```

## 日期格式化

修改 <code>options</code> 属性，可以修改格式化方式，具体参考 [cleave.js](https://nosir.github.io/cleave.js/).

```vue demo
<template>
  <Formatted
    v-model="date"
    :options="{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }"
  ></Formatted>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Formatted from '@convue-lib/formatted';

export default defineComponent({
  components: {
    Formatted
  },
  setup() {
    const date = ref('');
    return {
      date,
    };
  },
});
</script>
```

## 属性

| 参数           | 说明               | 类型                | 默认值                                                               |
| -------------- | ------------------ | ------------------- | -------------------------------------------------------------------- |
| value(v-model) | <p>输入框内容 </p> | <span>string</span> | -                                                                    |
| options        | <p>格式化配置</p>  | <span>object</span> | <code>{numeral: true, numeralThousandsGroupStyle:'thousand' }</code> |

## 事件

| 名称   | 说明                          | 回调参数                     |
| ------ | ----------------------------- | ---------------------------- |
| change | <p>输入框内容变化时的回调</p> | <span>function(value)</span> |
