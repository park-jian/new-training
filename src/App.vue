<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/editor">에디터</router-link> |
      <router-link to="/calendar">달력</router-link> |
      <router-link to="/main">메인</router-link> |
      <router-link to="/itemView">아이템뷰</router-link> |
      <router-link to="/userView">유저뷰</router-link> |
      <router-link to="/newsView">뉴스뷰</router-link> |
      <router-link to="/jobsView">잡스뷰</router-link> |
      <router-link to="/askView">애스크뷰</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
