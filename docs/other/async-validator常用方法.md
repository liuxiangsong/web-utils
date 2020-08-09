# async-validator 常用方法

## rules

```js
const validateAge= (rule, value, callback) => {
 if(value<18){
 return callback(new Error('必须年满18岁'));
 }
  callback()
}
rules:{
  name:[{ required: true, message: '姓名不能为空', trigger: 'blur'},
   {min: 2,max: 50, pattern: /^[\u4E00-\u9FA5]{2,50}$/, message: "长度在 2 到 10 个中文字符",trigger: "blur"},],
  age:[{validator: validateAge, trigger: 'blur' }]
  number:[{ required: true,type:'integer',message: '请输入大于零的整数', transform(value) {return Number(value)},min:1, trigger: 'blur'}],
  phone: [{required: true, pattern: /^1[345789]\d{9}$/, message: '请输入正确的手机号' ,trigger: 'blur' }],
}
```

## async-validator GitHub 仓库地址

- [async-validator](https://github.com/yiminghe/async-validator)
