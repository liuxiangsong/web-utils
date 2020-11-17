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
    // logo: '/assets/img/favicon.ico',
    logo: '/favicon.ico',
    nav: [{ text: '指南', link: '/web-utils-docs/' },
    { text: '服务器配置', link: '/服务器配置/' },
    { text: 'js文档', link: '/javaScript/' },
    { text: '其它文档', link: '/other/' }],
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
      '/服务器配置/': [
        {
          title: '服务器配置',
          collapsable: false, 
          children: [
            "",
            { title: 'linux', path: 'linux.md' },
            { title: '虚拟机安装centos', path: '虚拟机安装centos.md' },
            { title: 'docker', path: 'docker.md' },
            { title: 'nginx', path: 'nginx.md' },
          ],
        },
      ],
      '/javaScript/': [
        {
          title: 'js笔记',
          collapsable: false,
          children: [
            "",
            { title: '正则表达式', path: '正则表达式.md' },
            { title: 'dayjs', path: 'dayjs.md' },
            { title: 'HTML元素位置相关属性', path: 'HTML元素位置相关属性.md' },
            { title: 'js常用方法', path: 'js常用方法.md' },
            { title: 'js导出文件', path: 'js导出文件.md' }, 
          ],
        },
      ],
      '/other/': [
        {
          title: '其它文档',
          collapsable: false, 
          children: [
            "",
            { title: 'Git常用命令', path: 'Git常用命令.md' },
            { title: 'Markdown语法', path: 'Markdown语法.md' },
            { title: 'OpenSSL和http-server笔记', path: 'OpenSSL和http-server笔记.md' },
          ],
        },
      ],
    },
    // displayAllHeaders: false // 默认值：false
    // smoothScroll: true
  },
}
