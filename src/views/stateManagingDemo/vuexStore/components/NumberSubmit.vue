<template>
  <div>
    <input type="number"
           v-model="num">
    <button @click="addNumber">新增</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        num: 0,
      }
    },
    methods: {
      addNumber () {
        // this.$store.commit('addNumber', this.num);
        this.$store.dispatch('addNumber', this.num)
      }
    },
  }
</script>
