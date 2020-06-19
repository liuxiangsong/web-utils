# CSS

## BFC （块级格式化上下文）

- 特性：BFC 中内部子元素的表现不会对 BFC 外部元素产生影响。
- 形成 BFC 的条件：
  - float 的值不为 none
  - overflow 的值为 auto、scroll 或 hidden
  - display 的值为 table-cell、table-caption 或 inline-block
  - position 的值不为 relative 和 static;（absolute，fixed）
- 适用场景：
  - 处理 margin 重叠和穿透问题
  - 自适应布局（结合 float 实现）
  - 防止字体环绕
  - 清除浮动
- 参考文章：[CSS 深入理解流体特性和 BFC 特性下多栏自适应布局](https://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)

## vertical-align

- 只有一个元素属于 inline 或是 inline-block 水平，其身上的 vertical-align 属性才会起作用
- inline-block 水平的元素：图片，按钮，单复选框，单行/多行文本框等 HTML 控件
- 使用 vertical-align：middle 设置图片居中时，需设置 font-size:0
