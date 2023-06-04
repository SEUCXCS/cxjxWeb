<template>
    <div id="topnav" :class=nav>
        <ul>
            <li>
                <router-link to="/" class="logo">
                    <img src="@/assets/计协logo.png" alt="logo" />
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <p>首页</p>
                </router-link>
            </li>
            <li><router-link to="/#t1">
                    <p>计协简介</p>
                </router-link></li>
            <li><router-link to="/news">
                    <p>新闻&通知</p>
                </router-link></li>
            <li><router-link to="/square">
                    <p>计协广场</p>
                </router-link></li>
            <li><router-link to="/knowledgebase/">
                    <p>计协知识库</p>
                </router-link></li>
            <li><router-link to="/#bottom">
                    <p>加入我们</p>
                </router-link></li>
        </ul>
    </div>
    <div class="background">
            <div class="msg">
                <!-- <p class='slogan'>Let's debug the world!</p>
                <br>
                <p class="dis">东南大学成贤学院计算机协会</p> -->
            </div>

        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const nav = ref('W_')
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 200) {
        nav.value = 'B_'
    } else {
        nav.value = 'W_'
    }
}

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
    border: 0;
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
    /* background-color: #ffffff00; */

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





a p {
    font-size: 1.2em;
    font-weight: 900;
}


/* B_和W_ */
#topnav.B_ {
    background-color: #ffffff;
}

#topnav.W_ {
    background-color: transparent;
}



#topnav.W_ a:link,
#topnav.W_ a:visited {
    color: #ffffff;
}

/* , */
#topnav.B_ a:link,
#topnav.B_ a:visited {
    color: #000000;
}


#topnav.B_ a:hover,
#topnav.B_ a:active,
#topnav.W_ a:hover,
#topnav.W_ a:active {

    color: #1ecd97;
}





/* 背景的css */
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
    height: 100px;

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