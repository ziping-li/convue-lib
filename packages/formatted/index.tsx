import { defineComponent, getCurrentInstance, onMounted, reactive, onBeforeUnmount } from 'vue';
import Cleave from 'cleave.js';
import './index.less';

export default defineComponent({
  name: 'formatted',
  inheritAttrs: false,
  props: {
    modelValue: String,
    options: {
      type: Object,
      default: () => ({
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
      }),
    },
  },
  setup(props, { attrs, emit }) {
    let cleave: any = null;
    const state = reactive({
      formatted: props.modelValue,
    });

    const onValueChanged = (e: any) => {
      cleave.setRawValue(e.target.value);
      const value = cleave.getRawValue();
      emit('update:modelValue', value);
      emit('change', value);
    };

    onMounted(() => {
      cleave = new Cleave(getCurrentInstance()?.vnode.el, {
        ...props.options,
      });
      cleave.setRawValue(props.modelValue);
      state.formatted = cleave.getFormattedValue();
    });

    onBeforeUnmount(() => {
      if (cleave) {
        cleave.destroy();
        cleave = null;
      }
    });

    const { onInput, onChange, ...restAttrs } = attrs;
    return () => (
      <a-input
        {...restAttrs}
        class="a-formatted"
        v-model={[state.formatted, 'value']}
        onChange={onValueChanged}
      ></a-input>
    );
  },
});
