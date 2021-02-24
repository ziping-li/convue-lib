import {
  createVNode,
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUpdated,
  render,
  PropType,
} from 'vue';
import './index.less';

type EnhanceAlertPosition = 'bottom' | 'right';

export default defineComponent({
  name: 'enhance-alert',
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
        const action = app?.vnode?.el?.querySelector('.a-alert-actions');
        if (action) {
          action.parentElement.removeChild(action);
        }

        const container = document.createElement('div');
        container.className = `a-alert-actions`;

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
        wrapper.className += ` a-alert-${
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
