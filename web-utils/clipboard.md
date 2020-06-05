# 调用帮助类方法

```html
<el-button @click="handleCopy(inputData,$event)">复制</el-button>
```

```js
import clip from '@/utils/clipboard'

methods: {
  handleCopy(text, event) {
    clip(text, event)
  }
}
```

# 使用指令

```html
<el-button v-clipboard="'inputData'">复制</el-button>
```
