import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js';
import actions from './actions.js';

//Vuex는 플러그인 형태로 제공하기 때문에 vue.use로 사용할 수 있다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    userId: {},
  },
  getters: {  //store에 있는 computed와 동일한 속성
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.userId;
    }
  },
  //mutations: mutations,
  mutations,
  actions,
  modules: {
  }
});


