# 对象与数组

<code>@convue-lib/utils</code> 定义了一组关于对象的方法.

```typescript
import { isContained, deepmerge, deepclone, pick } from '@convue-lib/utils';
```

## 深度克隆

```vue demo
<template>
  <p>{{ deepclone(obj) }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { deepclone } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    return {
      obj: {
        foo: 'bar',
        subobj: {
          foo: 'bar',
        },
      },
      deepclone,
    };
  },
});
</script>
```

## 深度合并

```vue demo
<template>
  <p>{{ deepmerge(obj1, obj2) }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { deepmerge } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    return {
      obj1: {
        foo: 'bar1',
        subobj: {
          foo: 'bar1',
        },
      },
      obj2: {
        subobj: {
          foo: 'bar2',
        },
        subobj2: {
          foo: 'bar3',
        },
      },
      deepmerge,
    };
  },
});
</script>
```

## 提取对象的属性

```vue demo
<template>
  <p>{{ pick(obj, ['foo1', 'foo4']) }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { pick } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    return {
      obj: {
        foo1: 'bar1',
        foo2: 'bar2',
        foo3: 'bar3',
        foo4: 'bar4',
      },
      pick,
    };
  },
});
</script>
```

## 数组中是否包含另一个数组

```vue demo
<template>
  <p>{{ isContained(arr1, arr2) }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { isContained } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    return {
      arr1: [1, 2, 3, 4, 5, 6],
      arr2: [2, 3, 4],
      isContained,
    };
  },
});
</script>
```
