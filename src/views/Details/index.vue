<template>
  <div class="details" v-if="entry.name">
    <a @click="$router.go(-1)">back</a>
    <h1>{{entry.name}}</h1>
    <span>{{entry.premiered}}</span>
    <h2>Cast</h2>
    <div class="cast">
      <div v-for="(person, index) in entry._embedded.cast" v-bind:key="index">
        <span>{{person.person.name}} as {{person.character.name}}</span>
      </div>
    </div>
    <h2>Crew</h2>
    <div class="crew">
      <div v-for="(person, index) in entry._embedded.crew" v-bind:key="index">
        <span>{{person.type}}: {{person.person.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import api from '@/api';

export default Vue.extend({
  name: 'Details',
  data() {
    return {
      entry: {},
    };
  },
  async created() {
    api.fetchDetails(this.$route.params.id).then((data: object) => {
      this.entry = data;
    });
  },
});
</script>

<style>

</style>
