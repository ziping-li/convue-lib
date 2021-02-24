import { defineComponent, ref, PropType, onMounted } from 'vue';
import { dayjs } from '@convue-lib/utils';
import './index.less';

export default defineComponent({
  name: 'otp-send',
  inheritAttrs: false,
  props: {
    initialText: {
      type: String,
      default: '发送验证码',
    },
    disabledText: {
      type: String,
      default: '${time}s 后重新获取',
    },
    callback: {
      type: Function as PropType<() => Promise<any>>,
    },
    cacheKey: {
      type: String,
      default: 'a-otp',
    },
    duration: {
      type: Number,
      default: 60,
    },
  },
  setup(props, { attrs }) {
    const loading = ref(false);
    const time = ref(0);

    // 倒计时
    let timerId: any = null;
    const startTimer = (initialValue: number) => {
      time.value = initialValue;
      timerId = setInterval(() => {
        time.value--;
        if (time.value === 0) {
          clearInterval(timerId);
          timerId = null;
        }
      }, 1000);
    };

    onMounted(() => {
      const cacheTime = getCache();
      if (!cacheTime) return;
      const diff = props.duration - Math.round((dayjs().valueOf() - Number(cacheTime)) / 1000);
      if (diff > 0) {
        startTimer(diff);
      }
    });

    const getCache = () => {
      return window.sessionStorage.getItem(props.cacheKey);
    };

    const setCache = () => {
      window.sessionStorage.setItem(props.cacheKey, String(dayjs().valueOf()));
    };

    const sendOtpCode = async () => {
      try {
        loading.value = true;
        if (props.callback) {
          await props.callback();
        }
        setCache();
        startTimer(props.duration);
        loading.value = false;
      } catch (err) {
        console.log(err);
        loading.value = false;
      }
    };

    return () => (
      <a-button {...attrs} loading={loading.value} disabled={time.value > 0} onClick={sendOtpCode}>
        {time.value > 0
          ? props.disabledText.replace('${time}', time.value.toString())
          : props.initialText}
      </a-button>
    );
  },
});
