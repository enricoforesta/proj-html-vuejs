<script>
import componentImageProject from './componentImageProject.vue';
export default {
    name: "project",
    data() {
        return {
            title: 'our expert trusted consultants help clients',
            subTitle: 'projects'
        }
    },
    components: {
        componentImageProject,
    }
}
</script>
<template>
    <div class="container-primary" id="projects">
        <!-- text -->
        <div class="text">
            <span>{{ subTitle.toUpperCase() }}</span>
            <h2>{{ title.toUpperCase() }}</h2>
        </div>
        <!-- / text -->
        <!-- button -->
        <div class="button">
            <span><font-awesome-icon icon="fa-solid fa-arrow-left" /></span>
            <span> <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
        </div>
        <!-- / button -->
        <componentImageProject />
    </div>
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

.container-primary {
    margin: 180px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div.text {
        span::before {
            content: '';
            display: inline-block;
            width: 50px;
            border: 2px solid $btn-bg-color;
            vertical-align: middle;
            margin-right: 20px;
        }

        h2 {
            font-size: 30px;
            width: 80%;
            margin: 30px 0;
        }
    }

    div.button {
        span {
            font-size: 12px;
            margin: 5px;
            padding: 15px;
            background-color: rgba(128, 128, 128, 0.226);
            cursor: pointer;
        }
    }

}
</style>