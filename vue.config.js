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
    runtimeCompiler: true,
    lintOnSave: true,
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static', 
    devServer: { 
        before: require('./mock/mock-server.js')
    },
    pages:{
        index: { 
            entry: 'src/main.js', 
            template: 'public/index.html',
        },
        page1:{
            entry: 'src/pages/page1/index.main.js',          
            template: 'src/pages/page1/index.html', 
            filename:'page1.html', 
            chunks:['chunk-vendors','page1']
        }, 
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