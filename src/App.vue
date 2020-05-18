<template>
  <div id="app">
    <el-container>
      <!-- <el-header>Header</el-header> -->
      <el-container>
        <el-aside :width="isFold?'20':'260'">
          <div class="logo">
            <i :class="isFold?'el-icon-s-unfold':'el-icon-s-fold'"  @click="toggleMenu"></i>
          </div>
          <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isFold">
            <template v-for="(item, index) in menus">
              <el-submenu v-if="item.children&&item.children.length>0" :key="index" :index="index+''">
                <template slot="title">{{item.meta.name}}</template>
                <el-menu-item v-for="(childItem,childIndex) in item.children" :key="`${index}-${childIndex}`" :index="`${index}-${childIndex}`" @click="redirectRoute(childItem.path)">
                  {{ childItem.meta && childItem.meta.name }}
                </el-menu-item> 
              </el-submenu>
              <el-menu-item v-else :key="index" :index="index+''" @click="redirectRoute(item.path)">
                {{ item.meta && item.meta.name }}
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            isFold:true,
            menus: this.$router.options.routes.filter(r => r.meta && r.meta.name)
        }
    },
    created() {
        console.log(this.$router.options.routes[0].meta.name)
    },
    methods: {
        redirectRoute(path) {
            this.$router.push(path)
        },
        toggleMenu(){
            this.isFold=!this.isFold          
        }
    }
}
</script>

<style lang="scss">
#app{
  .el-aside {
    background-color: #545c64;
    color: #333;
    // text-align: center;
    height: 100vh;
    .logo{
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 24px;
    }
    .el-menu{
      border: none;
    }
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    // text-align: center;
  }
}
 
</style>
