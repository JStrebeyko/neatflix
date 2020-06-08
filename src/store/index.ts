import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { Store } from '@/types';
import api from '@/api';

Vue.use(Vuex);

const store: StoreOptions<Store> = {
  state: {
    entryPool: [],
    apiPageNum: 1,
    displayed: [],
  },
  mutations: {
    ADD_TO_POOL(state, showsToAdd): void {
      state.entryPool = [...state.entryPool, ...showsToAdd];
    },
    INCREMENT_API_PAGE_NUMBER(state): void {
      state.apiPageNum += 1;
    },
    SHOW_RESULTS(state, data): void {
      state.displayed = data;
    },
    SHOW_POOL(state): void {
      state.displayed = state.entryPool;
    },
  },
  actions: {
    addToShowsList({ commit, state }): void {
      api(state.apiPageNum).then((data: any) => {
        commit('ADD_TO_POOL', data);
        commit('SHOW_POOL');
        commit('INCREMENT_API_PAGE_NUMBER');
      });
    },
    search({ commit }, phrase): void {
      api(phrase, true).then((data: any) => {
        commit('SHOW_RESULTS', data);
      });
    },
    exitSearch({ commit }): void {
      commit('CLEAR_SEARCH_QUERY');
    },
  },
};

export default new Vuex.Store<Store>(store);
