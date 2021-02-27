import { App, Plugin } from 'vue';
import DataTable from './src/index';

DataTable.install = (app: App<Element>) => {
  app.component(DataTable.name, DataTable);
  return app;
};

export default DataTable as typeof DataTable & Plugin;
