const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const ProgressBarPlugin=require('progress-bar-webpack-plugin')
const chalk=require('chalk')

const alias={
    '@views': '@/views/',
    '@comps':'@/components/',
    '@assets': '@/assets',
    '@utils': '@/utils',
}

const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

const pagesConfig=require('./src/pages/pagesConfig.js')
pagesConfig.index={ 
    entry: 'src/main.js', 
    template: 'public/index.html',
}
module.exports = {
    runtimeCompiler: true,
    lintOnSave: true,
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static', 
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: { 
        before: require('./mock/mock-server.js')
    },
    pages:pagesConfig,
    css:{
        loaderOptions: {
            sass: {
                prependData: '@import "@assets/style/mixin.scss";'
            }
        }
    },
    configureWebpack:{
        plugins:[
            // 告诉webpack哪些库不参与打包，
            new webpack.DllReferencePlugin({ 
                manifest: resolve( 'dll/manifest.json'),
            }),
            // 将filepath中指定的文件复制到webpack输出根目录，并在html中添加对该文件的引用
            new AddAssetHtmlWebpackPlugin({
                filepath: resolve( 'dll/vendors0.js'),
            }),
            new AddAssetHtmlWebpackPlugin({
                filepath: resolve( 'dll/vendors1.js'),
            }),
            new ProgressBarPlugin({   //显示构建进度及耗时
                format:' build [:bar]' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
                clear:false}),
            
        ] 
    },
    chainWebpack(config) { 
        config.resolve.alias.merge(alias)
        //set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            }) 
     
    }
}