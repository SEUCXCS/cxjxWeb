<script setup lang="ts">
import header_ from "@/components/header_short.vue"
import { ref, computed } from 'vue'
document.title = "成贤计协 | 新闻&通知"

import cxjxApiGet from "@/api/api"

// 原始数据
const newsList = ref([] as any[])
const noticeList = ref([] as any[])

// 是否要显示通知和新闻
const displayNews = ref(true)
const displayNotice = ref(true)
// 不显示的日期
const displayDate = ref([] as any[])
// 合并后的数据
const displayDataList = computed(() => {
    let ret: any[] = []
    if (displayNews.value) {
        ret = ret.concat(newsList.value)
    }
    if (displayNotice.value) {
        ret = ret.concat(noticeList.value)
    }
    return ret
})
// 渲染的数据
const displayData = computed(() => {
    let ret: any[] = []
    displayDataList.value.forEach((item) => {
        if (item.uploadTime == undefined || item.uploadTime == null) return
        let date = new Date(item.uploadTime)
        let year = date.getFullYear()
        let month = date.getMonth() + 1

        // 查找是否已经有这个年份,如果有就在这个年份下面添加月份,如果没有就添加这个年份
        let yearIndex = ret.findIndex((item) => {
            return item.year == year
        })
        if (yearIndex == -1) {
            ret.push({
                year: year,
                display: true,
                month: [{ month: month, display: true, news: [item] }]
            })
        } else {
            // 如果没有这个月份就添加这个月份
            let monthIndex = ret[yearIndex].month.findIndex((item: any) => {
                return item.month == month
            })
            if (monthIndex == -1) {
                ret[yearIndex].month.push({ month: month, display: true, news: [item] })
            } else {
                ret[yearIndex].month[monthIndex].news.push(item)
            }
        }
    })
    // 排序
    ret.sort((a, b) => {
        return b.year - a.year
    })
    // 排序
    ret.forEach((item) => {
        item.month.sort((a: any, b: any) => {
            return b.month - a.month
        })
    })
    // 显示
    ret.forEach((year) => {
        year.month.forEach((month: any) => {
            if (displayDate.value.find((item) => {
                return item[0] == year.year && item[1] == month.month
            })) {
                month.display = false
            }
        })
        if (displayDate.value.find((item) => {
            return item == year.year
        }) != undefined) {
            year.display = false
        }
    })
    return ret
})

cxjxApiGet("/api/content/news?detail=true")
    .then((res: any) => {
        // dataList.value = res

        newsList.value = res
        console.log("newsList.value", newsList.value)
    })
    .catch((err) => {
        console.log(err)
    })

cxjxApiGet("/api/content/notice?detail=true")
    .then((res: any) => {
        noticeList.value = res
        console.log("noticeList.value", noticeList.value)
    })
    .catch((err) => {
        console.log(err)
    })



function closeYesr(year: number) {
    let btn = document.getElementById(`btn${year}`)
    if (displayDate.value.find((item) => {
        return item == year
    })) {
        displayDate.value.splice(displayDate.value.indexOf([year]), 1)
        if (btn == null) return
        btn.innerHTML = "&nbsp;▲&nbsp;"
    } else {
        displayDate.value.push([year])
        if (btn == null) return
        btn.innerHTML = "&nbsp;▼&nbsp;"
    }

}
function closeMonth(year: number, month: number) {
    let btn = document.getElementById(`btn${month}`)
    if (displayDate.value.find((item) => {
        return item[0] == year && item[1] == month
    })) {
        displayDate.value.splice(displayDate.value.indexOf([year, month]), 1)
        if (btn == null) return
        btn.innerHTML = "&nbsp;▲&nbsp;"
    } else {
        displayDate.value.push([year, month])
        if (btn == null) return
        btn.innerHTML = "&nbsp;▼&nbsp;"
    }
}
</script>
<template>
    <header_ />
    <div class="main">
        <!-- 复选框 -->
        <div class="mainBox">
            <div class="checkbox">
                <input type="checkbox" id="news" v-model="displayNews" />
                <label for="news">新闻</label>
                <input type="checkbox" id="notice" v-model="displayNotice" />
                <label for="notice">通知</label>
            </div>
            <div v-for="year in displayData">

                <!-- ▼ -->
                <!-- ▲ -->
                <!-- :class="year.display != true ? `notplay` : ``" -->
                <div class="yearBox">
                    {{ year.year }}年
                    <button @click="closeYesr(year.year)" :id="`btn` + year.year"> &nbsp;▼&nbsp;</button>
                </div>
                <div v-for="month in year.month" :class="year.display != true ? `notplay` : `monthsBox`">
                    <div class="monthBox">
                        {{ month.month }}月
                        <button @click="closeMonth(year.year, month.month)" :id="`btn` + month.month">
                            &nbsp;▼&nbsp;</button>
                    </div>

                    <div v-for="con in month.news" :class="month.display != true ? `notplay` : `content`">
                        <a :href="`/content/` + con.id">
                            {{ con.title }}
                            <!-- {{ con.content }} -->
                            <p class="time"> {{ con.uploadTime }}</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<style>
div.main {
    padding: 0px 15% 20px 15%;
}

div.mainBox {
    /* height: 100%; */
    padding: 50px 5% 50PX 5%;
    /* 圆角 */
    /* border-radius: 10px; */
    /* 背景色 */
    background-color: #f4f1ff;
    min-height: 1000px;
}

div.yearBox {
    font-size: 20px;
    font-weight: bold;
    /* 圆角 */
    border-radius: 10px;
    /* 背景色 */
    background-color: #b6a3ff;
    padding: 5px 5px 5px 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px #888888;
}

div.monthsBox {
    margin: 0px 0px 10px 20px;
}

div.monthBox {
    font-size: 15px;
    font-weight: bold;
    /* 圆角 */
    border-radius: 10px;
    /* 背景色 */
    background-color: #d1c5ff;
    padding: 5px 5px 5px 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px #888888;

}



div.content {
    /* 圆角 */
    border-radius: 10px;
    /* 背景色 */
    background-color: #ebe6ff;
    padding: 5px 5px 5px 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px #888888;
}


p.time {
    /* font-size: 10px; */
    color: #a0a0a0;
    text-align: right;
}

button {
    /* 圆角 */
    border-radius: 10px;
    /* 背景色 */
    /* background-color: #d1c5ff; */
    background-color: #2f139e00;
    border: none;
    padding: 5px;
    margin-bottom: 10px;
    margin-right: 5px;
    float: right;
    /* font-size: large; */
    color: #4b464d;
}

.notplay {
    display: none;
}

input[type=checkbox] {

    margin: 5px;
}
</style>