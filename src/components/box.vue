<template>
    <div class="boxLine">
        <div class="boxLine-center">
            <div class="box_">
                <div class="box_2">
                    <h3>
                        通知公告
                    </h3>
                    <div v-for="notice in noticeList" class='news'>
                        <p class="title">{{ notice.title }}</p>
                        <p class="date">{{ getTimestr(notice.updateTime) }}</p>
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
                        <p class="date">{{ getTimestr(news.updateTime) }}</p>
                    </div>
                </div>
            </div>
            <div class="box_">
                <div class="box_2">
                    <h3>
                        计协广场
                    </h3>
                    <div v-for="blog in blogList" class='news'>
                        <p class="title">{{ blog.title }}</p>
                        <p class="date">{{ getTimestr(blog.updateTime) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">


import { ref } from 'vue'
const newsList = ref([] as any[])
const noticeList = ref([] as any[])
const blogList = ref([] as any[])
// interface news {
//     title: string,
//     text: string,
//     author: string,
//     updateTime: string,
// }
newsList.value = [
    {
        "title": "新闻列表加载中",
        "updateTime": "2023-05-28T17:13:32"
    }
]
noticeList.value = [
    {
        "title": "通知列表加载中",
        "updateTime": "2023-05-28T17:13:32"
    }
]
blogList.value = [
    {
        "title": "博客功能建设中……",
        "updateTime": null
    }
]

import * as api from "@/api/api"
api.GetNewsList(false, 5)
    .then((res: any) => {
        console.log("获取新闻api：", res)
        if (res.length > 0) newsList.value = res
        else newsList.value = [
            {
                "title": "暂时没有新闻哦"
            }
        ]
        // newsList.value = res
    })
    .catch((err: any) => {
        console.log(err)
    })

// fetch('http://81.68.242.84:5438/api/content/blog?amount=5', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     }
// })
//     .then(res => res.json())
//     .then(res => {
//         console.log("blogres", res)
//         if (res.code == 200) {
//             blogList.value = res.data
//             console.log(blogList.value)
//         } else {
//             console.log('获取博客列表失败')
//         }
//     })
api.GetNoticeList(false, 5)
    .then((res: any) => {
        console.log("获取通知api：", res)
        // noticeList.value = res
        if (res.length > 0) noticeList.value = res
        else noticeList.value = [
            {
                "title": "暂时没有通知哦"
            }
        ]
    })
    .catch((err: any) => {
        console.log(err)
    })


// 2021-05-28T17:13:32
function getTimestr(str: string) {
    console.log("时间串：", str)
    if (str == null || str == undefined) return str
    let date = new Date(str.replace("T", ' '))
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
