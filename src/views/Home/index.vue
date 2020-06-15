<template>
  <div class="content-container">
    <spinner v-if="loading"/>
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
  name: 'Home',
  components: {
    TileContainer,
    Spinner,
  },
  data() {
    return {
      scrollPosition: 0,
      currentDocumentHeight: 0,
    };
  },
  created(): void {
    window.addEventListener('scroll', this.updatePos);
    this.updateDocumentHeight();
    store.commit('SHOW_POOL');
    if (!this.displayed.length) {
      store.dispatch('addToShowsList');
    }
  },
  destroyed(): void {
    window.removeEventListener('scroll', this.updatePos);
  },
  methods: {
    updatePos() {
      this.scrollPosition = window.scrollY;
    },
    updateDocumentHeight(): void {
      this.currentDocumentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );
    },
  },
  computed: {
    ...mapState(['displayed', 'loading']),
    numberOfShows(): number {
      return this.displayed.length;
    },
  },
  watch: {
    scrollPosition(): void {
      this.updateDocumentHeight();
      const offset = 1200;
      const howFarFromBottom = this.currentDocumentHeight - this.scrollPosition;
      if (this.displayed.length
      && (howFarFromBottom < offset)
      && !this.loading) {
        console.log(`howFarFromBottom: ${howFarFromBottom}`);
        console.log(`currentDocumentHeight: ${this.currentDocumentHeight}`);
        store.dispatch('addToShowsList');
      }
    },
    numberOfShows(): void {
      this.updateDocumentHeight();
    },
  },
});
</script>
