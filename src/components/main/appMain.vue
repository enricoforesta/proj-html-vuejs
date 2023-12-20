<script>
import componentConsultants from './componentConsultants.vue';
import componentAboutUs from './componentAboutUs.vue';
import componentHelp from './componentHelp.vue';
export default {
    name: "appMain",
    data() {
        return {

        }
    },
    components: {
        componentConsultants,
        componentAboutUs,
        componentHelp,
    }
}
</script>
<template>
    <main>
        <componentConsultants />
        <componentAboutUs />
        <componentHelp />
    </main>
</template>
<style scoped></style>