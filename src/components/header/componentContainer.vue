<script>
import componentNavbar from './componentNavbar.vue';
export default {
    name: "container",
    data() {
        return {

        }
    }, components: {
        componentNavbar
    }
}
</script>
<template>
    <div class="container">
        <componentNavbar />
        <h2>testo lungo</h2>
    </div>
</template>
<style scoped lang="scss">
div.container {
    width: 1600px;
    margin: 0 auto;
}
</style>