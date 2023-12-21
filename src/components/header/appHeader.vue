<script>
import componentNavbar from './componentNavbar.vue';
import componentTextHeader from './componentTextHeader.vue';
export default {
    name: "appHeader",
    components: {
        componentNavbar,
        componentTextHeader
    }
}
</script>
<template>
    <header>
        <div class="container-primary">
            <componentNavbar />
            <componentTextHeader />
        </div>
    </header>
</template>
<style scoped lang="scss">
// bg-image
header {
    background-image: url('../../assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
</style>