<script>
import componentNewsBlog from './componentNewsBlog.vue';
export default {
    name: "image blog",
    data() {
        return {
            pathImage: [
                {
                    path: '../../assets/img/business-people-working.jpg'
                },
                {
                    path: '../../assets/img/startup-business-people.jpg',
                },
            ]
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
    components: {
        componentNewsBlog
    }
}
</script>
<template>
    <div class="image">
        <div v-for="image in pathImage" class="container-image">
            <img :src="getImagePath(image.path)" alt="c">
            <componentNewsBlog />
        </div>
    </div>
</template>
<style scoped lang="scss">
.image {
    width: 100%;
    display: flex;
    gap: 20px;

    &>* {
        width: calc((100% - 20px) / 2);
    }

    .container-image {
        position: relative;
    }
}
</style>