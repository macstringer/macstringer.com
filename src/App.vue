<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/NavBar.vue'


export default {
  name: 'App',
  components: {
    navbar,
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'margin:0; padding:0;')
  },
}
</script>

<style>
html {
  background-color: #f5f5f5;
}
a {
  color: #2e2e2e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
