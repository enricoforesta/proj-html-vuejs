<script>
export default {
    name: "imageProject",
    data() {
        return {
            title: 'Canadian Consulting Firm acquired by UK Giant',
            subtitle: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper Impenetrable follage of my trees, and but a',
            date: 'july 4 2019',
            author: 'paul'
        }
    },
}
</script>
<template>
    <div class="news">
        <h5>{{ date }} by {{ author }}</h5>
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
    </div>
</template>
<style scoped lang="scss">
div.news {
    color: black;

    background-color: white;
    position: absolute;
    bottom: -100px;
    right: 0;
    margin-left: 100px;
    padding: 50px 80px;
    font-size: 18px;

    h5 {
        color: red;
        font-weight: 500;
    }

    h2 {
        padding: 30px 0;
        font-weight: 500;
    }

    p {
        font-weight: 100;
    }
}
</style>