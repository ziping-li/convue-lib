import { App, Plugin } from 'vue';
import Container from './src/index';

Container.install = (app: App<Element>) => {
  app.component(Container.name, Container);
  return app;
};

export default Container as typeof Container & Plugin;
