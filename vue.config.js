const alias={
    '@views': '@/views/',
    '@comps':'@/components/',
}
module.exports = {
    lintOnSave: true,
    configureWebpack: {
        resolve: { 
            alias
        },
    }
}