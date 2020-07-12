# CSS

## CSS 属性书写顺序

1. 布局定位属性：display/position/float/clear/visibility/overflow
2. 自身属性：width/height/margin/padding/border/background
3. 文本属性：color/font/text-decoration/text-align/vertical-align/white-space/break-word
4. 其它属性(CSS3)：content/cursor/border-radius/box-shadow/text-shadow/background:linear-gradient...

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
- 参考文章：[CSS 深入理解流体特性和 BFC 特性下多栏自适应布局](https：//www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)

## vertical-align

- 只有一个元素属于 inline 或是 inline-block 水平，其身上的 vertical-align 属性才会起作用
- inline-block 水平的元素：图片，按钮，单复选框，单行/多行文本框等 HTML 控件
- 使用 vertical-align：middle 设置图片居中时，需设置 font-size:0

## flex 布局

### flex 布局父项属性

- flex-direction ：设置主轴方向
  - row ：默认值，表示主轴为 X 轴，从左到右
  - row-reverse：从右到左
  - column：表示主轴为 Y 轴，从上到下
  - column-reverse：从下到上
- justify-content ：设置**主轴上的子元素排列方式**
  - flex-start：默认值，从头部开始（如果主轴是 X 轴，则从左到右）
  - flex-end：从尾部开始排列
  - **center**：在主轴居中对齐（如果主轴是 X 轴，则水平居中）
  - space-around：平分剩余空间
  - **space-between**：先两边贴边，再平分剩余空间（常用）
- flex-wrap ：设置子元素是否换行

  - nowrap：默认值，不换行（子元素在一行内摆放不下时，会强制修改子元素的宽度，以在一行显示）
  - wrap：换行

- align-content ：设置**侧轴上的子元素的排列方式**（**多行**）
  注：只有当子项出现**换行**的情况（多行）下生效
  - flex-start：默认值，在侧轴的头部开始排列
  - flex-end：在侧轴的尾部开始排列
  - **center**：在侧轴中间显示
  - **space-around**：子项在侧轴平分剩余空间
  - **space-between**：子项在侧轴先分布在两头，再平分剩余空间
  - stretch：子项元素高度平分父元素高度
- align-items： 设置侧轴上的子元素排列方式（**单行**）
  - **center**：垂直居中
  - flex-start：默认值，从上到下
  - flex-end：从下到上
  - stretch：拉伸（子盒子不能设置高度，否则没有效果）
- flex-flow ：复合属性，相当于同时设置了 flex-direction 和 flex-wrap。

### flex 布局子项属性

- flex：定义子项目分配剩余空间，用 flex 来表示占多少份
- align-self：控件子项自己在侧轴的排列方式（可设置单个子项与其它子项不一样的对齐方式，覆盖 align-items 属性）
- order：定义子项的排列顺序（数值越小，排列越靠前，默认为 0）
