<template>
  <router-link :to="`/details/${entry.id}`" class="no-underline">
    <div class="tile" :style="{backgroundImage: imgURL}">
      <div class="info-wrapper">
        <h2 class="title">{{entry.name}}</h2>
        <div class="year-rating-wrapper">
          <div class="year">{{year}}</div>
          <div class="rating">{{entry.rating.average}}</div>
        </div>
      </div>
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
    rating(): number {
      return this.entry.rating.average;
    },
  },
});
</script>

<style lang="scss">
.no-underline {
    text-decoration: none;
}
.tile {
  display: flex;
  flex-direction: column-reverse;
  height: 300px;
  width: 200px;
  margin: 1vw;
  background: rgb(119, 7, 7);
  & .info-wrapper {
    background-color: black;
    color: white;
    & h2 {
      margin: 5px 0 0;
    }
    & .year-rating-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    & .rating {
      color: rgb(236, 213, 4);
      transform: scale(1.1);
      font-weight: bold;
    }
  }
}
</style>
