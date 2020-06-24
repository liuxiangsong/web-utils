<template>
  <div v-if="!isCollapse" class="sidebar-search">
     <el-select v-model="search" filterable remote :remote-method="querySearch" default-first-option placeholder="请输入关键词" @change="selectChange" >
       <el-option v-for="item in options" :key="item.path" :value="item" :label="item.titles.join(' > ')" />
         <i slot="prefix" class="el-input__icon el-icon-search"></i>
     </el-select>
  </div>
</template>

<script>
import path from 'path'
export default {
    data(){
        return{
            routes: this.$router.options.routes,
            search:'',
            options:[],
            searchPool:[]
        }
    },
    mounted(){
        this.searchPool=this.generateRoutes(this.routes) 
    },
    computed: {
        isCollapse() {
            return !this.$store.getters.sideBarExpanded
        }
    },
    methods:{
        querySearch(query){ 
            if(!query){
                this.options = [] 
            }else{
                this.options = this.searchPool.filter(r=>r.titles.some(t=>t.includes(query))) 
            }
        },
        selectChange(val){
            this.$router.push(val.path)
            this.search = ''
            this.options = []
        },
        generateRoutes(routes, basePath = '/',parentsTitles=[]){
            let res=[]
            for(const route of routes){
                if(route.hidden ){
                    continue
                }
                let data={
                    path: path.resolve(basePath, route.path),
                    titles:[...parentsTitles]}
                if(route.meta&&route.meta.title){
                    data.titles=[...data.titles, route.meta.title]
                    res.push(data)
                }
                if(route.children &&route.children.length>0){
                    const temp=this.generateRoutes(route.children,data.path,data.titles)
                    if(temp.length>0){
                        res=[...res,...temp]
                    }
                }
            }
            return res
        }
    }
}
</script>

<style lang="scss">
.sidebar-search{
  padding:5px 15px;
  .el-input__inner{
    border-radius: 14px;
    border-color: #dbdae6;
    height: 30px;
    line-height: 30px; 
  }
  .el-input__icon{
     line-height: 30px; 
  }
}
</style>