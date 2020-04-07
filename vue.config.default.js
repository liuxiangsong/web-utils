module.exports = {
    //部署应用包时的基本URL
    publicPath: '/', //                          Default:'/'
    //构建生成文件的目录
    outputDir: 'dist', //                        Default:'dist'
    //生成静态资源的目录(相对于 outputDir)
    assetsDir: '', //                             Default:''
    //生成index.html的路径(相对于 outputDir)
    indexPath: 'index.html', //                   Default:'index.html'
    //生成的静态资源名是否包含hash
    filenameHashing: true, //                     Default:true
    //用于 multi-page 模式下构建应用
    pages: undefined, //                          Default:undefined ; Type: string;
    //在开发环境每次保存时是否使用eslint-loader
    lintOnSave: true, //                          Default:true ; Type: boolean | 'warning' | 'default' | 'error';
    //支持所有 webpack-dev-server 的选项(注：host、port 和 https可能会被命令行参数覆盖；publicPath 和 historyApiFallback 不应该被修改)
    devServer: {
        //                                        Type: boolean | object
        overlay: {
            warnings: true, //为true时，将 eslint-loader抛出的警告显示在页面遮罩层上。
            errors: true //为true时，将 eslint-loader抛出的错误显示在页面遮罩层上。
        }
        //                                        Type: string | Object
        //proxy: {}
    },
    //如果 configureWebpack 值为object，则使用webpack-merge合并至最终的配置中；
    //如果值为函数，则它接收一个解析后的config作为入参，可在函数中对它修改并不返回任何结果，或返回一个新的config
    configureWebpack: {}, //                      Type: Object | Function
    //函数接收基于 webpack-chain 的 ChainableConfig 实例，它允许对内部的 webpack 配置进行更细粒度的修改
    chainWebpack: config => {}, //                Type: Function
    runtimeCompiler: false,
    transpileDependencies: [], //                 Default: [] ; Type: Array<string | RegExp>;
    //如果生产环境不需要source maps，可以将productionSourceMap设置为false，以加快生产环境的构建
    productionSourceMap: true, //                 Default: true
    crossorigin: undefined, //                    Default: undefined ; Type: string;
    integrity: true, //                           Default: true
    css: {
        requireModuleExtension: true
            // extract: true,
            //sourceMap:false,
            //loaderOptions:{}
    },
    //是否为 Babel 或 TypeScript 使用 thread-loader
    parallel: require('os').cpus().length > 1,
    pwa: {}, //                                    Type: Object
    pluginOptions: {}
}