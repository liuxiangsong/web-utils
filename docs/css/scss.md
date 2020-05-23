# @mixin 和 @include

- 语法：
  - @mixin <name> { ... } 、@mixin name(<arguments...>) { ... }
  - @include <name> 、@include <name>(<arguments...>)
- eg:

```css
@mixin flex-align($x_align: center, $y_align: center) {
  display: flex;
  justify-content: $x_align;
  align-items: $y_align;
}

.content {
  @include flex-align(left);
}
```

- 注：没有参数时，可不加括号。

# @extend

- 语法：@extend <selector>
- eg:

```css
.error {
  color: red;
}
.error-serious {
  @extend .error;
  font-size: 20px;
}
//生成的css为：.error,.error-serious{color:red;}和.error-serious{font-size:20px;}
```

- 注：@extend 和@mixin 区别：@extend 可理解为继承,而@include 则仅为@mixin 的占位符，因此使用@mixin 生成的 css 代码量会更多。

# @import

- 语法：@import <url>
- eg: @import './common.scss'

# 变量

- 语法：<variable>: <expression>
- eg：

```css
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

# 流程控制

- 语法：
  - @for <variable> from <expression> to <expression> { ... } //不包含最后一个数
  - @for <variable> from <expression> through <expression> { ... }
  - @each <variable> in <expression> { ... }
  - @while <expression> { ... }
  - @if <expression> { ... } @else if <expression> { ... } @else { ... }

```css
@for $i from 1 through 3 {
  li:nth-child(#{$i}) {
    background-color: lighten(blut, $i * 5%);
  }
}

$sizes: 40px, 50px, 80px;
@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
  }
}
```
