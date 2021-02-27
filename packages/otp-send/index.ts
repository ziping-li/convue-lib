import { App, Plugin } from 'vue';
import OptSend from './src/index';

OptSend.install = (app: App<Element>) => {
  app.component(OptSend.name, OptSend);
  return app;
};

export default OptSend as typeof OptSend & Plugin;
