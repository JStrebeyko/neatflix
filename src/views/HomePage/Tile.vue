<template>
  <div class="tile" :style="{backgroundImage: imgURL}">
    {{entry.name}}
  </div>
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
  },
});
</script>

<style lang="scss">
.tile {
  height: 100px;
  width: 100px;
  display: block;
  background: rgb(119, 7, 7)
}
</style>
