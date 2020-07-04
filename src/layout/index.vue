<template>
  <div class="app-container">
    <el-container> 
          <nav-sidebar /> 
     
      <el-container>
        <el-header>
          <nav-breadcrumb/>
          <tag-view/>
        </el-header>
        <el-main>
         <container-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavSidebar from './components/NavSidebar'
import NavBreadcrumb from './components/NavBreadcrumb'
import TagView from './components/TagView'
import ContainerMain from './components/ContainerMain'
export default {
    name: 'layout',
    components: { 
        NavSidebar,
        NavBreadcrumb,
        TagView,
        ContainerMain
    }
}
</script>

<style lang="scss" scoped>
.app-container{
  height: 100%;
  .el-container{
     height: 100%;
       .el-header{
    height:120px !important;
    padding:0;
  }
.el-main{
  background:white;
}
  }

}
</style>