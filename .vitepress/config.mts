import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'fangqi帮助文档',
  description: '软件教程与常见问题文档',

  themeConfig: {
    // 顶部导航栏取消
    nav: [],

    // 左侧菜单
    sidebar: {
      // 首页
      '/': [
        {
          text: '网站导航',
          items: [
            {
              text: '首页',
              link: '/'
            }
          ]
        },
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
        {
          text: '支付&账户问题',
          collapsed: false,
          items: [
            {
              text: '邀请返利活动',
              link: '/payment/referral'
            }
          ]
        },
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

      // 使用教程
      '/guide/': [
        {
          text: '首页',
          items: [
            {
              text: '返回首页',
              link: '/'
            }
          ]
        },
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
        {
          text: '常见问题&技术支持',
          collapsed: true,
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
        {
          text: '支付&账户问题',
          collapsed: true,
          items: [
            {
              text: '邀请返利活动',
              link: '/payment/referral'
            }
          ]
        },
        {
          text: '公告中心',
          collapsed: true,
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
        {
          text: '娱乐推荐',
          collapsed: true,
          items: [
            {
              text: '娱乐推荐',
              link: '/recommend/'
            }
          ]
        }
      ],

      // 常见问题
      '/faq/': [
        {
          text: '首页',
          items: [
            {
              text: '返回首页',
              link: '/'
            }
          ]
        },
        {
          text: '使用教程',
          collapsed: true,
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
        {
          text: '支付&账户问题',
          collapsed: true,
          items: [
            {
              text: '邀请返利活动',
              link: '/payment/referral'
            }
          ]
        },
        {
          text: '公告中心',
          collapsed: true,
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
        {
          text: '娱乐推荐',
          collapsed: true,
          items: [
            {
              text: '娱乐推荐',
              link: '/recommend/'
            }
          ]
        }
      ],

      // 支付
      '/payment/': [
        {
          text: '首页',
          items: [
            {
              text: '返回首页',
              link: '/'
            }
          ]
        },
        {
          text: '使用教程',
          collapsed: true,
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
        {
          text: '常见问题&技术支持',
          collapsed: true,
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
        {
          text: '支付&账户问题',
          collapsed: false,
          items: [
            {
              text: '邀请返利活动',
              link: '/payment/referral'
            }
          ]
        },
        {
          text: '公告中心',
          collapsed: true,
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
        {
          text: '娱乐推荐',
          collapsed: true,
          items: [
            {
              text: '娱乐推荐',
              link: '/recommend/'
            }
          ]
        }
      ],

      // 公告
      '/notice/': [
        {
          text: '首页',
          items: [
            {
              text: '返回首页',
              link: '/'
            }
          ]
        },
        {
          text: '使用教程',
          collapsed: true,
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
        {
          text: '常见问题&技术支持',
          collapsed: true,
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
        {
          text: '支付&账户问题',
          collapsed: true,
          items: [
            {
              text: '邀请返利活动',
              link: '/payment/referral'
            }
          ]
        },
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
        {
          text: '娱乐推荐',
          collapsed: true,
          items: [
            {
              text: '娱乐推荐',
              link: '/recommend/'
            }
          ]
        }
      ],

      // 娱乐推荐
      '/recommend/': [
        {
          text: '首页',
          items: [
            {
              text: '返回首页',
              link: '/'
            }
          ]
        },
        {
          text: '使用教程',
          collapsed: true,
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
        {
          text: '常见问题&技术支持',
          collapsed: true,
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
        {
          text: '支付&账户问题',
          collapsed: true,
          items: [
            {
              text: '邀请返利活动',
              link: '/payment/referral'
            }
          ]
        },
        {
          text: '公告中心',
          collapsed: true,
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
      ]
    },

    socialLinks: []
  }
})