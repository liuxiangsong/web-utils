# typescript

## 基础类型

- 布尔值：boolean
- 数字：number
- 字符串：string
- 数组：元素类型[]、Array<元素类型>
- 元组Tuple：[元素类型1,元素类型2,...]
  - 当访问一个越界的元素，会使用联合类型替代
- 枚举：enum
- Any
- Void
- Null 和 Undefined
- Never
- Object

### 类型断言

- “尖括号”语法(JSX中不支持)：(<string>someValue).length
- as语法：(someValue as string).length

## 接口

- 可选属性
- 只读属性:readonly
- 函数类型
- 可索引的类型
  - TypeScript支持两种索引签名：字符串和数字
- 实现接口
- 继承接口
- 混合类型
- 接口继承类

## 类

- 继承
- readonly修饰符
- 参数属性
- 存取器(属性:get,set)
- 静态属性
- 抽象类
