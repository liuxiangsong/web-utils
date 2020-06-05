module.exports={
  title:'web-utils',
  description:'web utils',
  base:'/web-utils/',
  themeConfig: {
    repo:'liuxiangsong/web-utils',
    repoLabel:'查看源码',
    docsBranch:'gh-pages',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',

    logo: '/assets/img/favicon.ico',
    nav:[
      { text: '指南', link: '/web-utils-docs/' },
    ],
    // sidebarDepth:3,  //默认为1，将提取h2的标题；0为禁用标题链接；2：提取h2和h3标题
    sidebar:{
      '/web-utils-docs/': [{
        title: '指南',
        collapsable: false,
        children: [
          '',
         {title:'sd',path: '/clipboard.md'},
          'components.md',
          'utils.md',
          'vue plugin.md', 
        ]
      },'vue plugin.md']
    }, 
    displayAllHeaders: true // 默认值：false 
    // smoothScroll: true
  }
}