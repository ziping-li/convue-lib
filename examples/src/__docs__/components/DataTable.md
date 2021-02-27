# DataTable 数据表格

<code>data-tabel</code> 的数据表格，在浏览器 <code>breakpoint</code> 为 <code>xs</code> 和 <code>sm</code> 的时候，将以 <code>a-data-view</code> 的组件形式展示.

```js
import DataTable from '@convue-lib/data-table'; 
```

```vue demo
<template>
  <DataTable :columns="columns" :data-source="data" @change="onChange">
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
  </DataTable>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
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
