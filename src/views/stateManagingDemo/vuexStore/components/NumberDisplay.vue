<template>
  <div>
    <h2>{{numbers}}</h2>
  </div>
</template>

<script>
  export default { 
    data () {
      return {

      }
    }, 
    computed: {
      numbers () {
        // return this.$store.state.numbers;
         return this.$store.getters.getNumbers; 
      }
    },
  }
</script>

 
<style scoped>
</style>
