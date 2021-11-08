import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchIdInfo } from '../api/index.js';
export default  {
    //api호출하는 곳
    FETCH_NEWS(context) {    //context는 mutations을 호출할 수 있는 인자.
      fetchNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data);     //context.commit라는 api를 이용해 mutations에 데이터를 전달.
          return response;
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
    FETCH_USER({commit}, name){
        fetchUserInfo(name)
            .then(({ data }) => {
            commit('SET_USER', data);
          })
          .catch(error => {
            console.log(error);
          })
    },
    FETCH_USERID({commit}, userId){
        fetchIdInfo(userId)
        .then(({ data }) => {
            commit('SET_USER_ID', data);
          })
          .catch(error => {
            console.log(error);
          })
    }
  }