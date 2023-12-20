<script>
import componentTextAboutUs from './componentTextAboutUs.vue';
export default {
    name: "aboutUs",
    data() {
        return {

        }
    },
    components: {
        componentTextAboutUs
    }
}
</script>
<template>
    <div class="about-us">
        <componentTextAboutUs />
    </div>
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

.about-us {
    background-image: url('../../assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
    color: $primary-text-color;
}
</style>