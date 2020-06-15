<template>
  <div class="content-container">
    <spinner v-if="loading" />
    <tile-container v-if="displayed.length" :entries="displayed"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import TileContainer from '@/components/TileContainer.vue';
import Spinner from '@/components/Spinner.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'SearchResults',
  components: {
    TileContainer,
    Spinner,
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
    ...mapState(['displayed', 'loading']),
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
