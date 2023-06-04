<script setup lang="ts">
import { ref } from 'vue'
import header_ from "@/components/header_short.vue"
// 获取路由中的id
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
const content = ref({
    title: "找不到该文章",
    content: ""
} as {
    title: string,
    content: string,
})
import cxjxApiGet from "@/api/api"
cxjxApiGet(`/api/content?id=${id}`)
    .then((res) => {
        content.value = res[0]
    })

</script>


<template>
    <header_ />
    <div class="main">
        <div class="mainContent">
            <h1>{{ content.title }}</h1>
            <div class="content" v-html="content.content"></div>
        </div>
    </div>
</template>


<style scoped>
div.main {
    width: 100%;
    padding: 0px 20% 0px 20%;
}
div.mainContent {
    width: 100%;
    background-color: #f9e6ff;
    border-radius: 10px;
    padding: 20px;
    
}
</style>