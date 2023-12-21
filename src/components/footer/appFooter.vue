<script>
import componentImageFooter from './componentImageFooter.vue';
import componentNavbarFooter from './componentNavbarFooter.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        componentImageFooter,
        componentNavbarFooter
    }
}
</script>
<template>
    <footer>
        <componentImageFooter />
        <div class="container-primary">
            <componentNavbarFooter />
        </div>
    </footer>
</template>
<style scoped>
.container-primary {
    color: gray;
}
</style>