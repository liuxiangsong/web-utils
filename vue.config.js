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
    devServer: { 
        before: require('./mock/mock-server.js')
    },
    pages:pagesConfig,
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