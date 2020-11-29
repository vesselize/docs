function getGuideSidebar(groups = []) {
  return [
    {
      title: groups[0],
      sidebarDepth: 1,
      collapsable: false,
      children: [
        'intro',
        'installation',
        'providers',
        'container',
        'dependencies',
        'context'
      ]
    },
    {
      title: groups[1],
      sidebarDepth: 1,
      collapsable: false,
      children: ['integration-vue', 'integration-react']
    }
  ];
}

function getAPISidebar(groups = []) {
  return [
    {
      title: groups[0],
      sidebarDepth: 2,
      collapsable: false,
      children: ['container']
    },
    {
      title: groups[1],
      sidebarDepth: 2,
      collapsable: false,
      children: ['vue-plugin', 'vue-composition']
    },
    {
      title: groups[2],
      sidebarDepth: 2,
      collapsable: false,
      children: ['react-component', 'react-hooks', 'react-hoc']
    }
  ];
}

module.exports = {
  base: '/',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vesselize',
      description:
        'A JavaScript IoC container that works seamlessly with Vue.js and React.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vesselize',
      description: '一个与 Vue.js 及 React 等框架无缝集成的 IoC 容器'
    }
  },

  themeConfig: {
    logo: '/images/logo.png',

    repo: 'https://github.com/vesselize',
    repoLabel: 'Github',
    docsRepo: 'vesselize/docs',
    docsBranch: 'main',
    docsDir: 'docs',
    lastUpdated: true,
    editLinks: true,
    smoothScroll: true,
    displayAllHeaders: true,

    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        selectText: 'Languages',
        label: 'English',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/intro.html'
          },
          {
            text: 'API Reference',
            link: '/api/container.html'
          }
        ],
        sidebarDepth: 2,
        sidebar: {
          '/guide/': getGuideSidebar(['Guide', 'Integration']),
          '/api/': getAPISidebar(['Vesselize', 'Vue.js', 'React'])
        }
      },
      '/zh/': {
        editLinkText: '在 GitHub 上编辑此页',
        selectText: '选择语言',
        label: '简体中文',
        serviceWorker: {
          updatePopup: {
            message: '站点内容有更新',
            buttonText: '刷新'
          }
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/intro.html'
          },
          {
            text: 'API 参考',
            link: '/zh/api/container.html'
          }
        ]
      }
    }
  },

  plugins: [
    ['@vuepress/active-header-links', true],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/nprogress', true],
    ['@vuepress/register-components', true],
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-J4BSS4W6TX'
      }
    ],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ]
  ]
};
