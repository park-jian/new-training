<template>
    <div >
        <list-item></list-item>
        <!-- 변경 테스트 실행중 -->
        <!-- <ul class="news-list">
            <li v-for="item in fetchedAsk" class="post">
               
                <div class="points">
                    {{ item.points }}
                </div>
               
              
                <div>
                    <p class="news-title">
                          <router-link :to="`itemView/${item.id}`" class="link-text">{{item.title}}</router-link>
                    </p>
                    <small class="link-text">
                        {{item.time_ago }} by {{item.user}}
                       
                    </small>
                </div>
            </li>
        </ul>
         -->
    </div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListIem.vue';
import bus from '../utils/bus.js';
export default {
    components: {
        ListItem,
    },
     created() {
        bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('FETCH_ASK')
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error);
            });
        }, 3000);
        
    }
   
}
// export default {
//     computed: {
//         //    방법3
//         ...mapGetters([
//             'fetchedAsk'
//         ])
        //     방법2
        // ...mapState({
        //     ask: state => state.ask     //ask에 state.ask를 넣겠다.
        // })

        //      방법1
        //      ask() {
        //        return this.$store.state.ask;
        //    }


//     },
//     created() {
//         this.$store.dispatch('FETCH_ASK');
//     }
// }
</script>

<style lang="scss" scoped>

</style>