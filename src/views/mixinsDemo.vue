<template>
  <div>
    <div>mixins Demo</div>
    <div></div>
  </div>
</template>
<script>
import myMixin from '@/mixins/myMixin'
export default {
    mixins: [myMixin],
    data(){
        return{}
    },
    created () {
        console.log('component created hook called')
    },
    methods: {
        hello () {
            console.log('hello from component')
        }
    },
}
</script>
