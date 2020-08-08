<template>
  <div class="external-page-container">
  <!-- <iframe ref="iframe" :src="url" :style="{height:height+'px',width:'100%'}"></iframe> -->
   <iframe ref="iframe" id="iframe" :src="url" style="height:100%;width:100%"></iframe>
  </div>
</template>

<script> 
export default {
    data(){
        return{
            url:'https://www.baidu.com',
            height:400
        }
    },
    mounted(){
        // this. setSize()
    },
    methods:{
        // setSize(){
        //     const iframeDoc=this.$refs.iframe.contentWindow.document 
        //     const iBodyHeight=iframeDoc.body.scrollHeight
        //     const iDocHeight=iframeDoc.documentElement.clientHeight
        //     this.height=Math.min(iBodyHeight, iDocHeight)
        //     console.log('iframe :>> ',iBodyHeight, iDocHeight)
        // }
    }
}
</script>

<style lang="scss" scoped>
.external-page-container{ 
 height: 100%;
  iframe{ 
    border:none;
  }
}
</style>