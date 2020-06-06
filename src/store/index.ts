import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { Store } from '@/types';
import { getShows } from '@/api';

Vue.use(Vuex);

const store: StoreOptions<Store> = {
  state: {
    showsList: [],
    apiPageNum: 1,
  },
  mutations: {
    ADD_TO_SHOWS_LIST(state, showsToAdd): void {
      console.log('ShowsToAdd: ', showsToAdd);
      state.showsList = [...state.showsList, ...showsToAdd];
    },
    INCREMENT_API_PAGE_NUMBER(state): void {
      state.apiPageNum += 1;
    },
  },
  actions: {
    addToShowsList({ commit, state }) {
      getShows(state.apiPageNum).then((data: any) => {
        commit('ADD_TO_SHOWS_LIST', data);
        commit('INCREMENT_API_PAGE_NUMBER');
      });
    },
  },
};

export default new Vuex.Store<Store>(store);
