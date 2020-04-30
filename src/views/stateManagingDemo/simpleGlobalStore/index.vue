<template>
  <div>
    <NumberDisplay></NumberDisplay>
    <NumberSubmit></NumberSubmit>
  </div>
</template>

<script>
import NumberDisplay from './components/NumberDisplay'
import NumberSubmit from './components/NumberSubmit'

export default { 
    components: {
        NumberSubmit,
        NumberDisplay,
    }
}
</script>
 
