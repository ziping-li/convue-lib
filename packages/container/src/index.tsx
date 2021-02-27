import { computed, defineComponent, ref } from 'vue';
import { queryMedia } from '@convue-lib/utils';
import styleInject from 'style-inject';
import css from './index.less';

styleInject(css);

export default defineComponent({
  name: 'Container',
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
      'convue-container': true,
      fuild: props.fuild,
      [media.value]: true,
    }));

    return () => <div class={className.value}>{slots.default?.()}</div>;
  },
});
