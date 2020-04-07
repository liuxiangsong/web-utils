<template>
  <div class="container">
    <input type="number"
           v-model="number">
    <button class="btnAdd"
            @click="addNumber">添加</button>
  </div>
</template>

<script>
  import store from '../store'
  export default {
    data () {
      return {
        number: 0,
      }
    },
    methods: {
      addNumber () {
        store.addNumber(this.number);
        this.number = 0;
      }
    }
  }
</script>
<style scoped>
  .container {
    margin-top: 20px;
  }
  .btnAdd {
    margin-left: 10px;
  }
</style>