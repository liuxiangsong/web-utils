<template>
  <el-breadcrumb  class="app-navbreadcrumb"  separator="/">
  <el-breadcrumb-item  v-for="(route,index) in currentRoutes" :key="index">
    <span v-if="index===currentRoutes.length-1" class="no-redirect">{{route.meta.name}}</span>
    <a v-else :to="{path:route.path}">{{route.meta.name}}</a>
  </el-breadcrumb-item>
 
 
</el-breadcrumb>
</template>

<script>
export default {
    data(){
        return{
            currentRoutes:[]
        }
    }, 
    created(){

    },
    methods:{
        getCurrentRoutes(){
            this.currentRoutes= this.$route.matched.filter(item => item.meta && item.meta.name)
        }
    },
    watch:{
        $route(){
            this.getCurrentRoutes()
        }
    }
}
</script>

<style lang="scss" scoped>
.navbreadcrumb .el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>