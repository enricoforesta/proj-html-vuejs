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
        <input type="button" value="READ MORE">
        <span>i</span>
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
        padding: 15px 50px;
        background-color: $btn-bg-color;
    }
}
</style>