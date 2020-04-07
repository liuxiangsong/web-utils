<template>
  <div id="app">
    <div class="menu">
      <div v-for="(item, index) in menus" @click="redirectRoute(item.path)" :key="index">{{item.meta&&item.meta.name}} </div>      
    </div>
    <hr />
    <div class="container">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script>
// import _ from 'lodash'
export default {
  name: 'app',
  data(){
    return {
      menus:this.$router.options.routes.filter(r=>r.meta&&r.meta.name)
    }
  },
  created() {
    console.log(this.$router.options.routes[0].meta.name)
  },
  methods: {
    redirectRoute(path) {
      this.$router.push(path)
    }
    // click: _.throttle(function () {
    //   console.log('test')
    // }, 3000),
    // clickFun () {
    //   _.throttle(() => {
    //     console.log('1121')
    //   }, 2000)

    // }
  }
}
</script>

<style >
#app {
  display: grid;
  grid-template-columns: 200px 20px 1fr;
}
.menu{ 
  line-height: 30px; 
}
a {
  margin-right: 20px;
}
</style>
