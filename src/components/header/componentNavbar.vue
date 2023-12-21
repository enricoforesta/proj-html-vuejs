<script>
import { store } from '../../store';
export default {
    name: "navbar header",
    data() {
        return {
            store
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
            <li v-for="item in this.store.listName"> <a :href="item.id"> {{ item.title.toUpperCase() }} </a></li>
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