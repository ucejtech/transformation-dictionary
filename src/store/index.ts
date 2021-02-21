import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface RootState {
  dictionary: Map<string, string>;
}

export default new Vuex.Store<RootState>({
  state: {
    dictionary: new Map()
  },
  getters: {
    getDictionary(state) {
      return state.dictionary;
    }
  },
  mutations: {
    UPDATE_DICTIONARY(state, { from, to, action }) {
      if (action === 'set') {
        state.dictionary.set(from, to);
      } else {
        state.dictionary.delete(from);
      }
    }
  },
  actions: {
    dictionaryUpdate({ commit }, { from, to, action }) {
      commit('UPDATE_DICTIONARY', { from, to, action });
    }
  },
  modules: {}
});
