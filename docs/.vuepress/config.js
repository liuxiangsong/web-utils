module.exports = {
  title: 'web-utils',
  description: 'web utils',
  base: '/web-utils/',
  themeConfig: {
    repo: 'liuxiangsong/web-utils',
    repoLabel: '查看源码',
    docsBranch: 'gh-pages',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',
    // algolia: {
    //   apiKey: '0a40057071c0ebb2f6737d9844d16918',
    //   indexName: 'web-utils'
    // },

    logo: '/assets/img/favicon.ico',
    nav: [{ text: '指南', link: '/web-utils-docs/' }],
    sidebarDepth: 2, //默认为1，将提取h2的标题；0为禁用标题链接；2：提取h2和h3标题
    sidebar: {
      '/web-utils-docs/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            "",
            { title: '剪贴板', path: 'clipboard.md' },
            { title: '组件', path: 'components.md' },
            { title: '工具类方法', path: 'utils.md' },
            { title: 'vue 插件', path: 'vue plugin.md' },
          ],
        },
      ],
    },
    // displayAllHeaders: false // 默认值：false
    // smoothScroll: true
  },
}
