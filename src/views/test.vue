<template>
  <div>
    <input type="text" @input="onInput"/>
  </div>
</template>

<script>
import {handleInput} from '@utils/inputHandle'
export default {
    data(){
        return{

        }
    },
    methods:{
        onInput(e){ 
            handleInput(e.target,'currency')
        }
    }
}
</script>