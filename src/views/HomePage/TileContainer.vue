<template>
  <div class="tiles-conatainer">
    <tile v-for="(entry, i) in entries" :key="i" :entry="entry"/>
  </div>
</template>

<script lang="ts">
import Tile from './Tile.vue';

export default {
  components: {
    Tile,
  },
  props: {
    entries: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.tiles-conatainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
