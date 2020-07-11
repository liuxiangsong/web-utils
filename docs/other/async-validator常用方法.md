# async-validator常用方法

## rules

```js
const validateAge= (rule, value, callback) => {
 if(value<18){
  callback(new Error('必须年满18岁'));
 }
}
rules:{
  name:[{ required: true, message: '姓名不能为空', trigger: 'blur'],
  age:[validator: validateAge, trigger: 'blur' }]
  number:[{ required: true,type:'integer',message: '请输入大于零的整数', transform(value) {return Number(value)},min:1, trigger: 'blur'}],

}
```

## async-validator GitHub仓库地址

- [async-validator](https://github.com/yiminghe/async-validator)
