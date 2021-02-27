import { defineComponent, computed, ComputedRef, ref, PropType } from 'vue';
import { BAR_MAP } from './types';
import { BarMap, BarMapItem, BarDirection, BarTrigger } from './types';
import './bar.less';

export default defineComponent({
  name: 'bar',
  props: {
    parentRef: {
      required: true,
    },
    direction: {
      type: String as PropType<BarDirection>,
      default: 'vertical' as BarDirection, // 支出2个值 水平 horizontal 垂直 vertical
    },
    size: {
      type: String,
    },
    move: {
      type: String,
    },
    trigger: {
      type: String as PropType<BarTrigger>,
      default: 'hover' as  BarTrigger, // hover 鼠标移动上去显示 always 一直显示 none 不显示
    },
    barStyle: {
      // 设置轨道
      type: Object,
      default: () => ({
        'background-color': '',
      }),
    },
    thumbStyle: {
      // 设置滑块
      type: Object,
      default: () => ({
        'background-color': 'rgba(0, 0, 0, 0.2)',
      }),
    },
  },
  setup(props) {
    const barRef = ref();
    const bar: ComputedRef<BarMapItem> = computed(() => (BAR_MAP as BarMap)[props.direction]);
    const thumbStyleObj = computed(() => ({
      ...props.thumbStyle,
      [bar.value.size]: props.size,
      transform: `translate${bar.value.axis}(${props.move})`,
    }));

    /**
     * 点击轨道 滚动区域滚动到对应的位置 定位到滑块的中心点
     */
    const thumbRef = ref();
    function handleBarMouseDown(e: any) {
      const client = e[bar.value.client]; // 点击位置距客户端顶部或最左边的位置
      const wrap = barRef.value.getBoundingClientRect()[bar.value.direction]; // 滚动轨道距顶部或最左边的位置
      const offset = Math.abs(wrap - client); // 距离元素上或左边距的距离
      const thumbHalf = thumbRef.value[bar.value.offset] / 2; // thumb一般的高度
      const $parentWrap: any = props.parentRef;
      const thumbPosPercent = ((offset - thumbHalf) * 100) / barRef.value[bar.value.offset];
      $parentWrap.value[bar.value.scroll] = (thumbPosPercent * $parentWrap.value[bar.value.scrollSize]) / 100;
    }

    const thumbDrag = ref(false);

    /**
     * 拖动过程中
     */
    function handleThumbMove(e: any) {
      if (!thumbDrag.value) {
        return;
      }

      const client = e[bar.value.client]; // 点击位置距客户端顶部或最左边的位置
      const wrap = barRef.value.getBoundingClientRect()[bar.value.direction]; // 滚动轨道距顶部或最左边的位置
      const offset = Math.abs(wrap - client); // 距离元素上或左边距的距离
      const thumbHalf = thumbRef.value[bar.value.offset] / 2; // thumb一般的高度
      const $parentWrap: any = props.parentRef;
      const thumbPosPercent = ((offset - thumbHalf) * 100) / barRef.value[bar.value.offset];
      $parentWrap.value[bar.value.scroll] = (thumbPosPercent * $parentWrap.value[bar.value.scrollSize]) / 100;
    }

    /**
     * 放开鼠标，拖动结束
     */
    function hanldeThumbUp(event: any) {
      thumbDrag.value = false;
      if (event.target) {
        document.removeEventListener('mousemove', handleThumbMove); // 注册在document上而不是event.target上是为了更流畅，为了解决鼠标滑动过快，滚动滑块跟不上，和未释放鼠标时，在滑块旁滚动的问题
        document.removeEventListener('mouseup', hanldeThumbUp);
      }
      document.onselectstart = () => null;
    }

    /**
     * 拖拽开始
     */
    function startDrag(event: Event) {
      thumbDrag.value = true;
      if (event.target) {
        document.addEventListener('mousemove', handleThumbMove);
        document.addEventListener('mouseup', hanldeThumbUp);
      }
      document.onselectstart = () => false;
    }

    /**
     * 鼠标在滑块thumb上按下
     */
    function handleThumbMouseDown(event: Event) {
      startDrag(event);
    }

    return () => (
      <div
        class={`convue-scrollbar-bar convue-scrollbar-${props.direction}`}
        onMousedown={handleBarMouseDown}
        style={props.barStyle}
        ref={barRef}
      >
        <div
          class="convue-scrollbar-thumb"
          ref={thumbRef}
          onMousedown={handleThumbMouseDown}
          style={thumbStyleObj.value}
        ></div>
      </div>
    );
  },
});
