<template>
  <div>
    <h1>1、MarqueeBar</h1>
    <marquee-bar :items="marqueeBar.items"/>

  </div>
</template>

<script>
import MarqueeBar from '@comps/MarqueeBar'
export default {
    components:{
        MarqueeBar
    },
    data(){
        return{
            marqueeBar:{
                items:['技术是开发它的人的共同灵魂。']
            }
        }
    }
}
</script>

<style>

</style>