<template>
  <div> 
    <NumberDisplay></NumberDisplay>
    <NumberSubmit></NumberSubmit>
  </div>
</template>

<script>
import NumberDisplay from './components/NumberDisplay.vue'
import NumberSubmit from './components/NumberSubmit.vue'

export default {
    name: 'app',
    components: {
        NumberSubmit,
        NumberDisplay
    }
}
</script>

 
