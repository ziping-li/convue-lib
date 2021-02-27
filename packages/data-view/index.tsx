import { defineComponent, PropType, reactive, ref, toRaw } from 'vue';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import { queryMedia } from '@convue-lib/utils';
import './index.less';

export default defineComponent({
  name: 'DataView',
  inheritAttrs: false,
  props: {
    columns: {
      type: Array as PropType<Record<string, any>[]>,
      default: () => [],
    },
    dataSource: {
      type: Array as PropType<Record<string, any>[]>,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { slots, emit }) {
    const { columns, dataSource } = props;
    const state: any = reactive({
      pagination: {
        current: 1,
        pageSize: props?.pagination?.pageSize || 10,
      },
      filters: {},
      sorter: {
        field: '',
        order: '',
      },
    });
    const media = ref('');
    queryMedia((data: string) => {
      media.value = data;
    });

    const sortFields = columns.filter((column) => column.sorter);

    const selectedItems = ref([]);

    const handleRemoveClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (state.sorter.order === 'ascend') {
        state.sorter.order = 'descend';
      } else if (state.sorter.order === 'descend') {
        selectedItems.value = [];
        state.sorter.field = '';
        state.sorter.order = '';
      }
      emitChange();
    };

    const onSortChange = (val: string[]) => {
      if (val.length > 1) {
        selectedItems.value = [selectedItems.value[val.length - 1]];
      }
      if (selectedItems.value.length > 0) {
        state.sorter.field = selectedItems.value[0];
        state.sorter.order = 'ascend';
      } else {
        state.sorter.field = '';
        state.sorter.order = '';
      }
      emitChange();
    };

    const filterFields = columns.filter((column) => column.filters);

    const onFilterChange = () => {
      emitChange();
    }

    const onPaginationChange = (page: number, pageSize: number) => {
      state.pagination.current = page;
      state.pagination.pageSize = pageSize;
      emitChange();
    };

    const emitChange = () => {
      emit('change', toRaw(state.pagination), toRaw(state.filters), toRaw(state.sorter));
    };

    const getObjectValueByKeys = (data: Record<string, any>, dataIndex: string) => {
      const keys: any[] = dataIndex.split('.');
      for (const key of keys) {
        data = data[key];
      }
      return data;
    };

    return () => (
      <a-spin spinning={props.loading}>
        {filterFields.map((item) => {
          return (
            <a-select
              class="mb-3"
              mode="multiple"
              v-model={[state.filters[item.key || item.dataIndex], 'value']}
              style={{ width: '100%' }}
              placeholder={item.slots?.title ? slots[item.slots?.title]?.() : item.title}
              options={item.filters}
              onChange={onFilterChange}
            ></a-select>
          );
        })}
        <a-select
          v-show={sortFields.length > 0}
          class="mb-3"
          mode="tags"
          placeholder="排序"
          v-model={[selectedItems.value, 'value']}
          style={{ width: '100%' }}
          v-slots={{
            removeIcon: () => (
              <>
                {state.sorter.order === 'descend' ? (
                  <ArrowDownOutlined onClick={handleRemoveClick} />
                ) : (
                  <ArrowUpOutlined onClick={handleRemoveClick} />
                )}
              </>
            ),
          }}
          onChange={onSortChange}
        >
          {sortFields.map((item) => {
            return (
              <a-select-option key={item.dataIndex || item.key} value={item.dataIndex || item.key}>
                {item.slots?.title ? slots[item.slots?.title]?.() : item.title}
              </a-select-option>
            );
          })}
        </a-select>
        <a-card
          v-show={slots.title}
          class="convue-data-view"
          bordered={false}
          bodyStyle={{ padding: '15px' }}
        >
          {slots.title?.()}
        </a-card>
        {dataSource.map((item) => {
          return (
            <a-card
              class={['convue-data-view', media.value]}
              bordered={false}
              bodyStyle={{ padding: '15px' }}
            >
              {columns.map((column) => {
                return (
                  <div class="d-flex align-center my-2">
                    <span class="key font-weight-700 text-ellipsis">
                      {column.slots?.title ? slots[column.slots?.title]?.() : column.title}
                    </span>
                    <span class="value ml-2 flex-1 text-right text-ellipsis">
                      {column.slots?.customRender
                        ? slots[column.slots?.customRender]?.({
                            text: getObjectValueByKeys(item, column.dataIndex || column.key),
                            record: item,
                          })
                        : getObjectValueByKeys(item, column.dataIndex || column.key)}
                    </span>
                  </div>
                );
              })}
            </a-card>
          );
        })}

        <a-card
          v-show={slots.footer}
          class="convue-data-view"
          bordered={false}
          bodyStyle={{ padding: '15px' }}
        >
          {slots.footer?.()}
        </a-card>

        <div v-show={props.pagination?.total} class="d-flex mt-5 justify-center">
          <a-pagination {...props.pagination} onChange={onPaginationChange} />
        </div>
      </a-spin>
    );
  },
});
