# 电话号码

一个支持国家码的相关 <code>api</code> .

## 获取所有支持呼叫的国家码

通过 <code>getSupportedCallingCodes</code>，会返回一组带 <code>+</code> 号的国家码.

```typescript
import { getSupportedCallingCodes } from '@convue-lib/utils';
```

## 判断是否是合法的电话号码

通过 <code>isPhone</code>，可以判断号码的合法性.

```typescript
import { isPhone } from '@convue-lib/utils';
```

<code>isPhone</code> 第二个参数是国家码与电话的连接符.

```vue demo
<template>
  <p>{{ isPhone(phone1, '') }}</p>
  <p>{{ isPhone(phone2, '') }}</p>
  <p>{{ isPhone(phone3, '-') }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { isPhone } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    return {
      phone1: '+8612345678',
      phone2: '+8613617212221',
      phone3: '+86-13617212221',
      isPhone
    };
  },
});
</script>
```

## 获取号码中的国家码和电话

通过 <code>getPhoneNumber</code>，会返回国家码和电话.

```typescript
import { getPhoneNumber } from '@convue-lib/utils';
```

<code>getPhoneNumber</code> 第二个参数是国家码与电话的连接符，如果电话号码非法，则在 <code>phone</code> 字段中会返回原有值.

```vue demo
<template>
  <p>{{ getPhoneNumber(phone1, '') }}</p>
  <p>{{ getPhoneNumber(phone2, '') }}</p>
  <p>{{ getPhoneNumber(phone3, '-') }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { getPhoneNumber } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    return {
      phone1: '+8612345678',
      phone2: '+8613617212221',
      phone3: '+86-13617212221',
      getPhoneNumber
    };
  },
});
</script>
```

## 表单验证

通过 <code>checkPhone</code>，会返回支持 <code>Ant vue Design</code> 表单的自定义验证函数.

```typescript
import { checkPhone } from '@convue-lib/utils';
```

<code>checkPhone</code> 第一个参数是国家码与电话的连接符.

```vue demo
<template>
  <pre>{{ checkPhone('') }}</pre>
</template>

<script>
import { defineComponent } from 'vue';
import { checkPhone } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    return {
      phone1: '+8612345678',
      checkPhone,
    };
  },
});
</script>
```

