# DataView 数据列表

用于数据列表的展示.

```js
import DataView from '@convue-lib/data-view';
```

## 基本用法

简单的列表，最后一列是各种操作。

```vue demo
<template>
  <DataView :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span>
        <smile-outlined />
        Name
      </span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ record }">
      <span>
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link">
          More actions
          <down-outlined />
        </a>
      </span>
    </template>
  </DataView>
</template>

<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import DataView from '@convue-lib/data-view';
import { defineComponent } from 'vue';
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle', customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
  components: {
    SmileOutlined,
    DownOutlined,
    DataView,
  },
});
</script>
```

## filters 和 sorter

传入 <code>filters</code> 和 <code>sorter</code>.

```vue demo
<template>
  <DataView :columns="columns" :data-source="data" @change="onChange">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span><smile-outlined /> Name</span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ text, record }">
      <span>
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
      </span>
    </template>
  </DataView>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import DataView from '@convue-lib/data-view';

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
    DataView,
  },
  setup() {
    const columns = [
      {
        dataIndex: 'name',
        key: 'name',
        sorter: true,
        slots: { title: 'customTitle', customRender: 'name' },
        filters: [
          {
            text: 'Male',
            value: 'male',
          },
          {
            text: 'Female',
            value: 'female',
          },
        ],
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: true,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          {
            text: 'Male',
            value: 'male',
          },
          {
            text: 'Female',
            value: 'female',
          },
        ],
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        slots: { customRender: 'tags' },
      },
      {
        title: 'Action',
        key: 'action',
        slots: { customRender: 'action' },
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];

    const onChange = (pagination, filters, sorter) => {
      console.log(pagination);
      console.log(filters);
      console.log(sorter);
    };

    return {
      columns,
      data,
      onChange,
    };
  },
});
</script>
```

## 属性

| 参数       | 说明                                                                                                                                             | 类型                 | 默认值             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | ------------------ |
| columns    | <p>表格列的配置描述，具体项见<a href="https://2x.antdv.com/components/table-cn#Column" target="_blank">Ant Vue Design</a> </p>                   | <span>array</span>   | -                  |
| dataSource | <p>数据数组 </p>                                                                                                                                 | <span>any[] </span>  |                    |
| loading    | <p>页面是否加载中 </p>                                                                                                                           | <span>boolean</span> | <code>false</code> |
| pagination | <p>分页器，参考 <a href="https://2x.antdv.com/components/pagination-cn/" target="_blank">pagination</a> 文档，设为 false 时不展示和进行分页 </p> | <span>object</span>  |                    |

## 插槽

| 名称    | 描述                   |
| ------- | ---------------------- |
| default | <p>默认 Vue 插槽。</p> |
