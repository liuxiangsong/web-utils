<template>
  <div v-if="!item.hide">
        <el-menu-item v-if="!item.children || item.children.length<1" :index="resolvePath(item.path)" @click="redirectRoute(item.path)">
          <svg-icon v-if="item.meta.icon" :icon-class="item.meta.icon"/> 
          <span>{{ item.meta && item.meta.title }}</span>
    </el-menu-item>

    <el-submenu v-else :key="index" :index="index+''">
      <template slot="title">{{item.meta.title}}</template>
      <el-menu-item v-for="(childItem,childIndex) in item.children" :key="`${index}-${childIndex}`" :index="`${index}-${childIndex}`" @click="redirectRoute(childItem.path)">
        {{ childItem.meta && childItem.meta.title }}
      </el-menu-item>
    </el-submenu>

  </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object, //route Object
            required: true
        },
        basePath:{
            type:String,
            default:''
        }
    },
    methods:{
        resolvePath(routePath) {
            return path.resolve(this.basePath, routePath)
        }
    }
}
</script>

<style>
</style>