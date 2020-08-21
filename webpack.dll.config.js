/**
 * 使用dll技术，对某些库（第三方库，如jquery、vue、react……）进行单独打包
 * 运行webpack时，默认查找的是webpack.config.js配置文件。
 * 现在需要运行webpack.dll.js配置文件时，需要指定配置文件名去进行打包：'webpack --config webpack.dll.config.js’
*/
const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
    entry: {
    // 键：最终打包生成的[name],此列中即vendors
    // 值：要打包的库，数组类型，表示可以将多个三方库打包在一起输出 
        vendors0: ['vue',  'vuex', 'axios', 'vue-router'],
        vendors1: ['element-ui']

    },
    output: { 
        filename: '[name]@[hash].js',  // [name]对应入口中的名称，此列中为vendors
        path: resolve(__dirname, 'dll'), 
        //vendors.js中暴露出的全局变量名,给DllPlugin中的name使用，
        //所以要和webpack.DllPlugin中的`name: '[name]_[hash]',`保持一致
        library: '[name]_[hash]', 
    },
    plugins: [
    // 打包生成一个manifest.json文件
        new webpack.DllPlugin({ 
            name: '[name]_[hash]',// 映射库暴露的内容名称，对应output中library的名称 
            path: resolve(__dirname, 'dll/manifest.json'),// 输出文件路径
        }),
    ],
    mode: process.env.NODE_ENV === 'production'? 'production' : 'development',
}
