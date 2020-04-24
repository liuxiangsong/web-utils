# includes

- 语法：
  - string.includes(searchvalue, start)
    - 参数 start 可选，默认为 0。
    - eg：`hello'.includes('e')`
  - arr.includes(searchElement, fromIndex)
    - 参数 fromIndex 可选，默认为 0.
    - eg：`[(1, 2, 3)].includes(5)`
- 返回布尔值，用于判断字符串或数组中是否包含指定参数

# filter

- 语法：array.filter(function(currentValue,index,arr), thisValue)
  - eg：`[1,2,3].filter(f=>f>2)`
- 返回符合条件的所有元素，如果都不符合，则返回空数组。

# find

- 语法：array.find(function(currentValue, index, arr),thisValue)
  - 除 currentValue 外，其它参数可选。
  - thisValue 为传递给函数的值一般用 "this" 值。
- 返回第一个符合条件的数组成员,如果都不符合条件，则返回 undefined。

  `[1,2,3].find(f=>f>1)`

# findIndex

- 类似于 find 方法。
- 返回第一个符合条件的数组成员的位置，如果都不符合条件，则返回-1。
