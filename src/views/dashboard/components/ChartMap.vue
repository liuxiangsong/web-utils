<template>
  <div style="height:100%;width:100%"></div>
</template>

<script>
import echarts from 'echarts'

export default {
    data() {
        return {
            chart: null
        }
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el, 'light')
        }
    }
}
</script>

<style>

</style>