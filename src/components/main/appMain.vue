<script>
import componentConsultants from './componentConsultants.vue';
import componentAboutUs from './componentAboutUs.vue';
import componentHelp from './componentHelp.vue';
import componentProject from './componentProject.vue';
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
        componentProject,
    }
}
</script>
<template>
    <main>
        <componentConsultants />
        <componentAboutUs />
        <componentHelp />
        <componentProject />
    </main>
</template>
<style scoped></style>