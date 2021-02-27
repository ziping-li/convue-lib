## 查询当前断点

通过方法 <code>queryMedia</code> 查询当前断点信息， <code>queryMedia</code> 需要传入一个回调函数，回调函数的参数即是当前的断点代码.

```js
import { queryMedia } from '@convue-lib/utils';
```

```vue demo
<template>
  <div>当前断点：{{ currentBreakpoint }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { queryMedia } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    const currentBreakpoint = ref('');
    queryMedia((data) => {
      currentBreakpoint.value = data;
    });

    return {
      currentBreakpoint,
    };
  },
});
</script>
```
