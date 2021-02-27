import { App, Plugin } from 'vue';
import DataView from './src/index';

DataView.install = (app: App<Element>) => {
  app.component(DataView.name, DataView);
  return app;
};

export default DataView as typeof DataView & Plugin;
