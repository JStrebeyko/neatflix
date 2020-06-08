<template>
  <div class="home-page">
    <top-nav-bar />
    <tile-container :entries="displayed"/>
  </div>
</template>

<script lang="ts">
import TopNavBar from '@/components/TopNavBar.vue';
import Vue from 'vue';
import store from '@/store';
import { mapState } from 'vuex';
import TileContainer from './TileContainer.vue';

export default Vue.extend({
  components: {
    TileContainer,
    TopNavBar,
  },
  created() {
    store.dispatch('addToShowsList');
  },
  computed: mapState(['displayed']),
});
</script>

<style lang="scss">

</style>
