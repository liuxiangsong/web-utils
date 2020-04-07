<template>
  <div>
    <h2>{{numbers}}</h2>
  </div>
</template>

<script>
  import EventBus from '../event-bus.js'
  export default {
    data () {
      return {
        numbers: [],
      }
    },
    created () {
      EventBus.$on('addNumber', (num) => { this.numbers.push(Number(num)) });
    },

  }
</script>

 
<style scoped>
</style>
