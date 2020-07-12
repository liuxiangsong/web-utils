# js 常用方法

## ES5

- Array 方法：every、some 、forEach、filter 、indexOf、lastIndexOf、isArray、map、reduce、reduceRight。
- String.prototype.trim。

### filter

- 语法：array.filter(function(currentValue,index,arr), thisValue)
  - 除 currentValue 外，其它参数可选。
  - thisValue 为传递给函数的值一般用 "this" 值。
- 返回符合条件的所有元素，如果都不符合，则返回空数组。

### every

- 语法：array.every(function(currentValue,index,arr), thisValue)
- 返回布尔值，如果都符合条件就返回 true,否则返回 false。

### some

- 语法：array.some(function(currentValue,index,arr),thisValue)
- 返回布尔值，如果有一个元素符合条件就返回 true,否则返回 false。

### map

- 语法：array.map(function(currentValue,index,arr), thisValue)
- 返回一个新数组，新数组中的元素为原始数组元素调用函数处理后的值。

### reduce

- 语法：array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  - total：必需。初始值, 或者计算结束后的返回值。
  - currentValue：必需。当前元素。
  - currentIndex、arr：可选。
  - initialValue：可选。传递给函数的初始值。
- eg：分组

```js
let arr = [
  { name: 'group1', count: 2, color: 'red' },
  { name: 'group2', count: 2, color: 'blue' },
  { name: 'group2', count: 2, color: 'red' },
]
let obj = arr.reduce((groups, cur) => {
  let key = cur.name
  groups[key] = groups[key] || []
  groups[key].push(cur)
  return groups
}, {})
```

## ES6 以上

- Array 方法：includes、find、findIndex、entries、keys、values
- String 方法：padStart、padEnd

### includes

- 语法：
  - string.includes(searchvalue, start)
    - 参数 start 可选，默认为 0。
    - eg：`hello'.includes('e')`
  - arr.includes(searchElement, fromIndex)
    - 参数 fromIndex 可选，默认为 0.
    - eg：`[(1, 2, 3)].includes(5)`
- 返回布尔值，用于判断字符串或数组中是否包含指定参数

### find

- 语法：array.find(function(currentValue, index, arr),thisValue)
- 返回第一个符合条件的数组成员,如果都不符合条件，则返回 undefined。

### findIndex

- 语法：array.findIndex(function(currentValue, index, arr), thisValue)
- 返回第一个符合条件的数组成员的位置，如果都不符合条件，则返回-1。

### Array.of

- 方法用于将一组值，转换为数组。
- eg:Array.of(3) // [3]

## 注意点：数组的空位

- ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位。
  - forEach(), filter(), reduce(), every() 和 some()都会跳过空位。
  - map()会跳过空位，但会保留这个值。
  - join()和 toString()会将空位视为 undefined，而 undefined 和 null 会被处理成空字符串。
- ES6 则是明确将空位转为 undefined。
  - Array.from 方法、扩展运算符（...）会将空位转为 undefined。
  - for...of 循环也会遍历空位。
    -entries()、keys()、values()、find()和 findIndex()会将空位处理成 undefined。
