<template>
  <div class="home-page">
    <top-nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import TopNavBar from '@/components/TopNavBar.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  props: ['phrase'],
  components: {
    TopNavBar,
  },
});
</script>

<style lang="scss">

</style>
