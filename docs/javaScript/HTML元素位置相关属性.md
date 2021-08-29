# HTML元素位置相关属性

## 常用方法

- element.scrollIntoView({behavior: "smooth"})
  - 滚动条滚动至相应某元素
  - behavior :定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
- element.getBoundingClientRect()
  - width/height:边框 + 内边距 + 内容框
  - top(bottom/left/right):元素的上边界和父元素上边界的距离
  - x/y:元素的左上角和父元素左上角的距离

## 事件坐标

### 鼠标事件相关坐标属性

| event属性         | 作用                                                            |
| :---------------- | :-------------------------------------------------------------- |
| **event.pageX/Y** | 相对于页面原点（左上角）的距离，页面没有滚动条时于clientX/Y相等 |
| event.clientX/Y   | 相对于浏览器可视区域原点（左上角）的距离                        |
| event.screenX/Y   | 相对于屏幕原点（左上角）的距离                                  |

## 元素坐标

  *注：返回的数值都不带单位*

### 元素offset系列(元素偏移量)

- 元素offset系列属性（**相对于带有定位属性的父级元素**）

| offset系列属性       | 作用                                                                     |
| :------------------- | :----------------------------------------------------------------------- |
| element.offsetParent | 返回作为该元素带有定位属性的父级元素，如果父级元素都没有定位，则返回body |
| element.offsetTop    | 返回该元素与带有定位的父元素上方的偏移距离                               |
| element.offsetLeft   | 返回该元素与带有定位的父元素左边框的偏移距离                             |
| element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度                                  |
| element.offsetHeight | 返回自身包括padding、边框、内容区的高度                                  |

- offset与style区别
  - offset获得的数值没有单位，style.width等是带有单位的字符串
  - offsetWidth等属性是只读属性，style.width是可读写属性。（**style只能取得行内样式表中的样式值**）
  - **获取元素大小位置用offset，改变元素值用style**

### 元素可视区client系列

- 元素**可视区**client系列属性
  
| client系列属性       | 作用                                        |
| :------------------- | :------------------------------------------ |
| element.clientTop    | 返回元素上边框的高度                        |
| element.clientLeft   | 返回元素左边框的宽度                        |
| element.clientWidth  | 返回自身包括padding、内容区的宽度，不含边框 |
| element.clientHeight | 返回自身包括padding、内容区的高度，不含边框 |

- 与offsetWidth的区别：clientWidth不含边框的宽度，而offsetWidth是包含边框的宽度。

### 元素滚动scroll系列

- 元素scroll系列属性（**含超出元素盒子大小的部分**）

| scroll系列属性       | 作用                             |
| :------------------- | :------------------------------- |
| element.scrollTop   | 返回被卷去的上侧距离             |
| element.scrollLeft   | 返回被卷去的左侧距离             |
| element.scrollWidth  | 返回自身**实际**的宽度，不含边框 |
| element.scrollHeight | 返回自身**实际**的高度，不含边框 |

- 与clientHeight的区别，scrollHeight的高度是实际高度（含超出元素本身部分的高度），clientHeight只为可见区域的高度。
- 页面被卷去的头部、左侧部分：可以用window.pageYOffset、window.pageXOffset获得。(只兼容IE9以上)
- 注：元素被卷去的头部是**element.scrollTop**，但页面被卷去的头部则是用**window.pageYOffset**获取。

### 总结

- offset系列经常用于获取元素位置：**offsetLeft、offsetTop**
- client系列经常用于获取元素大小：**clientWidth、clientHeight**
- scroll系列经常用于获取滚动距离：**scrollTop、scrollLeft**
- 注意**页面滚动的距离**是通过window.pageYOffset获取。
