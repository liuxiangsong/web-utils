<template>
  <div :style="{display:sideBarExpanded?'block':'none'}" >
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="(item, index) in menus">
        <el-submenu v-if="item.children&&item.children.length>0" :key="index" :index="index+''">
          <template slot="title">{{item.meta.title}}</template>
          <el-menu-item v-for="(childItem,childIndex) in item.children" :key="`${index}-${childIndex}`" :index="`${index}-${childIndex}`" @click="redirectRoute(childItem.path)">
            {{ childItem.meta && childItem.meta.title }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="index" :index="index+''" @click="redirectRoute(item.path)">
          {{ item.meta && item.meta.title }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script> 
export default {
    data() {
        return {
            menus: this.$router.options.routes[0].children.filter(
                r => r.meta && r.meta.title
            )
        }
    },
    methods: {
        redirectRoute(path) {
            this.$router.push(path)
        }
    },
    computed: {
        sideBarExpanded(){
            return  this.$store.getters.sideBarExpanded
        } 
    },
}
</script>

<style lang="scss">
  @import "../../assets/style/dialog.scss";
  .el-aside {
    background-color: #545c64;
    color: #333; 
    height: 100vh; 
    .el-menu {
      border: none;
    }
  }
  .el-main {
    background-color: #e9eef3;
    color: #333; 
  }
</style>