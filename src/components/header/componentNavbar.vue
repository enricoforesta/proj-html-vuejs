<script>
import componentList from '../componentList.vue';
export default {
    name: "navbar",
    data() {
        return {
        }
    },
    components: {
        componentList
    }
}
</script>
<template>
    <div class="nav">
        <div class="logo"><img src="../../assets/img/logotype.png" alt=""></div>
        <componentList />
    </div>
</template>
<style scoped lang="scss">
div.nav {
    display: flex;
    justify-content: space-between;

    div.logo {
        width: 140px;
        padding-top: 15px;
    }
}
</style>