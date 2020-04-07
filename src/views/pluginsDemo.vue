<template>
  <div>
    <div v-my-color="'blue'">plugins Demo</div>
    <div></div>
  </div>
</template>
<script> 
 import Vue from 'vue'
  export default { 
    data(){
      return{}
    },
     created () {
       console.log(this,Vue)
      this.$myMethod();
      Vue.myGlobalMethod();
    },
  }
</script>
