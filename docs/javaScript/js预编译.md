# js预编译

## 函数预编译及执行过程

```js
function test(a,b) {
  console.log('a :>> ', a); //function a() {}
  console.log('b :>> ', b); //2
  console.log('c :>> ', c); //function c(){}
  function a() {}
  function c(){}
}
test(1,2)
```

1. 函数执行前，先进行词法分析，在函数内部创建AO(Activation Object)；
2. 查找形参和变量声明作为AO属性，并赋值为undefined;(AO={a:undefined,b:undefined})
3. 实参值赋值给形参;(AO={a:1,b:2})
   2.1. 先查找形参；
   2.2. 然后在函数内部生成一个arguments对象，将实参保存至arguments中，并将arguments中对应的值赋值给形参；
   2.3. 最后再查找变量声明；
4. 查找函数声明作为AO属性，并赋值为函数体；(AO={a:function a() {},b:2},c:function c())
5. 词法分析完后，则函数正式执行，执行时去AO上查找对应的局部变量或函数。如果在执行中，碰到有函数调用，则又开始新一轮的词法分析。
