export interface ElementObj extends Node {
  [key: string]: any;
  resizeListners: Function[];
  observer: MutationObserver;
}

export interface BarMapItem {
  key: string;
  size: string;
  axis: string;
  client: string;
  scrollSize: string;
  scroll: string;
  offset: string;
  direction: string;
  wide: string;
}

export interface BarMap {
  [key: string]: BarMapItem;
}

export type BarDirection = 'vertical' | 'horizontal'

export type BarTrigger = 'hover' | 'always' | 'none'

export const BAR_MAP: BarMap = {
  vertical: {
    offset: 'offsetHeight',
    key: 'vertical',
    size: 'height',
    wide: 'width',
    axis: 'Y',
    client: 'clientY',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    direction: 'top',
  },
  horizontal: {
    offset: 'offsetWidth',
    key: 'horizontal',
    size: 'width',
    wide: 'height',
    axis: 'X',
    client: 'clientX',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    direction: 'left',
  },
};
