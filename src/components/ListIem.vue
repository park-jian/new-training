<template>
    <div class="NewsView">
        <ul class="news-list">
            <li v-for="item in listItems" class="post">
                <!--포인트 영역 -->
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <!-- 기타 정보영역 -->
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a v-bind:href="item.url">
                                {{item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`itemView/${item.id}`" class="link-text">
                                {{item.title}}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{item.time_ago }} 
                        by 
                        <!-- <router-link v-bind:to="'/userView/' + item.user"> {{item.user}} </router-link> -->
                        <router-link 
                        v-if="item.user"
                        v-bind:to="`/userView/${item.user}`" class="link-text"> {{item.user}} </router-link>
                        <a :href= "item.url" v-else>
                          {{ item.domain }}
                         </a>
                    </small>
                </div>
            </li>
        </ul>
       
    </div>
</template>

<script>
export default { 
    

    computed: {
        listItems() {
            const name = this.$route.name;
            if (name === 'NewsView') {
                return this.$store.state.news;
            } else if( name === 'JobsView') {
                return this.$store.state.jobs;
            } else if( name === 'AskView') {
                return this.$store.state.ask;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.news-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title {
    margin:0;
}
.link-text {
    color: #828282;
}
</style>