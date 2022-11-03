- chrome 无法同步
  - 打开chrome://flags/#account-consistency，启用Use Chrome Sync sandbox

# 插件
> [参考资料](https://juejin.cn/post/6844903732874854414)


- Console Importer
  > 可以在console面板中安装npm包，安装后在console面板通过$i函数安装包，如安装dayjs：$i('dayjs')
# Chrome DevTools

## 快捷键
- Ctrl + Shift + P ：命令菜单
- Ctrl + Shift + D ：DevTools窗口布局切换

## 常用方法或变量
- copy函数，可复制console面板中的变量值
- $0、$1...$4：$0表示在Elements面板中当前选中的节点，$1则是上次选择的节点
- $：document.querySelector函数的别名
- $$：document.querySelectorAll函数的别名
- $_：上一次执行结果的引用