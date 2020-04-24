# table 滚动条样式

### 无固定列

```css
//滚动条的宽度
.el-dialog__body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
//滚动条的滑块
.el-dialog__body::-webkit-scrollbar-thumb {
  background-color: #dedce3;
  border-radius: 3px;
}
```

### 有固定列在右边时

```css
//滚动条的宽度
.el-table__body-wrapper::-webkit-scrollbar {
  width: 17px;
  height: 17px;
}

//滚动条的滑块
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #dedce3;
  border: 4px solid white;
  border-radius: 10px;
}
.el-table__fixed,
.el-table__fixed-right {
  height: calc(100% + 1px) !important;
  box-shadow: none;
}
```

# table 固定滚动条在底部

```css
.el-table__body-wrapper {
  height: 330px;
  overflow-y: auto;
}
```
