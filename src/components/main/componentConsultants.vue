<script>
export default {
    name: "consultants",
    data() {
        return {
            title: 'our consultans can help you',
            listConsultants: [
                {
                    subTitle: 'statical consulting',
                    description: 'When, while lovely valley teens with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
                    pathImage: '../../assets/img/logoStatical.png'
                }, {
                    subTitle: 'digital consulting',
                    description: 'When, while lovely valley teens with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
                    pathImage: '../../assets/img/logoDigital.png',
                }, {
                    subTitle: 'banking consulting',
                    description: 'When, while lovely valley teens with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
                    pathImage: '../../assets/img/logoBanking.png',
                }, {
                    subTitle: 'enterprise consulting',
                    description: 'When, while lovely valley teens with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a',
                    pathImage: '../../assets/img/logoEnterprise.png',
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
    <div class="consultants">
        <!--  title -->
        <div class="title">
            <h2>{{ title.toUpperCase() }}</h2>
            <hr>
        </div>
        <!-- / title -->
        <div class="container-secondary">
            <!-- / list -->
            <ul>
                <li v-for="item in listConsultants">
                    <div class="image"> <img :src=getImagePath(item.pathImage) :alt=item.title>
                    </div>
                    <div class="description">
                        <h4>{{ item.subTitle.toUpperCase() }}</h4>
                        <p>{{ item.description }}</p>
                    </div>
                </li>
            </ul>
            <!-- / list -->
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../scss/partials/variable' as *;

div.consultants {
    background-color: white;
    color: black;

    div.title {
        display: flex;
        padding: 100px 0 150px 150px;
        align-items: center;
        gap: 20px;

        h2 {
            font-size: 25px;
            flex-shrink: 0;
        }

        hr {
            display: inline-block;
            width: 100%;
            border: 2px solid $btn-bg-color;
        }

    }

    div.container-secondary {
        padding-bottom: 150px;

        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 150px;

            li {
                display: flex;
                gap: 50px;
                width: calc((100% - 150px) / 2);

                .image {
                    width: 200px;
                }

                .description {
                    line-height: 30px;

                    h4 {
                        padding-bottom: 15px;
                    }
                }
            }
        }
    }
}
</style>