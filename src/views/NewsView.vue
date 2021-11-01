<template>
    <div class="NewsView">
        <!-- <div v-for="user in users">{{ user.title }}</div> -->
        <div v-for="user in this.$store.state.news">{{ user.title }}</div>
    </div>
</template>

<script>
//import { fetchNewsList } from '../api/index.js';
export default {
    // data() {      <-- 이건 이제 필요 없음. vuex에서 받아 올 거라서.
    //     return {
    //         users: []
    //     }
    // },
    created() {
        this.$store.dispatch('FETCH_NEWS');
        // fetchNewsList()
        // .then(response => 
        //    // this.users = response.data;
        //    this.users = response.data
        // )
        // .catch(error => 
        //     console.log(error)
        // )
    }
}
</script>

<style lang="scss" scoped>

</style>