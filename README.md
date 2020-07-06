## 项目结构

```
  ├──docs                      # MackDown文档文件及vuepress项目
  │   └── .vuepress            # vuepress项目
  ├── mock                     # 项目mock
  │   └── data                 # mock模拟数据
  ├── public
  │   └── favicon.ico          # Favicon
  │   └── index.html           # 项目模板
  ├── src
  │   ├── api                  # 所有请求接口
  │   ├── assets               # 本地静态资源
  │   ├── components           # 全局公用组件
  │   ├── directive            # 全局指令
  │   ├── filters              # 全局 filter
  │   ├── icons                # 项目所有 svg icons
  │   ├── layout               # 全局 layout
  │   ├── mixins               # 全局 mixins
  │   ├── pages                # 多页面应用相关文件
  │   ├── plugins              # 全局 plugins
  │   ├── router               # 全局路由
  │   ├── store                # 全局 store管理
  │   ├── utils                # 工具库
  │   ├── views                # 所有页面
  │   ├── App.vue              # 入口页面
  │   ├── main.js              # 入口文件 加载组件 初始化等
  │   └── permission.js        # 全局导航守卫（权限管理）
  │   └── main.js              # 应用入口
  ├── README.md                # 项目说明文件
  ├── vue.config.js            # vue配置文件
  └── package.json
```
