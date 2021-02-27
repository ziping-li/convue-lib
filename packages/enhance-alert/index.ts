import { App, Plugin } from 'vue';
import EnhanceAlert from './src/index';

EnhanceAlert.install = (app: App<Element>) => {
  app.component(EnhanceAlert.name, EnhanceAlert);
  return app;
};

export default EnhanceAlert as typeof EnhanceAlert & Plugin;
