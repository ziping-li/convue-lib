import { createApp } from 'vue';
import App from './App';
import router from './router';
import 'vite-plugin-vuedoc/style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Container from '@convue-lib/container';
import '@convue-lib/styles';

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(Container);
app.mount('#app');
