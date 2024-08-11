import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image';
import { searchPlugin } from '@vuepress/plugin-search';
import { defineUserConfig } from 'vuepress';
import logoPath from './logoPath';

const { soda, grapeSoda, milkTea, coffee } = logoPath;
const logo = soda;

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'ScoreLife',
  description: 'ScoreLife 是一个有关作曲学习的网站',

  head: [['link', { rel: 'icon', href: logo }]],

  theme: defaultTheme({
    logo,

    // 页面文字设置
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    editLinkText: '编辑此页',
    notFound: ['这里什么都没有哦~', 'Sorry~啥都没有找到~'],
    prev: '上一页',
    next: '下一页',
    backToHome: '回到首页',

    // 仓库地址
    repo: 'https://github.com/LiStarRain/LiStarRain.github.io.git',

    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '准备工作', link: '/preliminary/' },
      {
        text: '作曲学习',
        link: '/courses/',
        children: [{ text: '基础练习', link: '/courses/ECTF/Introduction.md' }],
      },
      {
        text: '联系我',
        link: '/contact/',
        children: [
          { text: 'Email', link: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=hPz38OX29uXt6vzE9fWq5_vp' },
          {
            text: '小红书',
            link: 'https://www.xiaohongshu.com/user/profile/61050374000000000100a6e9?xhsshare=CopyLink&appuid=61050374000000000100a6e9&apptime=1722867825&share_id=d43faf9925fc46fb850482d6e47d0bec',
          },
        ],
      },
    ],

    // 侧边栏深度
    sidebarDepth: 3,
    // 侧边栏设置
    sidebar: {
      '/courses/ECTF/': [
        {
          text: '引言',
          link: '/courses/ECTF/Introduction.md',
          collapsible: true,
        },
        {
          text: '声部和声部运动',
          link: '/courses/ECTF/Voicings.md',
          collapsible: true,
        },
      ],
    },
  }),

  // 插件
  plugins: [
    mediumZoomPlugin,
    markdownImagePlugin({
      // 启用figure
      figure: true,
      // 启用图片懒加载
      lazy: true,
      // width x height设置图片尺寸
      size: true,
    }),
    searchPlugin({
      // placeholder
      locales: '搜索',
      // 排除首页
      isSearchable: page => page.path !== '/',
    }),
  ],

  bundler: viteBundler(),
});
