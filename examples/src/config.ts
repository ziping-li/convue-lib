import Introduce from './__docs__/Introduce.md';
import Display from './__docs__/styles/Display.md';
import Flex from './__docs__/styles/Flex.md';
import Float from './__docs__/styles/Float.md';
import Space from './__docs__/styles/Space.md';
import Text from './__docs__/styles/Text.md';

import Breakpoints from './__docs__/utils/Breakpoints.md';
import Date from './__docs__/utils/Date.md';
import Number from './__docs__/utils/Number.md';
import Object from './__docs__/utils/Object.md';
import Function from './__docs__/utils/Function.md';
import Xss from './__docs__/utils/Xss.md';
import PhoneUtil from './__docs__/utils/Phone.md';

import Container from './__docs__/components/Container.md';
import Phone from './__docs__/components/Phone.md';
import OtpSend from './__docs__/components/OtpSend.md';
import OtpInput from './__docs__/components/OtpInput.md';
import Formatted from './__docs__/components/Formatted.md';
import EnhanceAlert from './__docs__/components/EnhanceAlert.md';
import Scroll from './__docs__/components/Scroll.md';
import DataView from './__docs__/components/DataView.md';
import DataTable from './__docs__/components/DataTable.md';

export default {
  title: 'convue-lib',
  routes: [
    { path: '/introduce', title: '简介', component: Introduce, anchor: Introduce.$vd.toc },
    {
      path: '/styles',
      title: '样式',
      children: [
        { path: '/display', title: '辅助显示', component: Display, anchor: Display.$vd.toc },
        { path: '/flex', title: '弹性布局', component: Flex, anchor: Flex.$vd.toc },
        { path: '/float', title: '浮动', component: Float, anchor: Float.$vd.toc },
        { path: '/space', title: '间距', component: Space, anchor: Space.$vd.toc },
        { path: '/text', title: '文本与排版', component: Text, anchor: Text.$vd.toc },
      ],
    },
    {
      path: '/utils',
      title: '工具方法',
      children: [
        { path: '/breakpoints', title: '断点及变量', component: Breakpoints, anchor: Breakpoints.$vd.toc },
        { path: '/date', title: '时间', component: Date, anchor: Date.$vd.toc },
        { path: '/number', title: '数字', component: Number, anchor: Number.$vd.toc },
        { path: '/object', title: '对象与数组', component: Object, anchor: Object.$vd.toc },
        { path: '/function', title: '函数', component: Function, anchor: Function.$vd.toc },
        { path: '/xss', title: '安全过滤', component: Xss, anchor: Xss.$vd.toc },
        { path: '/phone-util', title: '电话号码', component: PhoneUtil, anchor: PhoneUtil.$vd.toc },
      ],
    },
    {
      path: '/',
      title: '组件',
      children: [
        { path: '/container', title: 'Container 容器', component: Container, anchor: Container.$vd.toc },
        { path: '/phone', title: 'Phone 电话', component: Phone, anchor: Phone.$vd.toc },
        { path: '/otp-send', title: 'OtpSend 发送验证码', component: OtpSend, anchor: OtpSend.$vd.toc },
        { path: '/otp-input', title: 'OtpInput 输入验证码', component: OtpInput, anchor: OtpInput.$vd.toc },
        { path: '/formatted', title: 'Formatted 格式化输入', component: Formatted, anchor: Formatted.$vd.toc },
        { path: '/enhance-alert', title: 'EnhanceAlert 警告提示', component: EnhanceAlert, anchor: EnhanceAlert.$vd.toc },
        { path: '/scroll', title: 'Scroll 滚动', component: Scroll, anchor: Scroll.$vd.toc },
        { path: '/data-view', title: 'DataView 数据列表', component: DataView, anchor: DataView.$vd.toc },
        { path: '/data-table', title: 'DataTable 数据表格', component: DataTable, anchor: DataTable.$vd.toc },
      ],
    },
  ],
};
