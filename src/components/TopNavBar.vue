<template>
  <nav>
    <h1>Neatflix</h1>
    <input type="text" placeholder="Search..." @change="onChange"/>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';

export default Vue.extend({
  methods: {
    onChange(e: InputEvent) {
      const element = e.target as HTMLInputElement;
      const phrase = element.value;
      console.log('search for', element.value);
      if (phrase) {
        store.dispatch('search', phrase);
      } else {
        store.commit('SHOW_POOL');
      }
      // this.$router.push(`/search/${phrase}`);
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
