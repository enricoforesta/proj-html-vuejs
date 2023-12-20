<script>
import componentConsultants from './componentConsultants.vue';
import componentAboutUs from './componentAboutUs.vue';
export default {
    name: "appMain",
    data() {
        return {

        }
    },
    components: {
        componentConsultants,
        componentAboutUs,
    }
}
</script>
<template>
    <main>
        <componentConsultants />
        <componentAboutUs />
    </main>
</template>
<style scoped></style>