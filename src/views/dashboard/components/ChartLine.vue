<template>
   <div style="height:500px;width:100%"></div> 
</template>

<script>
import resize from './mixins/resize'
import echarts from 'echarts'
export default {
    mixins: [resize],
    data() {
        return { 
            chart: null
        }
    },
    mounted(){
        this.initChart()
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el, 'light')
            let xAxisData = []
            for (let i = 1; i < 13; i++) {
                xAxisData.push(i + '月')
            }
            let option={
                legend: {
                    left: 'right',
                    data: ['在线对账']
                },
                color: ['#9571E9'],
                tooltip: {
                    trigger: 'axis'
                    // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    //   type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    // }
                },
                title: {
                    text: '客户数量',
                    padding: 20,
                    textStyle: {
                        color: '#333',
                        fontSize: 12,
                        fontWeight: 'normal'
                        // lineHeight: 50,
                    }
                },
                grid: {
                    left: '3%',
                    right: '1%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisData,
                        axisLine: {
                            lineStyle: {
                                //轴线样式
                                color: '#DCDAE2'
                            }
                        },
                        axisTick: {
                            show: false,
                            alignWithLabel: true
                        },
                        axisLabel: {
                            color: '#333333',
                            rotate: 45
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#DCDAE2',
                                type: 'solid'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: { show: false },
                        axisTick: { show: false },
                        axisLabel: {
                            textStyle: {
                                color: '#999999'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#DCDAE2',
                                type: 'dashed'
                            }
                        }
                    }
                ], 
                series: [
                    {
                        name: '在线对账',
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    },
                ]
            }
            this.chart.setOption(option) 
        }
    }
}
</script>

<style>

</style>