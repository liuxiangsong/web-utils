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
//滚动条的宽度、高度
.el-table__body-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

//滚动条的滑块
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #dedce3;
  border-radius: 3px;
}
//表头滚动条上方div
.el-table__fixed-right-patch {
  width: 8px !important;
  background-color: #f1f1f5 !important;
}
.el-table--scrollable-y {
  /deep/ .el-table__fixed-right {
    right: 8px !important;
  }
}
.el-table__fixed-right {
  right: 8px !important;
  height: calc(100% - 8px) !important;
  background: white; //简单处理固定列底部穿透问题，完美方案：动态修改 el-table__fixed-body-wrapper的max-height
  // box-shadow: none;
}
.is-scrolling-right + .el-table__fixed-right {
  background: transparent;
}
```

# table 固定滚动条在底部

```css
.el-table__body-wrapper {
  height: 330px;
  overflow-y: auto;
}
```
