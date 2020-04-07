import Vue from 'vue'
Vue.mixin({
    created() {
        console.log('global mixin mounted hook called', this.$options)
    }
})

const myMixin = {
    created() {
        console.log('mixin created hook called')
        this.hello()
    },
    methods: {
        hello() {
            console.log('hello from mixin')
        }
    }
}

export default myMixin