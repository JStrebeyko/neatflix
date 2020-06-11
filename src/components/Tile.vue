<template>
  <router-link :to="`/details/${entry.id}`">
    <div class="tile" :style="{backgroundImage: imgURL}">
      <h2 class="title">{{entry.name}}</h2>
      <span class="year">{{year}}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    entry: {
      type: Object,
    },
  },
  computed: {
    imgURL(): string {
      return this.entry.image ? `url(${this.entry.image.medium})` : 'none';
    },
    year(): string {
      return this.entry.premiered ? this.entry.premiered.substring(0, 4) : null;
    },
  },
});
</script>

<style lang="scss">
.tile {
  display: block;
  height: 300px;
  width: 200px;
  margin: 1vw;
  background: rgb(119, 7, 7)
}
</style>
