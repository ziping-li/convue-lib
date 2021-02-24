import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from './layouts/Layout';
import config from './config';

const expandRoutes = () => {
  let current: RouteRecordRaw[] = [];
  config.routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        current.push({
          ...child,
          meta: {
            title: child.title,
            anchor: child.anchor,
          },
        });
      });
    } else {
      current.push({
        ...item,
        meta: {
          title: item.title,
          anchor: item.anchor,
        },
      });
    }
  });

  return current;
};

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: config.routes[0].path,
      children: expandRoutes(),
    },
  ],
});
