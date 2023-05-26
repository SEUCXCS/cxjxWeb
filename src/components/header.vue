<template>
    <div id="topnav">
        <!-- <div class="left">
            
            <img src="@/assets/左箭头.png" alt="left" />
        </div> -->
        <div>
            <ul>
                <li>
                    <a href="/index.html" class="logo">
                        <img src="@/assets/计协logo.png" alt="logo" />
                    </a>
                </li>
                <li>
                    <a href="/index.html">
                        <p>首页</p>
                    </a>
                </li>
                <li><a href="/index.html">
                        <p>计协简介</p>
                    </a></li>
                <li><a href="/index.html">
                        <p>新闻中心</p>
                    </a></li>
                <li><a href="/index.html">
                        <p>活动中心</p>
                    </a></li>
                <li><a href="/index.html">
                        <p>资源归档</p>
                    </a></li>
                <li><a href="/index.html">
                        <p>加入我们</p>
                    </a></li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#topnav {
    /* 固定位置 */
    position: fixed;
    height: 74px;
    width: 100%;
    padding: 0 20% 0 20%;

    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1030;
    background-color: transparent;
    border: 0;
    /* -webkit-transition: all .5s ease; */
    transition: all .5s ease;

    display: block;

    text-align: left;
}

a.logo {
    padding-top: 20%;
    padding-bottom: 20%;
}

img {
    height: 74px;
    width: 160px;
}


ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 74px;
    /* width: 100%; */
    background-color: #ffffff00;

    list-style: none;
    /* 垂直居中 */
    /* flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center; */
}

li {
    list-style: none;
    height: 74px;
    width: 100%;
    text-align: center;
    line-height: 74px;
}

a:visited,
a:link {
    color: #ffffff;
}

a:hover,
a:active {
    color: #1ecd97;
}


a p {
    font-size: 1.2em;
    font-weight: 900;
    /* padding-top: 25px;
    padding-bottom: 25px;
    min-height: 62px; */
}
</style>