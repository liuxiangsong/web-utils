<template>
  <div class="split-container">
    <div class="split split-horizontal" id="left">d</div>
    <div class="split split-horizontal" id="right">
      <div class="split" id="right-top">a</div>
      <div class="split" id="right-bottom">a</div>
    </div>
  </div>

</template>

<script>
import Split from 'split.js'
export default {
    data() {
        return {}
    },
    mounted() {
        Split(['#left', '#right'], {
            sizes: [25, 75]
        })

        Split(['#right-top', '#right-bottom'], {
            direction: 'vertical',
            sizes: [25, 75]
        })
    }
}
</script>

 <style lang="scss" scoped>
  .split-container {
    #left {
      background: #ffcc99;
    }
    #right {
      #right-top {
        background: #ccff99;
      }
      #right-bottom {
        background: #cccccc;
      }
    }
  }
  /**splitjs样式 */
  /deep/ {
    .split {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .split.split-horizontal,
    .gutter.gutter-horizontal {
      height: 500px; //水平分隔时，必须设置高度
      float: left;   //水平分隔时，必须设置元素（包括gutters）水平排列显示
    }
    .gutter {
      background-color: #eee;
      background-repeat: no-repeat;
      background-position: 50%;
    }
    .gutter.gutter-vertical {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=");
      cursor: ns-resize;
    }
    .gutter.gutter-horizontal {
      float: left;
      cursor: ew-resize;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==");
    }
  }
</style>