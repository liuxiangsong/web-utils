# 示例代码

参考web-utils/src/plugins

# 笔记

- `Vue.use(MyPlugin)`  // calls `MyPlugin.install(Vue)`
  - //该方法会调用MyPlugin中的install方法，并把Vue作为参数传递给MyPlugin.install方法
