export default  {
    SET_NEWS(state, news) {  //news대신 다른걸 써도 됨. 우리가 지어준 인자 이름
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_USER_ID(state, userId) {
        state.userId = userId;
    }
  }