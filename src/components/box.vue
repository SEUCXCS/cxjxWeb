<template>
    <div class="line_">

        <div class="justify-content-center">
            <div class="box_">
                <div>
                    <h1>
                        通知公告
                    </h1>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </div>
            <div class="box_">
                <div>
                    <h1>
                        计协新闻
                    </h1>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </div>
            <div class="box_">
                <div>
                    <h1>
                        计协广场
                    </h1>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts"></script>


<style scoped>
.line_ {
    width: 100%;
    height: 200px;
    /* background-color: #f5f5f5; */
}

.justify-content-center {
    /* left: 30%; */
    /* margin-left: 20%;
    margin-right: 20%; */
    position: relative;
    top: -175px;
    /* 居中 */
    margin: 0 auto;
    width: 70%;
    /* width: 40%; */
    /* height: 100px; */
    height: 100%;

    display: -webkit-flex;
    display: flex;

    justify-content: space-between;
}

.box_ {
    /* background-color: cornflowerblue; */
    width: 30%;
    padding-left: 10px;
    padding-right: 10px;
    /* height: 100px;
    margin: 10px; */
}

.box_ div {
    background-color: rgb(255, 255, 255);
    /* width: 100%; */
    height: 300px;
    margin-bottom: 30px;

    /* 圆角 */
    border-radius: .50rem;
    /* 边线 */
    border: 1px solid #a3a3a3;

    padding: 20px;
}
</style>
