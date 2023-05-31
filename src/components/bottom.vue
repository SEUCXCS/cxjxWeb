<template>
    <div id="bottom">
        <div>
            <h4>东南大学成贤学院
                <!-- <br> -->
                计算机协会
            </h4>

            <p>Let's debug the world!</p>
        </div>
        <div>
            <h4>友链</h4>
            <ul>
                <li><a href="http://cxxy.seu.edu.cn/">东南大学成贤学院官网</a></li>
                <li><a href="http://sy.cxxy.seu.edu.cn/cx/index.aspx">学校大创官网</a></li>
            </ul>
        </div>
        <div>
            <h4>加入我们</h4>
            <!-- <br> -->
            <img src="@/assets/qqGroupQR.jpg" alt="" class="qr">
            <p>招新QQ群</p>
        </div>
    </div>
</template>

<style scoped>
#bottom {
    width: 100%;
    /* height: 100px; */
    background-color: #555658;
    bottom: 0px;
    padding: 50px 10% 50px 10%;


    /* 弹性框架 */
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#bottom>div {
    margin: 0px 20px 0px 20px;
}

div,
h4,
p {
    color: rgb(168, 168, 168);
    margin-bottom: 5px;
}

a:link,
a:visited {
    color: rgb(168, 168, 168);
}

a:hover,
a:active {
    color: rgb(219, 219, 219);
    text-decoration: underline !important;
}

.qr {
    width: 100px;
    height: 100px;
}
</style>
