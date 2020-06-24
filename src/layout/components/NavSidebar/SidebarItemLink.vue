<template>
  <component :is="isExternal?'a':'router-link'" v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script> 
export default {
    props: {
        to: {
            type: String,
            required: true
        },
        isExternal:{
            type:Boolean,
            required:true
        }
    }, 
    methods:{
        linkProps(url) {
            if (this.isExternal) {
                return {  
                    href: url,
                    target: '_blank',
                    rel: 'noopener'
                }
            }
            return { 
                to: url
            }
        }
    }
}
</script>