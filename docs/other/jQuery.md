# jQuery

[jQuery速查表](https://css.cuishifeng.cn/index.html)

- jQuery对象本质是利用$对DOM对象包装后产生的对象（伪数组形式存储）

## jQuery选择器

- 基础选择器
- 筛选选择器

## 样式操作

- css方法：
  - 读取属性值：$('div').css('属性')
  - 设置单组样式：$('div').css('属性',值)
  - 设置多组样式：$('div').css({'属性1':值,'属性2':值})

- 设置类样式方法
  - $('div').addClass('类名')
  - $('div').removeClass('类名')
  - $('div').toggleClass('类名')

## jQuery效果

- 显示隐藏：show()、hide()、toggle()
- 滑动：slideDown()、slideUp()、slideToggle()
- 淡入淡出：fadeIn()、fadeOut()、fadeToggle()、fadeTo()
- 自定义动画：animate()

## 属性操作

- 设置或获取元素固有属性值：prop()
- 设置或获取元素自定义属性值：attr()

## 文本内容操作

- 元素内容：html()
- 元素文本内容：text()
- 表单值：val()

## 元素操作

- 遍历：each()
- 添加：append()、prepend()、after()、before()
- 删除：remove()、empty()、html('')

## 事件

- 注册：
  - $('div').事件名
  - $('div').on(events,[selector],fn)
  - one()
  - 注：on可绑定一个或多个事件；on可实现事件委托（委派）；on可以给动态创建的元素绑定事件

- 解绑： off()
- 自动触发事件：
  - $('div').事件()
  - $('div').trigger('事件')
  - $('div').trigerHandler('事件'):不会触发元素的默认行为
