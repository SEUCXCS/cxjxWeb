<template>
    <div class="boxLine">
        <div class="boxLine-center">
            <div class="box_">
                <div class="box_2">
                    <h3>
                        通知公告
                    </h3>
                    <div v-for="news in newsList" class='news'>
                        <p class="title">{{ news.title }}</p>
                        <p class="date">{{ getTimestr(news.time) }}</p>
                    </div>
                </div>
            </div>
            <div class="box_">
                <div class="box_2">
                    <h3>
                        计协新闻
                    </h3>
                    <div v-for="news in newsList" class='news'>
                        <p class="title">{{ news.title }}</p>
                        <p class="date">{{ getTimestr(news.time) }}</p>
                    </div>
                </div>
            </div>
            <div class="box_">
                <div class="box_2">
                    <h3>
                        计协广场
                    </h3>
                    <div v-for="news in newsList" class='news'>
                        <p class="title">{{ news.title }}</p>
                        <p class="date">{{ getTimestr(news.time) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">


import { ref } from 'vue'
const newsList = ref([] as news[])
interface news {
    title: string,
    description: string,
    text: string,
    author: string,
    time: string,
}
newsList.value = [
    {
        "title": "重大专项科研难题攻关取得阶段性大捷",
        "description": "重大专项科研难题攻关取得阶段性大捷",
        "text": "20230527wza写java写爽了",
        "author": "mehdikyubx",
        "time": "2023-05-28T17:13:32"
    },
    {
        "title": "重大专项科研难题攻关取得阶段性大捷",
        "description": "重大专项科研难题攻关取得阶段性大捷",
        "text": "20230527wza写java写爽了",
        "author": "mehdikyubx",
        "time": "2023-05-28T17:13:32"
    }, {
        "title": "重大专项科研难题攻关取得阶段性大捷",
        "description": "重大专项科研难题攻关取得阶段性大捷",
        "text": "20230527wza写java写爽了",
        "author": "mehdikyubx",
        "time": "2023-05-28T17:13:32"
    }, {
        "title": "重大专项科研难题攻关取得阶段性大捷",
        "description": "重大专项科研难题攻关取得阶段性大捷",
        "text": "20230527wza写java写爽了",
        "author": "mehdikyubx",
        "time": "2023-05-28T17:13:32"
    }, {
        "title": "重大专项科研难题攻关取得阶段性大捷",
        "description": "重大专项科研难题攻关取得阶段性大捷",
        "text": "20230527wza写java写爽了",
        "author": "mehdikyubx",
        "time": "2023-05-28T17:13:32"
    }, {
        "title": "重大专项科研难题攻关取得阶段性大捷",
        "description": "重大专项科研难题攻关取得阶段性大捷",
        "text": "20230527wza写java写爽了",
        "author": "mehdikyubx",
        "time": "2023-05-28T17:13:32"
    }
]
// 添加Access-Control-Allow-Origin  解决跨域问题  
fetch('http://81.68.242.84:5438/api/home/news', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})
    .then(res => res.json())
    .then(res => {
        console.log(res)
        if (res.code == 200) {
            newsList.value = res.data
            console.log(newsList.value)
        } else {
            console.log('获取新闻列表失败')
        }
    })

function getTimestr(str: string) {
    let date = new Date(str)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

</script>


<style scoped>
.boxLine {
    width: 100%;
    height: 200px;
    /* background-color: #f5f5f5; */
}

.boxLine-center {
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

.box_2 {
    background-color: rgb(255, 255, 255);
    /* width: 100%; */
    height: 300px;
    margin-bottom: 30px;

    /* 圆角 */
    border-radius: .50rem;
    /* 边线 */
    border: 1px solid #a3a3a3;

    padding: 20px;

    overflow: auto;
}

h3 {
    padding-bottom: 10px;
    border-bottom: 1px solid #a3a3a3;
    margin-bottom: 5px;
}

p.title {
    color: #3b3b3b;
}

p.date {
    text-align: right;
    color: #616161;
}

div.news {
    padding-bottom: 5px;
    border-bottom: 1px solid #a3a3a3;
    margin-bottom: 5px;

}
</style>
