import { App, Plugin } from 'vue';
import Formatted from './src/index';

Formatted.install = (app: App<Element>) => {
  app.component(Formatted.name, Formatted);
  return app;
};

export default Formatted as typeof Formatted & Plugin;
