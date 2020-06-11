<template>
  <nav>
    <router-link to="/"><h1>Neatflix</h1></router-link>
    <input type="text" placeholder="Search..." @change="onChange" v-model="phrase"/>
    <button class="clear" @click="clearSearch">×</button>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      phrase: '',
    };
  },
  methods: {
    onChange() {
      if (this.phrase) {
        this.$router.push(`/search/${this.phrase}`);
      } else {
        this.$router.push('/');
      }
    },
    clearSearch() {
      this.phrase = '';
      this.$router.push('/');
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
