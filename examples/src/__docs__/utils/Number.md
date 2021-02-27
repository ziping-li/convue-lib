# 数字

数字相关的函数并未单独处理，直接将 <code>numeral</code> 作为全局属性暴露.

```typescript
import { numeral } from '@convue-lib/utils';
```

当然，作为业务开发，肯定会有一组关于业务相关的处理方式，这时候就可以再次封装一些公共的方法.
