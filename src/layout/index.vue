<template>
  <div class="app-container">
    <nav-sidebar class="app-sidebar" />

    <div class="app-main">
      <el-header>
        <nav-breadcrumb />
        <tag-view />
      </el-header>
      <el-main>
        <container-main />
      </el-main>
    </div>
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
  .app-container {
    height: 100%;
    .app-sidebar {
      height: 100%;
      float: left;
    }
    .app-main {
      height: 100%;
      overflow: hidden;
      .el-header {
        height: 85px !important;
        padding: 0;
        top: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
      }
      .el-main {
         @include scroll-bar;
        background: white;
        overflow: auto;
        height: calc(100% - 85px);
      }
  
    }
  }
</style>