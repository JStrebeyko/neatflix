<template>
  <div class="details" v-if="entry.name">
    <spinner v-if="loading" />
    <a @click="$router.go(-1)" class="back-btn">↩️ back</a>
    <div class="main-info-wrapper">
      <div class="left">
        <h1>{{entry.name}}</h1>
        <span>Premiered: {{entry.premiered}}</span>
        <article v-html="entry.summary" class="summary"></article>
      </div>
      <div class="right">
        <img :src="entry.image.original" :alt="`${entry.name} poster`" class="poster">
      </div>
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
  created() {
    api.fetchDetails(this.$route.params.id).then((data: object) => {
      this.entry = data;
      this.$store.commit('SET_LOADING', false);
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
  background-color: rgb(44, 6, 6);
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;
  & .back-btn {
    left: 0px;
    top: 100px;
    font-size: 2rem;
    position: fixed;
    &:hover {
      cursor: pointer;
    }
  }
  & .main-info-wrapper {
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
      flex-direction: column;
      & .left {
        width: 100%;
      }
      & .right {
        width: 100%;
      }
    }
    & h1 {
      font-size: 4rem;
    }
    & .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      & .summary {
        font-size: 2rem;
        padding: 20px;
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
    & .right {
      width: 50%;
      & img {
        width: 75%;
        @media (max-width: 700px) {
          width: 100%;
        }
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
}
</style>
