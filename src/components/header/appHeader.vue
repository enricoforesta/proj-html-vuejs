<script>
import componentContainer from './componentContainer.vue';
export default {
    data() {
        name:
        return {

        }
    },
    components: {
        componentContainer
    }
}
</script>
<template>
    <header>
        <componentContainer />
    </header>
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

header {
    background-image: url('../../assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg');
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: right;
    height: 1000px;
    color: $primary-text-color;
}
</style>