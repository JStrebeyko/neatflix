<template>
  <nav>
    <h1>Neatflix</h1>
    <input type="text" placeholder="Search..." @change="onChange" v-model="phrase"/>
    <button class="clear" @click="clearSearch">×</button>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';

export default Vue.extend({
  data() {
    return {
      phrase: '',
    };
  },
  methods: {
    onChange() {
      if (this.phrase) {
        store.dispatch('search', this.phrase);
      } else {
        store.commit('SHOW_POOL');
      }
    },
    clearSearch() {
      this.phrase = '';
      store.commit('SHOW_POOL');
    },
  },
});
</script>

<style lang="scss">
nav {
  background-color: #000;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 5%;
  & h1 {
    color: rgb(180, 0, 0);
    letter-spacing: 1px;
    font-size: 2rem;
  }
}

</style>
