<template>
  <div>
    <h2> {{ storeNumbers}}</h2>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    data () {
      return {
        storeNumbers: store.state.numbers,
      }
    },

  }
</script>
 <style  scoped>
</style>
