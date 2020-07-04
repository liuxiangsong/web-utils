<template>
    <ul v-if="visible" class="contextmenu" :style="{left:left+'px',top:top+'px',minWidth:minWidth+'px'}">
    <li v-for="item in items" :key="item.label" v-show="!item.hide" @click="itemClick(item)">{{item.label}}</li>
  </ul>
</template>

<script>
export default {
    props:{
        items:{
            required: true,
            type: Array,
            validator:function(items){
                if(!items.every(col=>Object.keys(col).indexOf('label')>-1)){
                    console.log('items中的所有项必须都包含label属性')
                    return false
                }
                if(!items.every(col=>Object.keys(col).indexOf('onClick')>-1)){ 
                    console.log('items中的所有项必须都包含onClick函数属性')
                    return false
                }
                return true  
            }
        },
        minWidth:{
            type:Number,
            default:100
        }
    },
    data(){
        return{
            visible:false,
            top: 0,
            left: 0,
        }
    },
    methods:{ 
        openMenu(e) { 
            this.visible = true
            this.$nextTick(()=>{  
                const windowWidth = document.documentElement.clientWidth
                const offsetWidth = this.$el.offsetWidth // contextmenu width
                if(e.clientX+offsetWidth+10>windowWidth){ 
                    this.left =windowWidth-offsetWidth 
                }else{
                    this.left =e.clientX+10
                } 
                this.top = e.clientY+5
            }) 
        },
        closeMenu() {
            this.visible = false
        },
        itemClick(item){
            if(typeof item.onClick === 'function'){
                item.onClick()
            } 
        }
    },
    watch: {
        visible(value) {
            if (value) { 
                document.addEventListener('click', this.closeMenu) 
            } else {
                document.removeEventListener('click', this.closeMenu)
            }
        }
    },
}
</script>


<style lang="scss" scoped>
.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
</style>