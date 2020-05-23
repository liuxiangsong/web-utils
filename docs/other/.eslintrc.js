module.exports = {
    'root': true,
    'env': {
        'node': true,
        'browser':true, //让eslint能识别浏览器的全局变量，如window等
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    'rules': { 
        'no-console': 'off',
        //第一个参数：0或'off' 关闭，1或'warn' 警告，2或'error' 错误
        'quotes': [2,'single'], //建议使用单引号
        'semi': [2,'never'],
        // 第二个参数2表示用4个空格作缩进
        'indent': ['error', 4, {
            'SwitchCase': 1
        }], 
        'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
        // 强制使用驼峰拼写法命名规定
        'camelcase': [0, {
            'properties': 'always'
        }]
    },
    // 指定解析器
    'parserOptions': {
        'parser': 'babel-eslint', 
        'ecmaVersion': 6    // 指定js版本。语法上的支持

    }  
}