# Phone 电话

用于电话号码的输入. <code>Phone</code> 完全继承了 <code>a-input</code> 的属性和事件，可以通过 [a-input](https://2x.antdv.com/components/input-cn) 查看更多选项.

```js
import Phone from '@convue-lib/phone';
```

## 基本用法

默认带有国家码选择，默认选中 <code>+86</code> .

```vue demo
<template>
  <Phone v-model.value="value"></Phone>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Phone from '@convue-lib/phone';

export default defineComponent({
  components: {
    Phone,
  },
  setup() {
    const value = ref('');

    return {
      value,
    };
  },
});
</script>
```

## 默认值

```vue demo
<template>
  <Phone v-model.value="value"></Phone>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Phone from '@convue-lib/phone';

export default defineComponent({
  components: {
    Phone,
  },
  setup() {
    const value = ref('+8613617322222');

    return {
      value,
    };
  },
});
</script>
```

## 改变默认 code

设置属性 <code>default-code</code> 可以改变默认选中的国家码.

```vue demo
<template>
  <Phone v-model.value="value" default-code="+1"></Phone>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Phone from '@convue-lib/phone';

export default defineComponent({
  components: {
    Phone,
  },
  setup() {
    const value = ref('');

    return {
      value,
    };
  },
});
</script>
```

## 设置连接符

设置属性 <code>separator</code> 可以改变国家码与电话之间的连接符.

```vue demo
<template>
  <Phone v-model.value="value" separator="-" @change="onChange"></Phone>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Phone from '@convue-lib/phone';

export default defineComponent({
  components: {
    Phone,
  },
  setup() {
    const value = ref('');

    const onChange = (val) => {
      console.log(val);
    };

    return {
      value,
      onChange,
    };
  },
});
</script>
```

## 不需要国家码

设置属性 <code>show-code</code> 可以切换国家码选择的显示.

```vue demo
<template>
  <Phone v-model.value="value" :show-code="false" @change="onChange"></Phone>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Phone from '@convue-lib/phone';

export default defineComponent({
  components: {
    Phone,
  },
  setup() {
    const value = ref('');

    const onChange = (val) => {
      console.log(val);
    };

    return {
      value,
      onChange,
    };
  },
});
</script>
```

## 表单验证

通过 <code>$checkPhone</code> 工具方法可以验证号码的有效性.

```vue demo
<template>
  <a-form ref="formRef" :model="formState" :rules="rules">
    <a-form-item name="phone">
      <Phone v-model.value="formState.phone"></Phone>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent, getCurrentInstance, ref, reactive, computed } from 'vue';
import Phone from '@convue-lib/phone';
import { checkPhone } from '@convue-lib/utils';

export default defineComponent({
  components: {
    Phone,
  },
  setup() {
    const formRef = ref();
    const formState = reactive({
      phone: '',
    });
    
    const rules = {
      phone: [{ validator: checkPhone(), trigger: 'change' }],
    };

    return {
      formRef,
      formState,
      rules,
    };
  },
});
</script>
```

## 属性

| 参数           | 说明                        | 类型                 | 默认值            |
| -------------- | --------------------------- | -------------------- | ----------------- |
| value(v-model) | <p>输入框内容 </p>          | <span>string</span>  | -                 |
| separator      | <p>国家码与电话的连接符</p> | <span>string</span>  | <code>''</code>   |
| defaultCode    | <p>默认选中的国家码</p>     | <span>string </span> | <code>+86</code>  |
| showCode       | <p>是否显示国家码</p>       | <span>boolean</span> | <code>true</code> |

## 事件

| 名称   | 说明                          | 回调参数                     |
| ------ | ----------------------------- | ---------------------------- |
| change | <p>输入框内容变化时的回调</p> | <span>function(value)</span> |
