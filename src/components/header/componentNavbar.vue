<script>
export default {
    name: "navbar header",
    data() {
        return {
            // listName: ['home', 'about', 'projects', 'services', 'blog', 'contact',]
            listName: [
                {
                    title: 'home',
                    id: '#home',
                },
                {
                    title: 'about',
                    id: '#about',
                },
                {
                    title: 'projects',
                    id: '#projects',
                },
                {
                    title: 'services',
                    id: '#services',
                },
                {
                    title: 'blog',
                    id: '#blog',
                },
                {
                    title: 'contact',
                    id: '#contact',
                },
            ]
        }
    }
}
</script>
<template>
    <!-- navbar -->
    <div class="nav">
        <div class="logo"><img src="../../assets/img/logotype.png" alt=""></div>
        <!--  list -->
        <ul class="list">
            <li v-for="item in listName"> <a :href="item.id"> {{ item.title.toUpperCase() }} </a></li>
        </ul>
        <!-- / list -->
    </div>
    <!-- / navbar -->
</template>
<style scoped lang="scss">
div.nav {
    display: flex;
    justify-content: space-between;

    ul.list {
        display: flex;
        gap: 15px;

        li {
            font-weight: 100;
            padding-top: 30px;
            cursor: pointer;

            &:hover {
                border-top: 2px solid currentColor;
                font-weight: bold;
            }
        }
    }

    div.logo {
        width: 140px;
        padding-top: 15px;
    }
}
</style>