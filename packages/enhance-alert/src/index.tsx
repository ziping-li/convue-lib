import {
  createVNode,
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUpdated,
  render,
  PropType,
} from 'vue';
import styleInject from 'style-inject';
import css from './index.less';

styleInject(css);

type EnhanceAlertPosition = 'bottom' | 'right';

export default defineComponent({
  name: 'EnhanceAlert',
  props: {
    position: {
      type: String as PropType<EnhanceAlertPosition>,
      default: 'bottom' as EnhanceAlertPosition,
    },
  },
  setup(props, { attrs, slots }) {
    const appendAction = () => {
      const app = getCurrentInstance();
      if (slots.default) {
        const action = app?.vnode?.el?.querySelector('.convuea-alert-actions');
        if (action) {
          action.parentElement.removeChild(action);
        }

        const container = document.createElement('div');
        container.className = `convue-alert-actions`;

        const vnodes = slots.default?.();
        const vms = vnodes.map((vnode) => createVNode(vnode));
        vms.forEach((vm) => {
          const span = document.createElement('span');
          render(vm, span);
          container.innerHTML += span.innerHTML;
        });

        const title = app?.vnode?.el?.querySelector('.ant-alert-message');
        const description = app?.vnode?.el?.querySelector('.ant-alert-description');
        const wrapper = app?.attrs.description || app?.slots.description ? description : title;
        wrapper.appendChild(container);
        wrapper.className += ` convue-alert-${
          !app?.attrs.description && !app?.slots.description ? 'right' : props.position
        }`;
      }
    };

    onMounted(() => {
      appendAction();
    });

    onUpdated(() => {
      appendAction();
    });

    return () => <a-alert {...attrs} v-slots={slots}></a-alert>;
  },
});
