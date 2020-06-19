<template>
  <div>
    <el-menu :default-active="activeMenu" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse-transition="false">
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
    components: { SidebarItem },
    data() {
        return {
            routes: this.$router.options.routes[0].children.filter(
                r => r.meta && r.meta.title
            )
        }
    },
    computed: {
        isCollapse() {
            return this.$store.getters.sideBarExpanded
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

<style>
</style>