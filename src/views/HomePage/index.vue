<template>
  <div class="home-page">
    <top-nav-bar />
    <tile-container :entries="showsList"/>
  </div>
</template>

<script lang="ts">
import TopNavBar from '@/components/TopNavBar.vue';
import store from '@/store';
import { mapState } from 'vuex';
import TileContainer from './TileContainer.vue';

export default {
  components: {
    TileContainer,
    TopNavBar,
  },
  created() {
    if (!store.state.showsList.length) {
      store.dispatch('addToShowsList');
    }
  },
  computed: mapState(['showsList']),
};
</script>

<style lang="scss">

</style>
