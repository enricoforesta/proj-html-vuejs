<script>
export default {
    name: "navbar",
    data() {
        return {
            listName: ['home', 'abojt', 'projects', 'services', 'blog', 'contact',]
        }
    }
}
</script>
<template>
    <div class="nav">
        <div class="logo"><img src="../../assets/img/logotype.png" alt=""></div>
        <ul class="list">
            <li v-for="item in listName">{{ item.toUpperCase() }}</li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
div.nav {
    display: flex;
    justify-content: space-between;

    ul.list {
        display: flex;
        gap: 15px;

        li {
            padding-top: 30px;

            &:hover {
                border-top: 2px solid currentColor;
            }
        }

    }

    div.logo {
        width: 140px;
        padding-top: 15px;
    }
}
</style>