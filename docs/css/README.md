# CSS

## CSS 属性书写顺序

1. 布局定位属性：display/position/float/clear/visibility/overflow
2. 自身属性：width/height/margin/padding/border/background
3. 文本属性：color/font/text-decoration/text-align/vertical-align/white-space/break-word
4. 其它属性(CSS3)：content/cursor/border-radius/box-shadow/text-shadow/background:linear-gradient...

## CSS 权重

标签：1；类、伪类：10；ID：100；行内样式：1000；!important：无穷大

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

### flex 布局：容器属性

- display:flex / inline-flex
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
  - nowrap：默认值，不 换行（子元素在一行内摆放不下时，会强制修改子元素的宽度，以在一行显示）
  - wrap：换行(从上到下，第一行在最上面)
  - wrap-reverse ：换行（从下到上，第一行在最下面）

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
- flex-flow ：复合属性，相当于 flex-direction 和 flex-wrap。

### flex 布局：子项属性

- flex：定义子项目分配剩余空间，可用 flex 来表示占多少份。（复合属性，相当于flex-grow,flex-shrink和flex-basis的简写，默认值：0 1 auto,后两个属性可选)
  - 快捷值：auto(1 1 auto),none(0 0 auto)
- align-self：控制子项自己在侧轴的排列方式（可设置单个子项与其它子项不一样的对齐方式，覆盖 align-items 属性）
- order：定义子项的排列顺序（数值越小，排列越靠前，默认为 0）
- flex-grow：定义子项目放大的比例；默认为0，即如果存在剩余空间，也不放大
- flex-shrink：定义项目的缩小比例；默认为1，即如果空间不足，该项目将缩小；负值无效。
- flex-basis：定义在分配剩余空间之前，项目占据的主轴空间。

## grid 布局

### grid 布局：容器属性

- display: grid / inline-grid
- grid-template-columns: 定义每列的列宽
- grid-template-rows: 定义每行的行高
  - repeat(重复的次数，要重复的值) eg:repeat(2,20px 30px)
  - auto-fill：自动填充（子项大小固定，行或列的数量不确定时使用）  eg:repeat(auto-fill,100px)
  - fr：份数
  - minmax(最小值，最大值)：表示长度范围
  - auto：长度自动
  - 网格线名称，使用[]; eg：grid-template-columns: [c1] 100px [c2] 100px [c3]  两列，三根竖线的名字
- 设置间距：
  - row-gap(grid-row-gap)：设置行与行的间隔（行间距）
  - column-gap(grid-column-gap)：设置列与列的间隔（列间距）
  - gap(grid-gap): 复合属性，相当于row-gap column-gap。如果省略第二个值，就默认第二个值等于第一个值。
- grid-template-areas：定义区域。区域名会影响网格线；区域起、始网格线，自动命名为“区域名-start”和“区域名-end”
- grid-auto-flow: 定义子项排列的顺序，默认为row,即按行一行一行地排列
  - row dense:按行排列，并尽可能紧密填满，尽量不出现空格
- 单元格内部子元素的排列方式：
  - justify-items: 水平方向子元素的排列方式
  - align-items: 垂直方向子项的排列方式
  - place-items:复合属性，相当于align-items justify-items
    - 可选值：start、end、center、stretch
- 整个内容区域在容器里的排列方式：
  - justify-content：整个内容区域的水平排列方式
  - align-content: 整个内容区域的垂直排列方式
  - place-content: 复合属性，相当于align-content justify-content
    - 可选值：start、end、center、stretch、space-around、space-between、space-evenly
- grid-auto-columns、grid-auto-rows：如果一些子项设置了指定位置，且不在现有网格范围内，则可用这两个属性来设置它们的宽、高
- grid-template：复合属性，相当于grid-template-columns、grid-template-rows和grid-template-areas
  
### grid 布局：子项属性

- 设置子项四条边线，分别定位于哪根网格线：
  - grid-column-start：左边框所在的垂直网格线
  - grid-column-end：右边框所在的垂直网格线
  - grid-row-start：上边框所在的水平网格线
  - grid-row-end：下边框所在的水平网格线
    - 值为数字时，表示第几根网络线
    - 值也可为网格线的名字
    - 还可用span关键字，表示占多少个网络。eg:grid-column-start: span 2; 表示该子项占两列
  - grid-column：复合属性，相当于grid-column-start grid-column-end
  - grid-row：复合属性，相当于grid-row-start grid-row-end
    - 两个值用 / 作分隔。 eg:grid-column: 1 / 3; 表示从第一根列线到第三根列线
- grid-area：
  - 指定子项放在哪一个区域。 eg: grid-area: e;
  - 也可当成grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式。eg:grid-area: 1 / 1 / 3 / 3;
- 设置子项单元格内子元素的排列方式：
  - justify-self: 水平位置，类似于justify-items，但只作用于单个项目
  - align-self: 垂直位置
  - place-self:复合属性，相当于align-self justify-self
