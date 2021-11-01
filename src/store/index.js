import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';


//Vuex는 플러그인 형태로 제공하기 때문에 vue.use로 사용할 수 있다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  mutations: {
    SET_NEWS(state, news) {  //news대신 다른걸 써도 됨. 우리가 지어준 인자 이름
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    }

  },
  actions: {
    //api호출하는 곳
    FETCH_NEWS(context) {    //context는 mutations을 호출할 수 있는 인자.
      fetchNewsList()
        .then(response => {
          console.log(response.data);
          context.commit('SET_NEWS', response.data);     //context.commit라는 api를 이용해 mutations에 데이터를 전달.
          
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_ASK({ commit }){
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_JOBS({ commit }){
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch(error => {
          console.log(error);
        })
    },
  },
  modules: {
  }
});


