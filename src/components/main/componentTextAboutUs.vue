<script>
export default {
    name: "textAboutUs",
    data() {
        return {
            title: 'we make your strategy work',
            subtitle: 'about us',
            content: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when I hear the buzz of the little world among the stalks, and grow familiar indescribable forms of the insects.and flies, then I feel the presence of the Almighty.'
        }
    },
    components: {

    }
}
</script>
<template>
    <div class="container-primary">
        <div class="text">
            <span>{{ subtitle.toUpperCase() }}</span>
            <h2>{{ title.toUpperCase() }}</h2>
            <p>{{ content }}</p>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

.container-primary {
    display: flex;
    flex-direction: row-reverse;
}

.text {
    padding: 150px 0px;
    margin-right: 100px;
    width: 45%;

    h2 {
        font-size: 55px;
        margin: 30px 0;
    }

    span::before {
        content: '';
        display: inline-block;
        width: 50px;
        border: 2px solid $btn-bg-color;
        vertical-align: middle;
        margin-right: 20px;
    }

    p {
        font-weight: 100;
        margin: 30px 0;
        line-height: 35px;
    }
}
</style>