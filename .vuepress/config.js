module.exports={
  title:'web-utils',
  description:'web utils',
  themeConfig: {
    logo: '/assets/img/favicon.ico',
    // navbar:false,   //禁用顶部导航栏
    nav:[
      { text: 'Home', link: '/' },
    ],
    // sidebar:'auto',
    // sidebarDepth:2,  //默认为1，将提取h2的标题；0为禁用标题链接；2：提取h2和h3标题
    sidebar:[
      '/',
      ['/page1','测试页面']
    ],
    // displayAllHeaders: true // 默认值：false
    repo:'liuxiangsong/web-utils',
    repoLabel:'查看源码',
    docsBranch:'gh-pages',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',
    smoothScroll: true
  }
}