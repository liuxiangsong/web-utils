<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="12">
        <chart-map />
      </el-col>
      <el-col :span="12">
        <chart-line />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import ChartMap from './components/ChartMap'
import ChartLine from './components/ChartLine'
export default {
    components: {
        ChartMap,
        ChartLine
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
</style>