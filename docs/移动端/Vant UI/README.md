# Vant UI

## 常用问题

- vant-list 和 vant-pull-refresh 的使用
  - 参考[vant-list&pull-refresh.vue](./vant-list&pull-refresh.vue)
  - 注意设置 vant-list 的高度。
  - 情况 1：如上列中设置 vant-list 的 overflow-y: auto 时，加载新数据时滚动条可见，之后滚动条不可见。
  - 情况 2：van-list 不设置 overflow-y，而设置 van-list 父容器的 overflow-y 时，在下拉刷新时，如果一页数据没超过一屏的话，就算有多页数据也无法再加载；解决方法：确保一页数据超过一屏。
