<template>
    <div>
        <div class="background">
            <div class="msg">
                <p class='slogan'>Let's debug the world!</p>
                <br>
                <p class="dis">东南大学成贤学院计算机协会</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
div.background {
    background: url("@/assets/back_ground_001.jpg");
    z-index: -1;
    /* width: 100%; */
    /* filter: blur(2px); */
    /* display: flex; */
    justify-content: center;
    align-items: center;
    /* background: url(@/assets/img/back_ground_002.jpg) repeat; */
    background-size: 100% auto;
    background-repeat: no-repeat;
    /*不要平铺*/
    background-position: center;
    height: 900px;

    display: block;
}

.slogan {
    font-size: 4em;
    font-weight: 900;
    color: #ffffff;
}

.dis {
    font-size: 1.5em;
    font-weight: 900;
    color: #ffffff;
}

p {
    display: block;
    box-sizing: border-box;
    /* 居中 */
    text-align: center;
}

.msg {
    /* 居中 */
    text-align: center;
    z-index: 1;
    /* 垂直居中 */
    /* display: flex; */
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>