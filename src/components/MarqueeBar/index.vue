<template>
  <div class="marquee-bar-container" :style="{height:height+'px'}">
    <div class="bar-container">
      <ul ref="vertical-wrap" class="vertical-wrap" v-if="isVertical">
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
      </ul>

      <div v-else ref="horizontal-wrap" class="horizontal-wrap" :style="{lineHeight:height+'px'}">
        <span v-for="(item,index) in list" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required:true
        },
        //窗口高度
        height: {
            type: Number,
            default: 30
        },
        //每次滚动的长度（以像素为单位）
        scrollAmount: {
            type: Number,
            default: 50
        },
        //是否垂直滚动
        isVertical: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            list: this.items
        }
    },
    mounted() {
        if (this.isVertical) {
            this.appendKeyFrameOfMoveUp()
        } else {
            this.appendKeyFrameOfMoveBackward()
        } 
        //让动画无缝衔接
        this.list = [...this.list, ...this.list]
    },
    methods: {
        addStyle(css) {
            const style = document.createElement('style')
            style.type = style.type = 'text/css'
            style.innerText = css
            document.getElementsByTagName('head')[0].appendChild(style)
        },
        appendKeyFrameOfMoveBackward() {
            const width = this.$refs['horizontal-wrap'].offsetWidth
            const time = width / this.scrollAmount
            let css = `@keyframes movebackward {
                    100% {transform: translateX(-${width}px);}}`
            css += `.horizontal-wrap { animation: movebackward ${time}s linear infinite;}`
            this.addStyle(css)
        },
        appendKeyFrameOfMoveUp() {
            const height = this.$refs['vertical-wrap'].offsetHeight
            const time = height / this.scrollAmount
            let css = `@keyframes moveup {
                    100% {transform: translateY(-${height}px);}}`
            css += `.vertical-wrap { animation: moveup ${time}s linear infinite;}`
            this.addStyle(css)
        }
    }
}
</script>

<style lang="scss">
  .marquee-bar-container { 
    width: 300px;
    background-color: #fffbe8;
    color: #ed6a0c;
    padding: 0 20px;
    .bar-container {
      overflow: hidden;
      ul {
        li {
          height: 30px;
          line-height: 30px;
        }
      }

      .horizontal-wrap {
        display: inline-block;
        white-space: nowrap;
        span {
          padding-right: 20px;
        }
      }
    }
  }
</style>