<template>
  <div>
    <div>{{ percent | percentFilter }}</div>
    <div>{{ new Date() | dateFilter('YYYY-MM-DD') }}</div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      percent: 0.02
    }
  },
  //本地过滤器
  filters: {
    dateFilter(date, formatString) {
      return dayjs(date).format(formatString)
    }
  }
}
</script>
