<script>
import componentTestimonialBottom from './componentTestimonialBottom.vue';
export default {
    name: "testimonial",
    data() {
        return {
            title: "what's the customer say about our work",
            subTitle: 'testimonial'
        }
    },
    components: {
        componentTestimonialBottom
    }
}
</script>
<template>
    <div class="container-primary">
        <!-- text -->
        <div class="text">
            <span>{{ subTitle.toUpperCase() }}</span>
            <h2>{{ title.toUpperCase() }}</h2>
        </div>
        <!-- / text -->
    </div>
    <componentTestimonialBottom />
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

.container-primary {

    .text {
        text-align: center;

        span::after {
            content: '';
            display: inline-block;
            width: 50px;
            border: 2px solid $btn-bg-color;
            vertical-align: middle;
            margin-left: 95%;
        }

        h2 {
            font-size: 30px;
            margin: 30px 0;
            margin-left: auto;
            text-align: end;
            width: 30%;
        }
    }
}
</style>