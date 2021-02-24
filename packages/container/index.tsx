import { computed, defineComponent, ref } from 'vue';
import { queryMedia } from '@convue-lib/utils';
import './index.less';

export default defineComponent({
  name: 'container',
  props: {
    fuild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const media = ref('');
    queryMedia((data: string) => (media.value = data));
    const className = computed(() => ({
      'avw-container': true,
      fuild: props.fuild,
      [media.value]: true,
    }));

    return () => <div class={className.value}>{slots.default?.()}</div>;
  },
});
