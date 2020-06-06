<template>
  <nav>
    <h1>Neatflix</h1>
    <input type="text" @input="onInput" />
  </nav>
</template>

<script lang="ts">
export default {
  methods: {
    onInput(e: KeyboardEvent) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
nav {
  background-color: #000;
  display: flex;
  justify-content: space-between;
  position: sticky;
  padding: 0 5%;
  & h1 {
    color: rgb(180, 0, 0);
    letter-spacing: 1px;
    font-size: 2rem;
  }
}

</style>
