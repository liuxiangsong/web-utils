<template>
  <div class="empty-wrapper">
    <slot name="header">
      <svg-icon icon-class="none-data" />
    </slot>
    <slot>
      <div>未找到符合条件的数据<br />建议您调整筛选条件再试试</div>
    </slot>
  </div>
</template>

<script>
export default {
    name:'none-data'
}
</script>

<style lang="scss" scoped>
  .empty-wrapper {
    text-align: center;
    margin: 10px auto;
    line-height: 20px;
    color: #909399;
    font-size: 14px;
    .svg-icon {
      width: 150px;
      height: 150px;
      margin-bottom: 24px;
    }
  }
</style>