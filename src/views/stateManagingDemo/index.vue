<template>
<div >
  <div @click="redirectRoute('/eventbus')">eventBus Demo</div>
  <div @click="redirectRoute('/simpleGlobalStore')">simpleGlobalStore Demo</div>
  <div @click="redirectRoute('/vuexStore')">vuexStore Demo</div>
  <hr/>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods: {
    redirectRoute(path) {
      this.$router.push(path)
    }
  },
}
</script>

<style scoped>
/* div{
  float: left;
  border: 1px solid;
} */
</style>