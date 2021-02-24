import { createApp } from 'vue';
import App from './App';
import router from './router';
import 'vite-plugin-vuedoc/style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(router);
app.use(Antd);
app.mount('#app');
