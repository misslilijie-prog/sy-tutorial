import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "速云帮助文档",
  description: "软件教程与常见问题文档",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '使用教程',
        items: [
          { text: '查看全部教程', link: '/guide/karing' },
          { text: '速云APP', link: '/guide/windows' }
        ]
      },
      {
        text: '常见问题&技术支持',
        items: [
          { text: '常见问题', link: '/faq/faq.md' },
          { text: '排查排错指南', link: '/faq/troubleshooting' }
        ]
      },
      { text: '支付&账户问题', link: '/payment/' },
      {
        text: '公告中心',
        items: [
          { text: '必看公告', link: '/notice/must-read' },
          { text: '往期公告', link: '/notice/archive' }
        ]
      },
      { text: '娱乐推荐', link: '/recommend/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '速云官方客户端',
          items: [
            { text: 'Windows 客户端', link: '/guide/suyun-windows' },
            { text: 'Android 客户端', link: '/guide/suyun-android' },
            { text: 'macOS 客户端', link: '/guide/suyun-macos' }
          ]
        },
        {
          text: '第三方工具教程',
          items: [
            { text: 'Karing（Windows）', link: '/guide/karing' },
            { text: 'NekoBox（Android）', link: '/guide/nekobox' },
            { text: 'Shadowrocket（iOS）', link: '/guide/shadowrocket' },
            { text: 'V2rayN（Android）', link: '/guide/v2rayn-android' },
            { text: 'Clash（Android）', link: '/guide/clash-android' },
            { text: 'OpenWrt 路由器配置', link: '/guide/openwrt' }
          ]
        }
      ],
      '/faq/': [
        {
          text: '常见问题&技术支持',
          items: [
            { text: '常见问题', link: '/faq/' },
            { text: '排查排错指南', link: '/faq/troubleshooting' }
          ]
        }
      ],
      '/payment/': [
        {
          text: '支付&账户问题',
          items: [
            { text: '邀请返利活动', link: '/payment/referral' }
          ]
        }
      ],
      '/notice/': [
        {
          text: '公告中心',
          items: [
            { text: '必看公告', link: '/notice/must-read' },
            { text: '往期公告', link: '/notice/archive' }
          ]
        }
      ]
    },

    socialLinks: []
  }
})