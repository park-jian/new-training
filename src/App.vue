<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/editor">에디터</router-link> |
      <router-link to="/calendar">달력</router-link> |
      <router-link to="/main">메인</router-link> |
      <router-link to="/itemView">아이템뷰</router-link> |
      <router-link to="/newsView">뉴스뷰</router-link> |
      <router-link to="/jobsView">잡스뷰</router-link> |
      <router-link to="/askView">애스크뷰</router-link> |
    </div>
    <transition name="hoho">
      <router-view/>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Spinner from '@/components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components: {
    Header,
    Spinner
  },
  data() {
    return {
      loadingStatus : false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>
<style lang="scss" >
.hoho-enter-active, .hoho-leave-active {
  transition: opacity .5s;
}
.hoho-enter, .hoho-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color:#42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
