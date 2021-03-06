import { createApp } from 'vue';
import App from './App';
import router from './router';
import 'vite-plugin-vuedoc/style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Container from '@convue-lib/container';
import DataTable from '@convue-lib/data-table';
import DataView from '@convue-lib/data-view';
import EnhanceAlert from '@convue-lib/enhance-alert';
import Formatted from '@convue-lib/formatted';
import OtpInput from '@convue-lib/otp-input';
import OtpSend from '@convue-lib/otp-send';
import Phone from '@convue-lib/phone';
import Scroll from '@convue-lib/scroll';
import '@convue-lib/styles';

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(Container);
app.use(DataTable);
app.use(DataView);
app.use(EnhanceAlert);
app.use(Formatted);
app.use(OtpInput);
app.use(OtpSend);
app.use(Phone);
app.use(Scroll);
app.mount('#app');
