<template>
  <div class="navbar-container">
    <div id="hamburger-container" class="hamburger-container" @click="toggleClick">
      <svg :class="{'is-active':isActive}" class="hamburger" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
      </svg>
    </div>

    <el-breadcrumb id="app-navbreadcrumb" class="app-navbreadcrumb" separator="/">
      <el-breadcrumb-item v-for="(route,index) in currentRoutes" :key="index">
        <span v-if="index===currentRoutes.length-1" class="no-redirect">{{route.meta.title}}</span>
        <a v-else :to="{path:route.path}">{{route.meta.title}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="right-menu">
      <screenfull id="screenfull" class="right-menu-item"></screenfull>
      <el-dropdown class="avatar-container right-menu-item">
        <span class="el-dropdown-link">
         <img src="../../assets/icon-admin-normal.png" class="avatar">
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Screenfull from '@/components/Screenfull'

export default {
    components: { Screenfull },
    data() {
        return {
            currentRoutes: []
        }
    },
    created() {
        this.getCurrentRoutes()
    },
    methods: {
        toggleClick() {
            this.$store.commit('app/toggleSideBar')
        },
        getCurrentRoutes() {
            this.currentRoutes = this.$route.matched.filter(
                item => item.meta && item.meta.title
            )
        },
        async logout(){
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        }
    },
    computed: {
        ...mapGetters({ isActive: 'sideBarExpanded' })
    },
    watch: {
        $route() {
            this.getCurrentRoutes()
        }
    }
}
</script>

<style lang="scss" scoped>
  .navbar-container {
    height: 50px;
    .hamburger-container {
      padding: 0 15px;
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;

      .hamburger {
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        &.is-active {
          transform: rotate(180deg);
        }
      }
    }

    .app-navbreadcrumb.el-breadcrumb {
      display: inline-block;
      font-size: 14px;
      line-height: 50px;
      margin-left: 8px;

      .no-redirect {
        color: #97a8be;
        cursor: text;
      }
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;
      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;
      }
      .avatar-container{
        .avatar{
          vertical-align: middle;
        }
      }
    }
  }
</style>