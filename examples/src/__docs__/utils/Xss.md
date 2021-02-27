# 安全过滤

<code>v-html</code> 指令使用的是 <code>innerHTML</code> 插入的，因此非信任的内容有可能就带来脚本注入问题，<code>@convue-lib/utils</code> 直接使用了 <code>xss.js</code> 将其过滤.

```typescript
import { xss } from '@convue-lib/utils';
```
