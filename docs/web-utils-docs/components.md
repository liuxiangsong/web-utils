# 组件

## TableColumnManager（表格列管理）

### 使用方式

```css
<table-column-manager :visible.sync="tableColumnManagerVisible" :tableColumns.sync="tableColumns" />
```

### 说明

- 拖曳排序基于 vuedraggable 实现，所以需安装 vuedraggable 包。
- tableColumns 数组中的每个对象必须包含 text 属性（表格列显示的文本）。

## SvgIcon

### 使用方式

1. 安装 svg-sprite-loader 包；
2. 修改 vue.config.js 中的 webpack 配置；
3. icon 图标统一放在 src/icons/svg 下；
4. 在 main.js 中调用 src/icons/index.js 注册 SvgIcon 组件，及自动导入 svg 文件。

```js
    chainWebpack(config) {
        //set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

    }
```

```css
<svg-icon class-name="search-icon" icon-name="search" />
```

### 说明

- class-name ：设置图标的样式， 如颜色、字体大小等。
- icon-name ：图标名称
- 详细说明可参考[手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
