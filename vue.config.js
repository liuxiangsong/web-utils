const alias={
    '@views': '@/views/',
    '@comps':'@/components/',
    '@assets': '@/assets',
    '@utils': '@/utils',
}
module.exports = {
    lintOnSave: true,
    configureWebpack: {
        resolve: { 
            alias
        },
    }
}