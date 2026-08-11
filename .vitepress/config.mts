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
          { text: '快速开始', link: '/guide/' },
          { text: '安装步骤', link: '/guide/setup' }
        ]
      },
      {
        text: '常见问题&技术支持',
        items: [
          { text: '常见问题', link: '/faq/' }
        ]
      },
      { text: '支付&账户问题', link: '/payment/' },
      {
        text: '公告中心',
        items: [
          { text: '最新公告', link: '/notice/' }
        ]
      },
      { text: '娱乐推荐', link: '/recommend/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用教程',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: 'Karing 客户端教程', link: '/guide/karing' }
          ]
        }
      ],
      '/faq/': [
        {
          text: '常见问题',
          items: [
            { text: '常见问题', link: '/faq/' }
          ]
        }
      ]
    },

    socialLinks: [
      // 如果有 GitHub 仓库可以加，没有就删掉这一项
      // { icon: 'github', link: 'https://github.com/xxx' }
    ]
  }
})