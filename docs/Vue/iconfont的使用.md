# symbol 引用

1. 拷贝项目 iconfont 中生成的 symbol 代码，在 vue 项目中的 index.html 添加该引用。

```html
<script src="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"></script>
```

2. 在 vue 中新建 components/IconSvg.vue 组件

```html
<style lang="css">
  .fonticon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
<template>
  <svg class="fonticon" aria-hidden="true">
    <use :xlink:href="'#' + type"></use>
  </svg>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      }
    }
  }
</script>
```

3. 在 main.js 中将 IconSvg.vue 注册为全局组件

```javascript
import IconSvg from '@/components/IconSvg.vue'
Vue.component('icon-svg', IconSvg)
```

4. 在组件中使用

```html
<icon-svgstyle="color:red" :type='iconName' ></icon-svg>;
```
