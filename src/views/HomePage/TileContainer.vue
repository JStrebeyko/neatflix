<template>
  <div class="tiles-container">
    <tile v-for="(entry, i) in entries" :key="i" :entry="entry"/>
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
.tiles-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(139, 19, 19);
}
</style>
