[参考链接](https://www.bilibili.com/video/BV1e7411j7T5?p=1)

# webpack 性能优化

## 开发环境性能优化

    - 优化打包构建速度

      - HMR 模块热替换

    - 优化代码调试
      - source-map

## 生产环境性能优化

    - 优化打包构建速度

      - oneOf
      - babel 缓存
      - 多进程打包
      - externals
      - dll

    - 优化代码运行的性能

      - 文件缓存（hash、chunkhash、contenthash）
      - tree shaking （树摇）
      - code split（代码分隔）
        - 单入口项目：默认打包输出到一个文件。
          - 可以设置 optimization，会把引用 node_module 的文件单独打包输出。
          - 在 js 中引用其它 js 文件时，可以使用 import 语法引入。
        - 多入口。
          - 设置 optimization 会提取公共代码，以防止打包重复代码。
          - 也可用 import 语法。
      - 懒加载、预加载（预加载兼容性不好）
      - PWA

# webpack 的常用配置项

## entry

    - string:
      - eg: './src/index.js'
      - 单入口，打包形成一个chunk，输出一个bundle文件。
      - chunk的默认名称是main
    - array:
      - eg: ['./src/index.js','./src/add.js']
      - 多入口，所有入口文件最终只会形成一个chunk，只会输出一个bundle文件。
      - 示例中add.js会被打包进index.js，同index.js一起输出。
      - 使用场景：只在HMR功能中让html热更新生效。
    - object
      - eg: {index: './src/js/index.js', add: './src/js/add.js'}
      - 多入口，有多少个入口文件，就会形成多少个chunk，输出相应数量的bundle文件。
      - chunk的名称就是key。

## output

    - filename:'js/[name].js
    - path:resolve(__dirname, 'dist')       //输出文件根目录（所有资源输出的公共目录）
    - publicPath:'/'                        //所有资源引入的公共路径前缀。
    - chunkFilename:'js/[name]_chunk.js'    //非入口chunk的命名
    - library:'name'                        //整个输出bundle向外暴露的变量名
    - libraryTarget:'window'                //将输出bundle的变量名添加到window上。

## module

    - rules内的loader
      - test:/\.js$/
      - exclude:/node_modules/
      - include:resolve(__dirname,'src')  //只检查src下的js文件
      - enforce:'pre'            //值为'pre’时，表示优先执行此loader，为'post'时，则表示延后执行
      - loader:'eslint-loader'   //单个loader时直接用loader
      - use:['style-loader','css-loader']  //多个loader时用use
      - oneOf:[]    //每个文件只会使用oneOf中的一个loader
      - options:{}  //修改loader的配置项

## resolve

    - 作用：解析模块的规则
    - alias:{}    //解析模块路径别名，在引用文件路径时，可简写文件路径
    - extensions:['.js','.json',...] //引用文件路径时，可省略文件扩展名。
    - modules:['node_modules']  //指示webpack解析模块去找哪个目录

## devServer

```js
devServer：{
    contentBase: resolve(__dirname, 'dist'),   //运行代码的目录
    watchContentBase:true,   //监视contentBase目录下的所有文件，一旦有文件变化就reload
    watchOptions:{ignored:/node_modules/} ,   //忽略对node_modules内文件的监视
    compress:true,   //启动gzip压缩
    port:5000,
    host:'localhost',
    open:true,   //自动打开浏览器
    hot:true ,   //开启HMR功能
    clientLogLevel:'none',   //在终端中不要显示启动服务器日志信息
    quiet:true,    //除了一些基本启动信息以外，其它信息不要显示在终端
    overlay:false,  //如果出错，不要全屏提示
    proxy:{
      '/api':{ //一旦devServer服务器接受到 /api/xxx的请求，就会把请求转发到target
          target:'http://localhost:3000',
          pathRewrite:{ // 发送请求时，请求路径重写
            '^/api':''  //将/api/xxx 转化为/xxx (去掉/api)
          }
      }
    }
  }
```

## optimization

```js
optimization: {
    splitChunks: {
     chunks: 'all',     // all表示同步和异步代码都进行代码分割，默认值为async
     //以下miniSize到cacheGroups为默认值，可以不写
     minSize:30*1024,   //分割的chunk最小为30kb
     maxSize:0,         //最大没限制
     minChunks:1,       //提取的chunk最少被引用1次
     maxAsyncRequests:2,//按需加载时并行加载的文件最大数量
     automaticNameDelimiter:'~', //名称连接符
     name:true,         //可以使用命名规则
     cacheGroups:{      // 分割chunk的组
       vendors:{
         test:/[\\/]node_modules[\\/]/,  //node_modules文件会被打包到vendors组的chunk中。eg:vendors~xxx.js
         priority:-10   //优先级
       },
       default:{
         minChunks:2,   //要提取的chunk最少被引用2次
         priority:-20,
         //如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
         reuseExistingChunk:true
       }
     }
  },
  //将当前模块里记录其它模块的hash单独打包为一个runtime文件
  //解决修改a文件，导致b文件的contenthash变化的问题。
  runtimeChunk:{
    name:entrypoint=>`runtime-${entrypoint.name}
  },
  minimizer:[
    //配置生产环境的压缩方案（需安装terser-webpack-plugin）
    new TerserWebpackPlugin({
      cache:true,
      parallel:true,  //开启多进程打包
      sourceMap:true
    })
  ]
},
```

# PWA

    - 安装 workbox-webpack-plugin
    - webpack 配置
      ```js
      const WorkboxPlugin = require('workbox-webpack-plugin')
      // 在 plugins 添加下列配置(WorkboxPlugin.GenerateSw用于生成serviceWorker配置文件)
      new WorkboxPlugin.GenerateSw({
        clientsClaim: true,
        skipWaiting: true,
      })
      ```
    - 入口 js 中添加下面代码
      ```js
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/service-worker.js') //注册serviceWorker配置文件
            .then((register) => {
              console.log('注册成功', register)
            })
            .catch((error) => {
              console.log('注册失败', error)
            })
        })
      }
      ```
    - serviceWorker 代码必须运行在服务器上。

      - 可以使用 serve 包，它可以快速创建服务器。
      - 用指令'npx serve -s dist'来启动服务器，将 dist 目录下所有资源作为静态资源暴露出去。

      #

# thread-loader 多进程打包

    - 安装 thread-loader
    - 进程启动大概为 600ms，进程通信也有开销，所以对于消耗短的 loader，则不要使用 thread-loader。
    - 要对某个 loader 使用 thread-loader，则要把 thread-loader 写在相应 loader 的前面。
    - 默认开启的进程数量为电脑核数减 1，也可通过配置指定。

# DLL

    - 与 webpack 中 externals 的对比：

      - 两者都是让 webpack 忽略对指定的第三方库进行打包。
      - externals 中被忽略的第三方库，需要自己手动在 html 中添加引用。
      - DLL 需要先进行一次单独打包。

    - 使用步骤：

      1. 新建并配置 webpack.dll.config.js 文件。
      2. 运行'webpack --config webpack.dll.config.js'打包指令，将配置里的三方库打包输出，并生成 manifest.json 文件。
      3. 安装 add-asset-html-webpack-plugin。
      4. 在 plugins 中添加下面代码

      ```js
        //告诉webpack哪些库不参与打包
        new webpack.DllReferencePlugin({
          manifest: resolve(__dirname, 'dll/manifest.json'),
        }),
        // 将filepath中指定的文件复制到webpack输出根目录，并在html中添加对该文件的引用
        new AddAssetHtmlWebpackPlugin({
          filepath: resolve(__dirname, 'dll/vendors.js'),
        }),
      ```
