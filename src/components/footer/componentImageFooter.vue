<script>
import componentTextImageFooter from './componentTextImageFooter.vue';
export default {
    name: 'Image footer',
    data() {
        return {

        }
    },
    components: {
        componentTextImageFooter
    }
}
</script>
<template>
    <!--  image bg footer -->
    <div class="image">
        <componentTextImageFooter />
    </div>
    <!-- / image bg footer -->
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

div.image {
    background-image: url(../../assets/img/business-people-working-together.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    margin: 300px 0 100px 0;
    padding: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>