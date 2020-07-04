<template>
  <div v-if="currentItem">
    <sidebar-item-link v-if="!currentItem.children || currentItem.children.length<=1" :to="resolvePath(currentItem.path)" :isExternal="isExternal(currentItem.path)">
      <el-menu-item :index="resolvePath(currentItem.path)">
        <svg-icon v-if="currentItem.meta && currentItem.meta.icon" :icon-class="currentItem.meta.icon" />
        <span slot="title">{{currentItem.meta && currentItem.meta.title}}</span>
      </el-menu-item>
    </sidebar-item-link>
    <el-submenu v-else :index="resolvePath(currentItem.path)" popper-append-to-body>
      <template slot="title">
        <svg-icon v-if="currentItem.meta && currentItem.meta.icon" :icon-class="currentItem.meta.icon" />
        <span slot="title">{{currentItem.meta && currentItem.meta.title}}</span>
      </template>
      <sidebar-item v-for="child in currentItem.children" :key="child.path" :item="child" :base-path="resolvePath(currentItem.path)"></sidebar-item>
    </el-submenu>

  </div>
</template>

<script>
import path from 'path'
import REGULAR_EXP from '@utils/regularExp'
import SidebarItemLink from './SidebarItemLink'
export default {
    name: 'SidebarItem',
    components: { SidebarItemLink },
    props: {
        item: {
            type: Object, //route Object
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    methods: {
        isExternal(path) {
            return REGULAR_EXP.externalLink.test(path)
        },
        resolvePath(routePath) {
            if (this.isExternal(routePath)) {
                return routePath
            }
            return path.resolve(this.basePath, routePath || '')
        }
    },
    computed: {
        currentItem() {
            if (this.item.hidden) {
                return null
            }
            let children = this.item.children || []
            children = children.filter(i => !i.hidden)
            if (this.item.alwaysShow || children.length != 1) {
                return this.item
            } else if (children.length === 1) {
                return children[0]
            }
            return null
        }
    }
}
</script>

<style>
</style>