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
        <span>Alwats thee best way you need it</span>
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
        line-height: 100%;
    }

    span::before {
        content: '';
        display: inline-block;
        width: 50px;
        border: 2px solid $btn-bg-color;
        vertical-align: middle;
        margin-right: 20px;
    }

    div.read-more {
        display: flex;
        align-items: center;
        gap: 25px;

        input {
            padding: 20px 50px;
            background-color: $btn-bg-color;

            &:hover {
                cursor: pointer;
                background-color: $btn-hover-color;
            }
        }

        .fa-play {
            color: $btn-bg-color;
            cursor: pointer;
            border: 1px solid white;
            font-size: 12px;
            padding: 15px;
            border-radius: 50%;
        }
    }

}
</style>