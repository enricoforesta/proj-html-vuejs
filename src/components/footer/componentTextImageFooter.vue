<script>
export default {
    name: 'Text image footer',
    data() {
        return {
            title: "let's talk about work",
            content: "A wonderful serenity has taken possession Far far away, behind the word mountains"
        }
    }
}
</script>
<template>
    <!-- /text -->
    <div class="text">
        <h2>{{ title.toUpperCase() }}</h2>
        <h5>{{ content }}</h5>
        <input type="button" value="GET STARTED">
    </div>
    <!-- / text -->
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

div.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 50px;
    }

    h5 {
        font-size: 22px;
        width: 70%;
        font-weight: 100;
        line-height: 1.5;
        padding-bottom: 30px;
    }

    input {
        padding: 20px 50px;
        cursor: pointer;
        background-color: #1f1e38;
        color: $primary-text-color;
        border: none;

        &:hover {
            background-color: $btn-bg-color;
        }
    }

}
</style>