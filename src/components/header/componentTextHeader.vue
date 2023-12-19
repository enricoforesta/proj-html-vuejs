<script>

export default {
    name: "text-header",
    data() {
        return {

        }
    }, components: {
    }
}
</script>
<template>
    <div class="text">
        <span> --- Alwats thee best way you need it</span>
        <h2>The best bussiness consulting</h2>
        <div class="read-more">
            <input type="button" value="READ MORE">
            <font-awesome-icon icon="fa-solid fa-play" />
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

div.text {
    padding: 180px 20px;
    width: 800px;

    h2 {
        font-size: 100px;
        text-transform: uppercase;
        margin: 50px 0;
    }

    input {
        padding: 20px 50px;
        background-color: $btn-bg-color;
    }

    div.read-more {
        display: flex;
        align-items: center;
        gap: 25px;

        .fa-play {
            color: $btn-bg-color;
            border: 1px solid white;
            font-size: 12px;
            padding: 15px;
            border-radius: 50%;
        }
    }

}
</style>