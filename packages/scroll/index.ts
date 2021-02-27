import { App, Plugin } from 'vue';
import Scroll from './src/index';

Scroll.install = (app: App<Element>) => {
  app.component(Scroll.name, Scroll);
  return app;
};

export default Scroll as typeof Scroll & Plugin;
