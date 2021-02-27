import { App, Plugin } from 'vue';
import Phone from './src/index';

Phone.install = (app: App<Element>) => {
  app.component(Phone.name, Phone);
  return app;
};

export default Phone as typeof Phone & Plugin;
