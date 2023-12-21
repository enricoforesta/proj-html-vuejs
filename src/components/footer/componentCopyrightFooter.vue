<script>
export default {
    name: 'Copyright',
    data() {
        return {
            terms: 'Terms of use ',
            author: 'Privacy Environmental Policy',
            copyright: 'Copyright © 2020 Phlox Consulting.All Rights Reserved.'
        }
    },
}
</script>
<template>
    <div class="content">
        <!-- terms -->
        <div class="terms">
            <h5>{{ terms }}</h5>
            <h5>{{ author }}</h5>
        </div>
        <!-- / terms -->
        <!-- copyright -->
        <div class="copyright">
            <h5>{{ copyright }}</h5>
            <!-- icon -->
            <div class="icon">
                <span><font-awesome-icon icon="fa-solid fa-arrow-up" /></span>
                <span> <font-awesome-icon icon="fa-regular fa-comment" flip="horizontal" /></span>
            </div>
            <!-- / icon -->
        </div>
        <!-- /copyright -->
    </div>
</template>
<style scoped lang="scss">
.content {
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 30px 0;

    .terms h5 {
        margin: 10px 0;
    }

    .copyright {
        position: relative;

        .icon {
            display: flex;
            align-items: center;
            gap: 20px;
            position: absolute;
            right: - 120px;
            bottom: 0;

            span {
                cursor: pointer;
            }

            .fa-arrow-up {
                font-size: 10px;
                color: black;
                background-color: white;
                border-radius: 50%;
                padding: 15px;
            }

            .fa-comment {
                color: white;
                background-color: #527ceb;
                border-radius: 50%;
                padding: 18px;
            }
        }

    }

}
</style>