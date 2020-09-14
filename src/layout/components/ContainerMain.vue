<template>
  <section>
    <keep-alive :include="cachedViews">
      <router-view :key="key"/>
    </keep-alive>
  </section>
</template>

<script>
export default {
    computed: {
        cachedViews() {
            return this.$store.state.tagView.cachedViews
        },
        key() {
            return this.$route.path
        }
    }
}
</script>

<style>

</style>