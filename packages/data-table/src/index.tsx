import { defineComponent, ref } from 'vue';
import { queryMedia } from '@convue-lib/utils';
import DataView from '@convue-lib/data-view';
import styleInject from 'style-inject';
import css from './index.less';

styleInject(css);

export default defineComponent({
  name: 'DataTable',
  inheritAttrs: false,
  setup(_props, { attrs, slots }) {
    const media = ref('');
    queryMedia((data: string) => {
      media.value = data;
    });

    return () => (
      <>
        {['xs', 'sm'].includes(media.value) ? (
          <DataView {...attrs} v-slots={slots} />
        ) : (
          <a-table {...attrs} v-slots={slots}></a-table>
        )}
      </>
    );
  },
});
