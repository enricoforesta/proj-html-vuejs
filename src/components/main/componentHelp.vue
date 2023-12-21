<script>

export default {
    name: "help",
    data() {
        return {
            title: 'we help to deliver the business case',
            subtitle: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown',
        }
    },
    components: {

    }
}
</script>
<template>
    <div class="help">
        <input type="button" value="GET STARTED">
        <div class="text">
            <h2>{{ title.toUpperCase() }}</h2>
            <p>{{ subtitle }}</p>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

div.help {
    height: 320px;
    margin-right: 165px;
    color: black;
    background-color: $btn-bg-color;
    position: relative;

    input {
        padding: 20px 50px;
        cursor: pointer;
        background-color: $btn-hover-color;
        color: $primary-text-color;
        border: none;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    div.text {
        display: flex;
        height: 100%;
        gap: 50px;
        align-items: center;
        padding: 0 200px;

        &>* {
            width: calc((100% - 100px) / 2);
        }

        h2 {
            font-size: 50px;
        }

        p {
            font-weight: 300;
        }
    }
}
</style>