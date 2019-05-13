<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('getmyJson')
    }
  }
</script>
<style lang="less">
</style>
