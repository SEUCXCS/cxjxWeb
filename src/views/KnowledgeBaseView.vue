<script setup lang="ts">

// import TheWelcome from '../components/TheWelcome.vue'
import header_ from '@/components/header_short.vue'
import classssitem from '@/components/classitem.vue'
// import background from '@/components/background.vue'
import box from '@/components/box.vue'
import doce from '@/components/doce.vue'
import bottom from '@/components/bottom.vue'
import datelist from '@/components/datelist.vue'

import packconfig from '@/assets/archives/pack/packConfig'
import pack from '@/assets/archives/pack/pack'
// console.log(pack)
import { ref, computed } from 'vue'

const list = ref()
import { useRoute, useRouter } from 'vue-router'
const route = useRoute() // 获取当前路由对象
const router = useRouter() // 获取路由实例对象

console.log("route.params.id", route.params.id)


const str = computed(() => {
    let sss = ''
    if (typeof route.params.id == "string") { sss = route.params.id }
    else { sss = route.params.id[0] }

    let ssss = pack.find((item) => {
        return item.id == sss
    })
    return ssss == undefined ? "<h1>not find </h1>" : ssss.html
})

console.log(str.value)


</script>



<template>
    <header_ />
    <div class="ArchiveDirectoryFrame">
        <classssitem :items="packconfig"></classssitem>
    </div>
    <div v-html="str" class="mainContext"></div>
</template>





<style scoped>
div.ArchiveDirectoryFrame {
    /* left: 0px; */
    top: 0px;
    height: 100%;
    position: fixed;
    /* height:700px; */
    width: 250px;
    background-color: #c6dbff;
    /* padding-top: 100px; */
    padding: 5px;
    padding-top: 100px;
    overflow: auto;
    padding-bottom: 120px;
}

div.mainContext {
    margin: 0px 0px 0px 250px;
    padding: 30px;
    /* left: 250px;
    top:100px; */
}
</style>    

<style>
div.mainContext h1 {
    text-align: center;
}
div.mainContext h1,
div.mainContext h2,
div.mainContext h3,
div.mainContext h4,
div.mainContext h5,
div.mainContext h6{
    margin:5px 0px 5px 0x;
}


div.mainContext ul {
    list-style-type: disc;
    padding-left: 20px;
}

div.mainContext ol {
    padding-left: 20px;
}

div.mainContext>p {
    margin:3px 0px 3px 0px;
}
</style>