<template>
    <div class="NewsView">
        <div v-for="item in this.$store.state.ask">{{ item.title }}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style lang="scss" scoped>

</style>