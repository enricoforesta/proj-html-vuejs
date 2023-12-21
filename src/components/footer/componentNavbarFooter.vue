<script>
export default {
    name: "navbar footer",
    data() {
        return {
            listName: ['home', 'about', 'projects', 'services', 'blog', 'contact']
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
            <li v-for="item in listName">{{ item.toUpperCase() }}</li>
        </ul>
        <!-- / list -->
        <!--  icon -->
        <div class="icon">
            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
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
}</style>