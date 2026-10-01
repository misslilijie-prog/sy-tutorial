```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'fangqi帮助文档',
  description: '软件教程与常见问题文档',

  // 加载自定义 CSS
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],

  themeConfig: {
    // 顶部导航栏取消
    nav: [],

    // 所有页面统一使用左侧菜单
    sidebar: [
      // 首页
      {
        text: '网站导航',
        collapsed: false,
        items: [
          {
            text: '首页',
            link: '/'
          }
        ]
      },

      // 使用教程
      {
        text: '使用教程',
        collapsed: false,
        items: [
          {
            text: 'Karing（Windows）',
            link: '/guide/karing'
          },
          {
            text: 'Shadowrocket（iOS）',
            link: '/guide/shadowrocket'
          },
          {
            text: 'Clash（Android）',
            link: '/guide/clash-android'
          },
          {
            text: 'OpenWrt 路由器配置',
            link: '/guide/openwrt'
          }
        ]
      },

      // 常见问题
      {
        text: '常见问题&技术支持',
        collapsed: false,
        items: [
          {
            text: '常见问题',
            link: '/faq/'
          },
          {
            text: '排查排错指南',
            link: '/faq/troubleshooting'
          }
        ]
      },

      // 支付
      {
        text: '支付&账户问题',
        collapsed: false,
        items: [
          {
            text: '支付相关问题',
            link: '/payment/'
          },
          {
            text: '邀请返利活动',
            link: '/payment/referral'
          }
        ]
      },

      // 公告
      {
        text: '公告中心',
        collapsed: false,
        items: [
          {
            text: '必看公告',
            link: '/notice/must-read'
          },
          {
            text: '往期公告',
            link: '/notice/archive'
          }
        ]
      },

      // 娱乐推荐
      {
        text: '娱乐推荐',
        collapsed: false,
        items: [
          {
            text: '娱乐推荐',
            link: '/recommend/'
          }
        ]
      }
    ],

    // 不显示社交媒体图标
    socialLinks: []
  }
})
```
