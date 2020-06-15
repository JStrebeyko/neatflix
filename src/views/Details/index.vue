<template>
  <div class="details" v-if="entry.name">
    <spinner v-if="loading" />
    <div class="main-info-wrapper">
    <a @click="$router.go(-1)" class="back-btn">↩️ back</a>
      <h1>{{entry.name}}</h1>
      <span>Premiered: {{entry.premiered}}</span>
      <div v-html="entry.summary"></div>
    </div>
    <div class="cast">
      <h2>Cast</h2>
      <div v-for="(person, index) in entry._embedded.cast" v-bind:key="index">
        <span>{{person.person.name}} as {{person.character.name}}</span>
      </div>
    </div>
    <div class="crew">
    <h2>Crew</h2>
      <div v-for="(person, index) in entry._embedded.crew" v-bind:key="index">
        <span>{{person.type}}: {{person.person.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import api from '@/api';
import { mapState } from 'vuex';
import Spinner from '@/components/Spinner.vue';

export default Vue.extend({
  name: 'Details',
  components: {
    Spinner,
  },
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
  computed: {
    ...mapState(['loading']),
  },
});
</script>

<style lang="scss">
.details {
  display: block;
  & .back-btn {
    left: 0px;
    font-size: 2rem;
  }
  background-color: rgb(44, 6, 6);
  color: #fff;
  min-height: 100vh;
}
</style>
