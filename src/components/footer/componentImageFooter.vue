<script>
import componentTextImageFooter from './componentTextImageFooter.vue';
export default {
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
    <div class="image">
        <componentTextImageFooter />
    </div>
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