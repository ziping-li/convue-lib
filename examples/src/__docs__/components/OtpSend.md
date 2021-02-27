# OtpSend 发送验证码

用于短信验证码或者邮箱验证码的发送. <code>OtpSend</code> 完全继承了 <code>a-button</code> 的属性和事件，可以通过 [a-button](https://2x.antdv.com/components/button-cn) 查看更多选项.

```js
import OtpSend from '@convue-lib/otp-send';
```

## 基本用法

通常 <code>callback</code> 是一个发送请求的函数.

```vue demo
<template>
  <OtpSend :callback="callback"></OtpSend>
</template>

<script>
import { defineComponent, ref } from 'vue';
import OtpSend from '@convue-lib/otp-send';

export default defineComponent({
  components: {
    OtpSend,
  },
  setup() {
    const callback = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    };

    return {
      callback,
    };
  },
});
</script>
```

## 修改文案

通过修改 <code>initial-text</code> 设置按钮的初始文案. <code>disabled-text</code> 设置禁用时的文案.

其中 <code>disabled-text</code> 中的 <code>${time}</code> 代表倒计时的时间计数.

```vue demo
<template>
  <OtpSend :callback="callback" initial-text="发送" disabled-text="${time} 秒"></OtpSend>
</template>

<script>
import { defineComponent, ref } from 'vue';
import OtpSend from '@convue-lib/otp-send';

export default defineComponent({
  components: {
    OtpSend
  },
  setup() {
    const callback = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    };

    return {
      callback,
    };
  },
});
</script>
```

## 设置缓存

通过修改 <code>cache-key</code> 设置发送时间的缓存.

```vue demo
<template>
  <OtpSend :callback="callback" cache-key="a-register-otp"></OtpSend>
</template>

<script>
import { defineComponent, ref } from 'vue';
import OtpSend from '@convue-lib/otp-send';

export default defineComponent({
  components: {
    OtpSend
  },
  setup() {
    const callback = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    };

    return {
      callback,
    };
  },
});
</script>
```

## 设置禁用时长

通过修改 <code>duration</code> 设置禁用时长.

```vue demo
<template>
  <OtpSend :callback="callback" :duration="90" cache-key="a-login-otp"></OtpSend>
</template>

<script>
import { defineComponent, ref } from 'vue';
import OtpSend from '@convue-lib/otp-send';

export default defineComponent({
  components: {
    OtpSend
  },
  setup() {
    const callback = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    };

    return {
      callback,
    };
  },
});
</script>
```

## 属性

| 参数         | 说明                      | 类型                              | 默认值                           |
| ------------ | ------------------------- | --------------------------------- | -------------------------------- |
| initialText  | <p>按钮的初始文案 </p>    | <span>string</span>               | <code>发送验证码</code>          |
| disabledText | <p>按钮禁用时的文案</p>   | <span>string</span>               | <code>${time}s 后重新获取</code> |
| callback     | <p>点击按钮的回调函数</p> | <span>function\<Promise\> </span> | <code>function()</code>          |
| cacheKey     | <p>设置缓存的 key</p>     | <span>string</span>               | <code>a-otp</code>               |
| duration     | <p>禁用的时长</p>         | <span>number</span>               | <code>60</code>                  |
