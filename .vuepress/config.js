module.exports={
  title:'web-utils',
  description:'web utils',
  themeConfig: {
    repo:'liuxiangsong/web-utils',
    repoLabel:'查看源码',
    docsBranch:'gh-pages',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',

    logo: '/assets/img/favicon.ico',
    // navbar:false,   //禁用顶部导航栏
    nav:[
      { text: '指南', link: '/web-utils/' },
    ],
    // sidebar:'auto',
    // sidebarDepth:3,  //默认为1，将提取h2的标题；0为禁用标题链接；2：提取h2和h3标题
    // sidebar:[
    //   '/',
    //   ['/page1','测试页面']
    // ],
    sidebar:{
      '/web-utils/': [{
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


    // displayAllHeaders: true // 默认值：false
   
    smoothScroll: true
  }
}