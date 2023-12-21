<script>
export default {
    name: "list",
    data() {
        return {
            listName: ['home', 'about', 'projects', 'services', 'blog', 'contact',]
        }
    }
}
</script>
<template>
    <ul class="list">
        <li v-for="item in listName">{{ item.toUpperCase() }}</li>
    </ul>
</template>
<style scoped lang="scss">
ul.list {
    display: flex;
    gap: 15px;

    li {
        padding-top: 30px;
        cursor: pointer;

        &:hover {
            border-top: 2px solid currentColor;
        }
    }

}
</style>