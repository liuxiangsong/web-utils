<template>
  <div>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="startGuide">
      显示引导页
    </el-button>
  </div>
</template>

<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'
export default {
    data() {
        return {
            driver: null,
            option:{
                doneBtnText: '结束', 
                closeBtnText: '完成',
                nextBtnText: '下一步',
                prevBtnText: '上一步',
                allowClose:false
            }
        }
    },
    mounted() {
        this.driver = new Driver(this.option)
    },
    methods: {
        startGuide() {
            this.driver.defineSteps(steps)
            this.driver.start()
        }
    }
}
</script>

<style>
</style>