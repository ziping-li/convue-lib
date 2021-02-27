import { App, Plugin } from 'vue';
import OptInput from './src/index';

OptInput.install = (app: App<Element>) => {
  app.component(OptInput.name, OptInput);
  return app;
};

export default OptInput as typeof OptInput & Plugin;
