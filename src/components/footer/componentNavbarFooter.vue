<script>
import { store } from '../../store';
export default {
    name: "navbar footer",
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
        <div class="logo"><img src="../../assets/img/logotype-2-139x23.png" alt="PHLOX"></div>
        <!--  list -->
        <ul class="list">
            <li v-for="item in this.store.listName"> <a :href="item.id"> {{ item.title.toUpperCase() }} </a></li>
        </ul>
        <!-- / list -->
        <!--  icon -->
        <div class="icon">
            <a href="https://www.instagram.com/accounts/login/" target="_blank"><font-awesome-icon
                    icon="fa-brands fa-instagram" /></a>
            <a href="https://it.linkedin.com/" target="_blank"> <font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
            <a href="https://m.facebook.com/login/?locale=it_IT&refsrc=deprecated" target="_blank"><font-awesome-icon
                    icon="fa-brands fa-facebook-f" /></a>
            <a href="https://twitter.com/i/flow/login" target="_blank"><font-awesome-icon
                    icon="fa-brands fa-x-twitter" /></a>
        </div>
        <!-- / icon -->
    </div>
    <!-- / navbar -->
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

div.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid currentColor;
    padding-bottom: 90px;

    ul.list {
        display: flex;
        gap: 15px;

        li {
            cursor: pointer;

            &:hover {
                color: $primary-text-color;
            }
        }
    }

    div.icon {
        a {
            padding: 0 10px;
            color: $primary-text-color;
        }
    }
}
</style>