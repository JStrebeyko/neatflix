<template>
  <div class="tile" :style="{backgroundImage: imgURL}">
    {{entry.name}}
  </div>
</template>

<script lang="ts">

export default {
  components: {
  },
  props: {
    entry: {
      type: Object,
    },
  },
  computed: {
    imgURL(): string {
      return `url(${this.entry.image.medium})`;
    },
  },
};
</script>

<style lang="scss">
.tile {
  height: 100px;
  width: 100px;
  display: block;
}
</style>
