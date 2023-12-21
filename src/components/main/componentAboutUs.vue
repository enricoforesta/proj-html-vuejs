<script>
import componentTextAboutUs from './componentTextAboutUs.vue';
export default {
    name: "aboutUs",
    components: {
        componentTextAboutUs
    }
}
</script>
<template>
    <div class="about-us" id="about">
        <componentTextAboutUs />
    </div>
</template>
<style scoped lang="scss">
// Bg image
div.about-us {
    background-image: url('../../assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
}
</style>