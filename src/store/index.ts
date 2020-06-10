import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { Store } from '@/types';
import api from '@/api';

Vue.use(Vuex);

const store: StoreOptions<Store> = {
  state: {
    entryPool: [],
    displayed: [],
    apiPageNum: 0,
    viewedID: undefined,
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
      api.fetchBatch(state.apiPageNum).then((data: any) => {
        commit('ADD_TO_POOL', data);
        commit('SHOW_POOL');
        commit('INCREMENT_API_PAGE_NUMBER');
      });
    },
    search({ commit }, phrase): void {
      api.fetchSearched(phrase).then((data: any) => {
        commit('SHOW_RESULTS', data);
      });
    },
  },
};

export default new Vuex.Store<Store>(store);
