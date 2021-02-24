import { defineComponent, Transition, PropType } from 'vue';
import './index.less';

type OTPInputSize = 'small' | 'default' | 'large';

export default defineComponent({
  name: 'otp-input',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    numbers: {
      type: Number,
      default: 6,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    style: {
      type: Object as PropType<CSSStyleDeclaration>,
      default: () => {},
    },
    size: {
      type: String as PropType<OTPInputSize>,
      default: 'default' as OTPInputSize,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      model: this.modelValue.split(''),
    };
  },
  watch: {
    model: {
      handler(val) {
        this.$emit('update:modelValue', val.join(''));
        this.$emit('change', val.join(''));
      },
      deep: true,
    },
  },
  computed: {
    inputs() {
      let arr = [];
      for (let i = 0; i < this.numbers; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.autofocus) {
        this.$refs['input' + this.model.length].focus();
      }
    });
  },
  methods: {
    inputEvent(e: any) {
      e.preventDefault();
      const index = e.target.dataset.index * 1;
      const el = e.target;
      el.value = el.value.replace(/Digit|Numpad/i, '').slice(0, 1);
      this.model[index] = el.value;
    },
    keydown(e: any) {
      e.preventDefault();
      let index = e.target.dataset.index * 1;
      const el = e.target;
      if (e.key === 'Backspace') {
        if (this.model[index].length > 0) {
          this.model[index] = '';
        } else if (el.previousElementSibling) {
          el.previousElementSibling.focus();
          this.model[index - 1] = '';
        }
      } else if (e.key === 'Delete') {
        if (this.model[index].length > 0) {
          this.model[index] = '';
        } else if (el.nextElementSibling) {
          this.model[(index = 1)] = '';
        }
        if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      } else if (e.key === 'Home') {
        el.parentElement.children[0] && el.parentElement.children[0].focus();
      } else if (e.key === 'End') {
        el.parentElement.children[this.model.length - 1] &&
          el.parentElement.children[this.model.length - 1].focus();
      } else if (e.key === 'ArrowLeft') {
        if (el.previousElementSibling) {
          el.previousElementSibling.focus();
        }
      } else if (e.key === 'ArrowRight') {
        if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      } else if (e.key === 'ArrowUp') {
        if (this.model[index] * 1 < 9) {
          this.model[index] = (this.model[index] * 1 + 1).toString();
        }
      } else if (e.key === 'ArrowDown') {
        if (this.model[index] * 1 > 0) {
          this.$set(this.model, index, (this.model[index] * 1 - 1).toString());
        }
      }
    },
    keyup(e: any) {
      e.preventDefault();
      const index = e.target.dataset.index * 1;
      const el = e.target;
      el.value = el.value.replace(/Digit|Numpad/i, '').slice(0, 1);
      if (/Digit|Numpad/i.test(e.code)) {
        this.model[index] = e.code.replace(/Digit|Numpad/i, '');
        el.nextElementSibling && el.nextElementSibling.focus();
        if (index === this.numbers - 1) {
          if (this.model.join('').length === this.numbers) {
            const { activeElement }: any = document;
            activeElement.blur();
          }
        }
      } else if (this.model[index] === '') {
        this.model[index] = '';
      }
    },
    mousewheel(e: any) {
      e.preventDefault();
      const index = e.target.dataset.index;
      if (e.wheelDelta > 0) {
        if (this.model[index] * 1 < 9) {
          this.model[index] = (this.model[index] * 1 + 1).toString();
        }
      } else if (e.wheelDelta < 0) {
        if (this.model[index] * 1 > 0) {
          this.model[index] = (this.model[index] * 1 - 1).toString();
        }
      } else if (e.key === 'Enter') {
        if (this.model.join('').length === this.numbers) {
          const { activeElement }: any = document;
          activeElement.blur();
        }
      }
    },
    paste(e: any) {
      e.preventDefault();
      e.clipboardData.items[0].getAsString((str: any) => {
        if (str.toString().length === this.numbers) {
          this.model = str.split('');
          const { activeElement }: any = document;
          activeElement.blur();
        } else {
          this.model = new Array(this.numbers);
        }
      });
    },
  },
  render() {
    return (
      <div class={{ 'ant-form-item-control': true, 'has-error': this.errorMessage }}>
        <div
          class="input-content"
          onKeydown={this.keydown}
          onKeyup={this.keyup}
          onPaste={this.paste}
          onWheel={this.mousewheel}
          onInput={this.inputEvent}
        >
          {this.inputs.map((_: any, index: any) => {
            return (
              <input
                ref={'input' + index}
                v-model={[this.model[index], ['number', 'trim']]}
                class={this.size}
                style={this.style}
                maxlength={1}
                data-index={index}
                key={index}
                type="number"
              />
            );
          })}
        </div>
        <Transition name="show-help" appear>
          <div v-show={this.errorMessage} class="ant-form-explain">
            {this.errorMessage}
          </div>
        </Transition>
      </div>
    );
  },
});
