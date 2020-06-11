<template>
  <div class="content-container">
    <tile-container v-if="displayed.length" :entries="displayed"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import TileContainer from '@/components/TileContainer.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Home',
  components: {
    TileContainer,
  },
  created(): void {
    store.commit('SHOW_POOL');
    if (!this.displayed.length) {
      store.dispatch('addToShowsList');
    }
  },
  computed: {
    ...mapState(['displayed']),
  },
});
</script>
