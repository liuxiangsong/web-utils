<template>
  <div class="sidebar-container" :class="isCollapse?'sidebar-collapse':''">
    <sidebar-search id="sidebar-search"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :unique-opened="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse-transition="false">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import SidebarSearch from './SidebarSearch'
export default {
    components: { SidebarItem, SidebarSearch },
    data() {
        return {
            routes: this.$store.getters.permission_routes
        }
    },
    computed: {
        isCollapse() {
            return !this.$store.getters.sideBarExpanded
        },
        activeMenu() {
            const { meta, path } = this.$route
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        }
    }
}
</script>
 
<style lang="scss" scoped>
  .sidebar-container {
    width: 210px;
    background-color: rgb(84, 92, 100);
    &.sidebar-collapse {
      width: 54px !important;
      /deep/ {
        .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
          display: none;
        }
        .el-menu-item,
        .el-submenu__title,
        .el-tooltip {
          padding-left: 0px !important;
        }

        .svg-icon {
          margin: 0 10px 0 20px;
        }
      }
    }

    /deep/ {
      .el-scrollbar {
        height: calc(100% - 40px);
        //隐藏横行包裹滚动条
        .scrollbar-wrapper {
          overflow-x: hidden !important;
        }
        //隐藏横行滚动条
        .is-horizontal {
          display: none;
        }
      }

      .el-menu {
        width: 100%;
        li {
          user-select: none;
          &>[class^=el-icon-]{
              width: 15px;
              margin:0 12px 0 -3px;
          }
        }
        .svg-icon {
          margin-right: 10px;
        }
      }
    }

    /deep/ .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
        }
      }
    }
    /deep/a {
      text-decoration: none;
    }
  }
</style>