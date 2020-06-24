<template>
  <nav>
    <router-link to="/" class="no-underline"><h1>Neatflix</h1></router-link>
    <div class="inputs">
      <input type="text" placeholder="Search..." @keyup.enter="onChange" v-model="phrase"/>
      <button class="clear" @click="clearSearch" v-if="phrase">×</button>
    </div>
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
      if (`/search/${this.phrase}` === this.$route.path) {
        return;
      }
      if (this.phrase) {
        this.$router.push(`/search/${this.phrase}`);
      } else {
        this.$router.push('/');
      }
    },
    clearSearch() {
      this.phrase = '';
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
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
  z-index: 10;
  & .no-underline {
    text-decoration: none;
  }
  & h1 {
    color: rgb(180, 0, 0);
    letter-spacing: 1px;
    font-size: 2rem;
  }
  & .inputs {
    display: flex;
    justify-content: center;
    position: relative;
    & input,
    & button.clear {
      align-self: center;
    }
    & button.clear {
      position: absolute;
      right: 1px;
    }
  }
}

</style>
