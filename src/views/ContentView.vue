<script setup lang="ts">
import { ref } from 'vue'
import header_ from "@/components/header_short.vue"
// 获取路由中的id
import { useRoute } from 'vue-router'
const route = useRoute()
let id = route.params.id
const content = ref({
    title: "找不到该文章",
    content: ""
} as any)
import api from "@/api/api"
api.GetContent(id as string)
    .then((res) => {
        content.value = res
    })

</script>


<template>
    <header_ />
    <div class="main">
        <div class="mainContent">

            <h1>{{ content.title }}</h1>

            <div class="content" v-html="content.content"></div>

            <p>发布日期：{{ content.uploadTime }}</p>
            <p>更改日期：{{ content.updateTime }}</p>
            <p>作者：{{ content.author }}</p>
        </div>
    </div>
</template>


<style scoped>
div.main {
    width: 100%;
    padding: 0px 15% 0px 15%;
}

div.mainContent {
    width: 100%;
    background-color: #f9e6ff;
    /* border-radius: 10px; */
    padding: 20px;

    min-height: 500px;
}

div.mainContent>h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 50px;
}

div.content {
    font-size: 20px;
    line-height: 40px;
    text-indent: 2em;
    text-align: justify;
    text-justify: inter-ideograph;
    margin-bottom: 50px;
}
</style>