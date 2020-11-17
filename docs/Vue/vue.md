# Vue 注意点

- 如果需要将 import()转换为 require()时，需设置环境变量 VUE_CLI_BABEL_TRANSPILE_MODULES = true
  - eg：使用 mock-server 时，需要设置该环境变量

- keep-alive
  - keep-alive 必须加在组件直接关联的 router-view 上；
  - 未使用include或exclude时，会缓存所有组件；
  - 使用include或exclude时，只会缓存含有name属性的组件