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
  name: 'SearchResults',
  components: {
    TileContainer,
  },
  created(): void {
    this.search();
  },
  methods: {
    search(): void {
      store.dispatch('search', this.phrase);
    },
  },
  computed: {
    ...mapState(['displayed']),
    phrase(): string {
      return this.$route.params.phrase;
    },
  },
  watch: {
    phrase(): void {
      this.search();
    },
  },
});
</script>

<style lang="scss">

</style>
