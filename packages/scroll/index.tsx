// @ts-nocheck
import { defineComponent, onMounted, onUnmounted, PropType, reactive, ref } from 'vue';
import { addResizeListener, removeResizeListener } from './resize-event';
import Bar from './bar';
import { BarDirection, BarTrigger } from './types';
import './index.less';

export default defineComponent({
  name: 'scroll',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    trigger: {
      type: String as PropType<BarTrigger>,
      default: 'hover' as BarTrigger,
    },
    direction: {
      type: String,
      default: 'all',
    },
    barStyle: Object,
    thumbStyle: Object,
  },
  setup(props, { emit, slots }) {
    const wrapRef = ref();
    const state = reactive({
      vThumbHeight: '0',
      hThumbWidth: '0',
      moveX: '0%',
      moveY: '0%',
      hover: false,
    });

    /**
     * 真实滚动条滚动时，修改滚动条bar移动距离
     */
    function handleScroll(event: Event) {
      const { scrollTop, clientHeight, scrollLeft, clientWidth }: any = event.target;
      state.moveY = `${(scrollTop * 100) / clientHeight}%`;
      state.moveX = `${(scrollLeft * 100) / clientWidth}%`;
      emit('scroll', event);
    }

    /**
     * 更新thumb的宽高 外层容器高度 / 整个内容的高度（整个可滚动内容区域） =  滚动条thumb的高度 / 滚动轨道的高度（一般滚动轨道的高度与外层容器相等）
     */
    const hasVBar = ref(false);
    const hasHBar = ref(false);
    function update() {
      if (wrapRef.value) {
        const heightPercentage = (wrapRef.value.clientHeight * 100) / wrapRef.value.scrollHeight;
        const widthPercentage = (wrapRef.value.clientWidth * 100) / wrapRef.value.scrollWidth;

        if (heightPercentage < 100) {
          hasVBar.value = true;
        } else {
          hasVBar.value = false;
        }

        if (widthPercentage < 100) {
          hasHBar.value = true;
        } else {
          hasHBar.value = false;
        }
        state.vThumbHeight = heightPercentage < 100 ? `${heightPercentage}%` : '';
        state.hThumbWidth = widthPercentage < 100 ? `${widthPercentage}%` : '';
      }
    }

    function setScroll(x: number, y: number) {
      wrapRef.value.scrollLeft = x;
      wrapRef.value.scrollTop = y;
    }

    onMounted(() => {
      update(); // 初始化调用一次，计算滚动条默认高度
      addResizeListener(wrapRef.value, update); // 监听元素变化，如果容器DOM变化触发更新
    });

    onUnmounted(() => {
      removeResizeListener(wrapRef.value, update);
    });

    return () => (
      <div
        class={`a-scrollbar a-scrollbar-${props.trigger}`}
        style={{ width: props.width, height: props.height }}
      >
        <div
          class={{ 'a-scrollbar-wrap': true, [`a-scrollbar-wrap-${props.direction}`]: true }}
          ref={wrapRef}
          onScroll={handleScroll}
        >
          <div class="a-scrollbar-content">
            {slots.default?.()}
          </div>
          {props.direction !== 'x' && (
            <Bar
              direction="vertical"
              parentRef={wrapRef}
              size={state.vThumbHeight}
              move={state.moveY}
              barStyle={props.barStyle}
              thumbStyle={props.thumbStyle}
              v-show={hasVBar}
              class="a-scrollbar-bar-v-bar"
            ></Bar>
          )}
          {props.direction !== 'y' && (
            <Bar
              direction="horizontal"
              parentRef={wrapRef}
              size={state.hThumbWidth}
              move={state.moveX}
              barStyle={props.barStyle}
              thumbStyle={props.thumbStyle}
              v-show={hasHBar}
              class="a-scrollbar-bar-h-bar"
            ></Bar>
          )}
        </div>
      </div>
    );
  },
});
