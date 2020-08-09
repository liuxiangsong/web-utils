# TabsCascader 组件

## TabsCascader props

| 参数             | 说明                                          | 类型                            |
| ---------------- | --------------------------------------------- | ------------------------------- |
| placeholder      | 输入框占位文本                                | String                          |
| separator        | 选项分隔符                                    | String                          |
| width            | 弹出面板的宽度                                | String、Number                  |
| options          | 下拉面板数据源，详见下表 option               | Array                           |
| valueList        | 选择的值                                      | Array                           |
| labelList        | 选择的文本，如果 valueList 已赋值，则忽略该项 | Array                           |
| props            | 懒加载配置项，见 Props                        | Object                          |
| filterable       | 是否开启搜索功能                              | Boolean                         |
| fetchSuggestions | 返回搜索到的labelList                         | Function(queryString, callback) |

### option

| 参数     | 说明                                                                                    | 类型           |
| -------- | --------------------------------------------------------------------------------------- | -------------- |
| value    | 可选项数据的值                                                                          | String、Number |
| label    | 可选项数据的文本                                                                        | String         |
| children | 当前选项的子选项(options),非动态加载时,通过判断 children 是否有值，来确定是否为叶子节点 | Object         |
| leaf     | 是否为叶子节点(动态加载时才需要)                                                        | Boolean        |
| level    | 当前选项所在的层级，从 1 开始计算(组件内部维护)                                         | Number         |

### props

| 参数     | 说明                                           | 类型                    |
| -------- | ---------------------------------------------- | ----------------------- |
| lazy     | 是否动态加载子节点，需与 lazyLoad 方法结合使用 | Boolean                 |
| lazyLoad | 加载动态数据的方法                             | function(node, resolve) |

## TabsCascader tabs

| 参数           | 说明               | 类型   |
| -------------- | ------------------ | ------ |
| selectedOption | 当前面板选择的选项 | Object |
| options        | 下拉面板数据源     | Array  |

## TabsCascader 内部属性

| 参数            | 说明                                 |
| --------------- | ------------------------------------ |
| currentTabIndex | 当前被选择的面板，从 0 开始计算      |
| tabs            | 每个面板显示的数据源，为 option 类型 |
| selectedOptions | 当前组件选中的option                 |

## TabsCascader 使用方式

- 类似 element 的 cascader 组件，可以直接给组件赋值数据源 options，或者通过动态加载请求接口的方式：
  1. 通过直接赋值
