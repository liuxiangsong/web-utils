<template>
  <div>
    <input type="number"
           v-model="num">
    <button @click="addNumber">新增</button>
  </div>
</template>

<script>
  import EventBus from '../event-bus.js'
  export default {
    data () {
      return {
        num: 0,
      }
    },
    methods: {
      addNumber () {
        EventBus.$emit('addNumber', this.num);
      }
    },
  }
</script>
