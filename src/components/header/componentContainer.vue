<script>
import componentNavbar from './componentNavbar.vue';
import componentTextHeader from './componentTextHeader.vue';
export default {
    name: "container",
    data() {
        return {

        }
    }, components: {
        componentNavbar,
        componentTextHeader
    }
}
</script>
<template>
    <div class="container">
        <componentNavbar />
        <componentTextHeader />
    </div>
</template>
<style scoped lang="scss">
div.container {
    width: 1600px;
    margin: 0 auto;
}
</style>