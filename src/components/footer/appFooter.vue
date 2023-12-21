<script>
import componentImageFooter from './componentImageFooter.vue';
import componentNavbarFooter from './componentNavbarFooter.vue';
import componentCopyrightFooter from './componentCopyrightFooter.vue';
export default {
    name: 'footer',
    components: {
        componentImageFooter,
        componentNavbarFooter,
        componentCopyrightFooter
    }
}
</script>
<template>
    <footer>
        <componentImageFooter />
        <div class="container-primary" id="contact">
            <componentNavbarFooter />
            <componentCopyrightFooter />
        </div>
    </footer>
</template>
<style scoped>
.container-primary {
    color: gray;
}
</style>