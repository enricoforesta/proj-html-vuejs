<script>
export default {
    name: "testimonalBottom",
    data() {
        return {
            result: [
                {
                    content: 'When while lovely valley teerns with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees and but a thousand unknown plants are noticed by when I hear the buzz of the little.',
                    author: 'Vera Ducan',
                    from: 'Amazon Inc.'
                },
                {
                    content: 'When while lovely valley teerns with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees and but a thousand unknown plants are noticed by when I hear the buzz of the little.',
                    author: 'Vera Ducan',
                    from: 'Amazon Inc.'
                },
                {
                    content: 'When while lovely valley teerns with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees and but a thousand unknown plants are noticed by when I hear the buzz of the little.',
                    author: 'Vera Ducan',
                    from: 'Amazon Inc.'
                },

            ]
        }
    },
}
</script>
<template>
    <!-- list -->
    <ul class="content ">
        <li v-for="item in result">
            <p>{{ item.content }}</p>
            <h3>{{ item.author }}</h3>
            <h5>{{ item.from }}</h5>
        </li>
    </ul>
    <!-- / list -->
</template>
<style scoped>
.content {
    background-color: white;
    color: black;
    padding: 50px 100px;
    margin-left: 160px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    &>* {
        width: calc((100% - 40px) / 3);
    }

    li {
        padding-right: 100px;

        p {
            font-weight: 100;
            font-size: 18px;
            line-height: 1.5;
            padding-bottom: 50px;
        }

        h5 {
            font-weight: 100;
            padding: 15px 0 30px 0;
        }

    }


}
</style>