import { defineComponent, reactive, watch } from 'vue';
import { getSupportedCallingCodes, getPhoneNumber } from '@convue-lib/utils';
import styleInject from 'style-inject';
import css from './index.less';

styleInject(css);

export default defineComponent({
  name: 'Phone',
  inheritAttrs: false,
  props: {
    separator: {
      type: String,
      default: '',
    },
    modelValue: String,
    showCode: {
      type: Boolean,
      default: true,
    },
    defaultCode: {
      type: String,
      default: '+86',
    },
  },
  emits: {
    'update:modelValue': null,
    change: null,
  },
  setup(props, { attrs, emit }) {
    const codes = getSupportedCallingCodes();
    const getCurrentNumber = () => {
      if (!props.showCode) {
        return {
          code: '',
          phone: props.modelValue,
        };
      } else {
        return getPhoneNumber(props.modelValue, props.separator, props.defaultCode);
      }
    };

    const state = reactive(getCurrentNumber());

    const onChange = () => {
      const currentValue = state.code + props.separator + state.phone;
      emit('update:modelValue', currentValue);
      emit('change', currentValue);
    };

    watch(state, () => {
      onChange();
    });

    const { onInput, value, ...restAttrs } = attrs;
    delete restAttrs['onUpdate:value'];
    const bindValues = { ...restAttrs, onChange };

    return () => (
      <a-input
        {...bindValues}
        class="convue-phone"
        v-model={[state.phone, 'value']}
        v-slots={{
          addonBefore: () => {
            return (
              props.showCode && (
                <a-select v-model={[state.code, 'value']} style={{ width: '70px' }}>
                  {codes.map((item) => {
                    return (
                      <a-select-option key={item} value={item}>
                        {item}
                      </a-select-option>
                    );
                  })}
                </a-select>
              )
            );
          },
        }}
      ></a-input>
    );
  },
});
