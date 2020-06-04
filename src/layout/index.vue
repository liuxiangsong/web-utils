<template>
  <div class="app-container">
    <el-container>
       <el-aside width="200px">
          <nav-menu />
       </el-aside>
     
      <el-container>
        <el-header>
          <nav-breadcrumb></nav-breadcrumb>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import NavBreadcrumb from './components/NavBreadcrumb'
export default {
    name: 'layout',
    components: {
        'nav-menu': NavMenu,
        'nav-breadcrumb': NavBreadcrumb
    }
}
</script>

<style lang="scss">
</style>