# Vue CLI 相关配置笔记

## [审查项目的 Webpack Config](https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config)

- 把 webpack 配置生成成一个文件（_注：生成的文件不是一个有效的 webpack config 文件_）

  > vue inspect > output.js

- 通过指定路径审查特定项配置

  > vue inspect module.rules.0 (_审查第一条 rule_)

- 通过指定 rule 或 plugin 的名字查看

  > vue inspect --rule vue
  > vue inspect --plugin html

- 查看所有 rule 和 plugin 的名字
  > vue inspect --rules
  > vue inspect --plugins

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
