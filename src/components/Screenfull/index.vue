<template>
  <div>
    <el-tooltip :content="isFullscreen?'退出全屏':'全屏'" effect="dark" placement="bottom">
      <svg-icon :icon-name="isFullscreen?'fullscreen-exit':'fullscreen'" @click="handleClick" />
    </el-tooltip>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
    name: 'Screenfull',
    data() {
        return {
            isFullscreen: false
        }
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.destroy()
    },
    methods: {
        handleClick() {
        // console.log(screenfull)
            if (!screenfull.isEnabled) {
                this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                })
                return false
            }
            screenfull.toggle()
        },
        change() {
            this.isFullscreen = screenfull.isFullscreen
        },
        init() {
            if (screenfull.isEnabled) {
                screenfull.on('change', this.change)
            }
        },
        destroy() {
            if (screenfull.isEnabled) {
                screenfull.off('change', this.change)
            }
        }
    }
}
</script>

<style scoped>
  .screenfull-svg {
    display: inline-block;
    cursor: pointer;
    fill: #5a5e66;
    width: 20px;
    height: 20px;
    vertical-align: 10px;
  }
</style>
