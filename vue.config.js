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
  
module.exports = {
    lintOnSave: true,
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    configureWebpack: {
        resolve: { 
            alias
        },
        //     module:{
        //         rules:[
        //             {
        //                 test: /\.svg$/,
        //                 loader: 'svg-sprite-loader',
        //                 include: [resolve('src/icons')],
        //                 options: {
        //                     symbolId: 'icon-[name]'
        //                 }
        //             },
        //             // {
        //             //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        //             //     loader: 'url-loader',
        //             //     options: {
        //             //         limit: 10000,
        //             //         name: 'images/[name].[hash:8].[ext]',
        //             //         // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        //             //     },
        //             //     exclude: [resolve('src/icons')]
        //             // }, 
                  
    //         ]
    //     }
    },
    chainWebpack(config) { 
    
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
            .end()
     
    }
}