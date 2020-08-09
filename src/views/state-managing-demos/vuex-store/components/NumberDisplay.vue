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
            console.log('this.$store :>> ', this.$store)
            // return this.$store.state.vuexStoreDemo.numbers 
            return this.$store.getters['vuexStoreDemo/getNumbers'] 
        }
    },
}
</script>

 
<style scoped>
</style>
