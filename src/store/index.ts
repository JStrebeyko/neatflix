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
    loading: true,
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
    SET_LOADING(state, payload): void {
      state.loading = payload;
    },
  },
  actions: {
    addToShowsList({ commit, state }): void {
      commit('SET_LOADING', true);
      api.fetchBatch(state.apiPageNum).then((data: any) => {
        commit('ADD_TO_POOL', data);
        commit('SHOW_POOL');
        commit('INCREMENT_API_PAGE_NUMBER');
        commit('SET_LOADING', false);
      });
    },
    search({ commit }, phrase): void {
      commit('SET_LOADING', true);
      api.fetchSearched(phrase).then((data: any) => {
        commit('SHOW_RESULTS', data);
        commit('SET_LOADING', false);
      });
    },
  },
};

export default new Vuex.Store<Store>(store);
