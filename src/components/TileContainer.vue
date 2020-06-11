<template>
  <div class="content">
    <div class="tiles-container" v-if="entries.length">
      <tile v-for="(entry, i) in entries" :key="i" :entry="entry"/>
    </div>
    <h2 v-else>No shows found :( </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tile from './Tile.vue';

export default Vue.extend({
  components: {
    Tile,
  },
  props: {
    entries: {
      type: Array,
    },
  },
});
</script>

<style lang="scss">
.content {
  min-height: 100vh;
  background-color: rgb(139, 19, 19);
  & .tiles-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
