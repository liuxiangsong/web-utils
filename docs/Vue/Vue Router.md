# Vue Router

## 路由记录

```js
 routes:[
   //RouteConfig
   {
    path: string,
    component?: Component,
    name?: string, // for named routes
    components?: { [name: string]: Component }, // for named views
    redirect?: string | Location | Function,
    props?: boolean | Object | Function,
    alias?: string | Array<string>,
    children?: Array<RouteConfig>, // for nested routes
    beforeEnter?: (to: Route, from: Route, next: Function) => void,
    meta?: any,

    // 2.6.0+
    caseSensitive?: boolean, // use case sensitive match? (default: false)
    pathToRegexpOptions?: Object // path-to-regexp options for compiling regex
 ]
```

## 编程式导航

- router.push(location, onComplete?, onAbort?)
- router.replace(location, onComplete?, onAbort?)
- router.go(n)

注：通过路由路径path导航时，传参使用query;通过路由名称name导航时，传参使用params。（类似于通过url传参时，使用的是查询参数）

## 导航守卫

### 分类

- 全局的守卫
  - beforeEach(to,from, next)
  - beforeResolve(to,from, next)
  - afterEach(to,from)
- 路由独享的守卫
  - beforeEnter(to,from, next)
- 组件内的守卫
  - beforeRouteEnter(to,from, next)
  - beforeRouteUpdate(to,from, next)
  - beforeRouteLeave(to,from, next)

### 完整的导航解析流程

1. 导航被触发。
2. 失活的组件里调用 **beforeRouteLeave** 守卫。
3. 调用全局的 **beforeEach** 守卫。
4. 在重用的组件里调用 **beforeRouteUpdate** 守卫 (2.2+)。
5. 在路由配置里调用 **beforeEnter。**
6. 解析异步路由组件。
7. 在被激活的组件里调用 **beforeRouteEnter。**
8. 调用全局的 **beforeResolve** 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 **afterEach** 钩子。
11. 触发 DOM 更新。
12. 调用 **beforeRouteEnter** 守卫中传给 **next** 的回调函数，创建好的组件实例会作为回调函数的参数传入。

注：
**组件没重用时**

1. before类型的守卫函数钩子执行顺序为：全局前置守卫(beforeEach)-->路由独享守卫(beforeEnter)-->组件内守卫(beforeRouteEnter)；
2. "enter类型的守卫"执行后，再执行全局解析守卫(beforeResolve) ；
3. 导航确认后执行全局后置守卫(afterEach);
4. 组件创建并挂载(mounted)后，最后执行组件内守卫beforeRouteEnter的回调函数(next)，并将组件实例作为参数传入。

****组件重用时**

1. 全局前置守卫(beforeEach)-->组件内守卫(beforeRouteUpdate)-->全局解析守卫(beforeResolve)
