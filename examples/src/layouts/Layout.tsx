import { computed, defineComponent, ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import config from '../config';
import './Layout.less';

const Menu = defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const menus = computed(() => config.routes || []);
    const selectedKeys = ref([route.path]);
    const openKeys = ref(config.routes.map((route) => route.path));

    watchEffect(() => {
      selectedKeys.value = [route.path];
      document.title = `${route.meta.title} | ${props.title}`;
    });

    const onClick = ({ key }: any) => {
      router.push(key);
    };

    return {
      menus,
      selectedKeys,
      openKeys,
      onClick,
    };
  },
  render() {
    return (
      <a-menu
        class="layout-menu"
        mode="inline"
        v-models={[
          [this.selectedKeys, 'selectedKeys'],
          [this.openKeys, 'openKeys'],
        ]}
        onClick={this.onClick}
      >
        {this.menus.map((menu: any) => {
          if (menu.children) {
            return (
              <a-sub-menu
                key={menu.path}
                v-slots={{
                  title: () => <span>{menu.title}</span>,
                }}
              >
                {menu.children.map((menuItems: any) => (
                  <a-menu-item key={menuItems.path}>{menuItems.title}</a-menu-item>
                ))}
              </a-sub-menu>
            );
          } else {
            return <a-menu-item key={menu.path}>{menu.title}</a-menu-item>;
          }
        })}
      </a-menu>
    );
  },
});

export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute();

    const title = computed(() => config.title || '');
    const anchor: any = computed(() => route.meta.anchor || []);

    const onClick = (e: Event, link: Object) => {
      e.preventDefault();
    }

    return {
      title,
      anchor,
      onClick,
    };
  },
  render() {
    return (
      <a-layout id="layout">
        <a-layout-header class="layout-header">
          <router-link to="/" class="layout-logo">
            <img alt="logo" height="32" src="https://qn.antdv.com/logo.png" />
            <span class="title">{this.title}</span>
          </router-link>
        </a-layout-header>
        <a-layout>
          <a-layout-sider class="d-none d-md-block" width="240" theme="light">
            <Menu title={this.title} />
          </a-layout-sider>
          <a-layout>
            <a-layout-content class="layout-content">
              <router-view></router-view>
            </a-layout-content>

            <a-anchor class="d-none d-md-block layout-anchor" offsetTop={30} onClick={this.onClick}>
              {this.anchor.map((item: any) => {
                return <a-anchor-link href={'#' + item.anchor} title={item.content} />;
              })}
            </a-anchor>
          </a-layout>
        </a-layout>
      </a-layout>
    );
  },
});
