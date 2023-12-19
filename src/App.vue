<script>
import appHeader from './components/header/appHeader.vue';
import appMain from './components/main/appMain.vue';
import appFooter from './components/footer/appFooter.vue';
export default {
    components: {
        appHeader,
        appMain,
        appFooter
    }
}
</script>

<template>
    <appHeader />
    <appMain />
    <appFooter />
</template>

<style scoped></style>
