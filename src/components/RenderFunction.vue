<script>
// https://vuejs.org/v2/guide/render-function.html
export default { 
    render(h){
        return h('div',{ class:'test2',style:{color:'#999',cursor:'pointer'},on:{click:this.clickHandler}},[
            this.textNode,
            h('h'+this.level,this.$slots.default)])
    },
    props:['level'],
    data(){
        return{
            text:'文本'
        }
    },
    methods:{
        clickHandler(){
            alert('alert from render function')
        }
    },
    computed:{
        textNode(){
            return  this.text+'节点'
        }
    }
}
</script>