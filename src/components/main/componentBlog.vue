<script>
import componentImageBlog from './componentImageBlog.vue';
export default {
    name: "Blog",
    data() {
        return {
            title: 'the recent news you must read it',
            subTitle: 'blog'
        }
    },
    components: {
        componentImageBlog,
    }
}
</script>
<template>
    <div class="container-primary" id="blog">
        <!-- text -->
        <div class="text">
            <span>{{ subTitle.toUpperCase() }}</span>
            <h2>{{ title.toUpperCase() }}</h2>
        </div>
        <!-- / text -->
        <!-- button -->
        <div class="button">
            <input type="button" value="VIEW ALL">
        </div>
        <!-- / button -->
        <componentImageBlog />
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
            margin: 30px 0;
        }
    }

    div.button {
        align-self: center;

        input {
            padding: 20px 50px;
            cursor: pointer;
            background-color: $btn-bg-color;

            &:hover {
                background-color: $btn-hover-color;
            }
        }
    }

}
</style>