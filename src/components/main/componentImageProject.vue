<script>
export default {
    name: "imageProject",
    data() {
        return {
            pathImage: [
                {
                    path: '../../assets/img/Dry-1.jpg'
                },
                {
                    path: '../../assets/img/sponsor.jpg',
                },
                {
                    path: '../../assets/img/vizeon.jpg',
                },

            ]
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>
<template>
    <div class="image">
        <img v-for="image in pathImage" :src="getImagePath(image.path)" alt="c">
    </div>
</template>
<style scoped>
.image {
    width: 100%;
    display: flex;
    gap: 20px;

    &>* {
        width: calc((100% - 40px) / 3);
    }
}
</style>