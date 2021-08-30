import { defineConfig } from 'dumi';

export default defineConfig({
  title: '心语的博客',
  mode: 'site',
  description: '这是描述',
  logo: '/images/logo.jpeg',
  // 单语言配置方式如下
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/heartrainy',
    },
    {
      title: '问题集',
      path: '/question',
    },
    {
      title: '算法',
      path: '/algorithm',
    },
  ],
  // more config: https://d.umijs.org/config
  exportStatic: {}
});
