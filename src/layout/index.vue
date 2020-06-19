<template>
  <div class="app-container">
    <el-container>
       <el-aside width="200px">
          <nav-menu />
       </el-aside>
     
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
import NavMenu from './components/NavMenu'
import NavBreadcrumb from './components/NavBreadcrumb'
import TagView from './components/TagView'
import ContainerMain from './components/ContainerMain'
export default {
    name: 'layout',
    components: {
        NavMenu,
        NavBreadcrumb,
        TagView,
        ContainerMain
    }
}
</script>

<style lang="scss" scoped>
.app-container{
  .el-header{
    height:120px !important;
    padding:0;
  }
.el-main{
  background:white;
}
}
</style>