import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
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

    // 仓库地址
    repo: 'https://github.com/LiStarRain/LiStarRain.github.io.git',

    // 侧边栏深度
    sidebarDepth: 3,

    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '准备工作', link: '/preliminary/' },
      {
        text: '作曲课程',
        link: '/courses/',
        children: [{ text: '基础练习', link: '/courses/ECTF.md' }],
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
  }),
  bundler: viteBundler(),
});
