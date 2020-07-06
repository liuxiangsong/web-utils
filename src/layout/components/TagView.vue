<template>
  <div id="tag-view-container" class="tag-view-container">
    <el-scrollbar :vertical="false" class="scroll-container">
      <router-link tag="span" v-for="tag in visitedViews" :key="tag.path" draggable="false" :class="isActiveTag(tag)?'active':''" class="tag-view-item" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }" @contextmenu.prevent.native="onContextmenu(tag,$event)">
        {{tag.meta.title || '未命名'}}
        <span v-if="!isFixTag(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </el-scrollbar> 
      <ContextMenu :items="contextMenuItems" ref='ContextMenu' />
  </div>
</template>

<script>
import ContextMenu from '@comps/ContextMenu'
export default {
    components: { ContextMenu },
    data() {
        return {
            visible: false,
            top: 0,
            left: 0,
            selectedTag: {},
            contextMenuItems: [
                { label: '刷新', onClick: this.refreshSelectedTag },
                { label: '关闭', onClick: this.closeSelectedTag },
                { label: '关闭其它', onClick: this.closeOthersTags },
                { label: '关闭所有', onClick: this.closeAllTags }
            ]
        }
    },
    computed: {
        visitedViews() {
            return this.$store.state.tagView.visitedViews
        }
    },
    watch: {
        $route() {
            this.addTagView()
        },
        selectedTag() { 
            this.contextMenuItems[1].hide = this.isFixTag(this.selectedTag)
        }
    },
    mounted() {
        this.addTagView()
    },
    methods: {
        isFixTag(route) {
            return route && route.meta && route.meta.fix
        },
        isActiveTag(route) {
            return route.path === this.$route.path
        },
        addTagView() {
            const { name } = this.$route
            if (name) {
                this.$store.commit('tagView/addView', this.$route)
            }
        },
        refreshSelectedTag() {
            this.$store.commit('tagView/deleteCachedView', this.selectedTag)
            const { fullPath } = this.selectedTag
            this.$nextTick(()=>{
                this.$router.replace({
                    path: '/redirect' + fullPath
                })
            })
        },
        closeSelectedTag(route) {
            route = route || this.selectedTag
            this.$store.dispatch('tagView/deleteViewAction', route)
            if (this.isActiveTag(route)) {
                this.toTheLastTag()
            }
        },
        closeOthersTags() {
            this.$router.push(this.selectedTag)
            this.$store.commit('tagView/deleteOthersView', this.selectedTag)
        },
        closeAllTags() {
            this.$store.commit('tagView/deleteAllView')
            this.toTheLastTag()
        },
        toTheLastTag() {
            let theLastTag = this.visitedViews.slice(-1)[0]
            if (theLastTag) {
                this.$router.push(theLastTag.fullPath)
            }else{
                this.$router.push('/')
            }
        },
        onContextmenu(tag, event) { 
            this.selectedTag = tag
            this.$refs.ContextMenu.openMenu(event) 
            // this.$contextmenu({
            //     items: this.contextMenuItems,
            //     event,
            //     customClass: 'class-a',
            //     zIndex: 3,
            //     minWidth: 150
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
  .tag-view-container {
    height: 32px;
    width: 100%;
    background: #e4e7ed;
    border-top: 1px solid #dbdae6;
    overflow: hidden;
    user-select:none;
    .tag-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      line-height: 32px;
      color: #333333;
      padding: 0 8px;
      font-size: 12px;
      &:not(:first-of-type) {
        border-left: 1px solid #dbdae6;
      }
      &.active {
        background-color: white;
        color: #ff9300;
        font-weight: bold;
      }
      /deep/ .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform-origin: 100% 50%;
        &:before {
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }

    .scroll-container {
      white-space: nowrap;
      overflow: hidden;
      width: 100%; 
      /deep/ {
        .el-scrollbar__bar {
          bottom: 0px;
        }
        .el-scrollbar__wrap {
          height: 49px;
        }
      }
    }
  }
</style>