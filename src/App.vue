<template>
  <div id="app">
    <top-nav-bar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import TopNavBar from '@/components/TopNavBar.vue';

export default {
  name: 'App',
  components: {
    TopNavBar,
  },
};
</script>

<style lang="scss">
/* RESET STYLES */
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
