<template>
    <div>
        <div class="frame">
            <ul>
                <li v-for="L in list">
                    {{ L.text }}
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
const list = ref([{
    // 菜单名称
    text: '新闻归档',
    // 是否是一个可以折叠的组
    collapsible: true,
    // 显示的文章
    // link: "/bot1/menu",
    // 下拉菜单列表
    items: [
        // { text: '简介', link: '/index' },
        // { text: '财富', link: "/set/wealth" },
        // { text: '职业', link: "/set/occupation" },
        // { text: '等级', link: "/set/level" },
        // { text: '属性', link: "/set/attribute" },
    ]
},
{
    text: '杂项归档',
    collapsible: true,
    items: [
        { text: '摸鱼日志', link: '/other/摸鱼日志' },
        { text: '实验室打印机使用方法', link: '/other/dwnldPrinterDriver' },
    ]
}])




</script>



<style scoped>
.frame {
    /* left: 0px; */
    height: 100%;
    position: fixed;
    /* height:700px; */
    width: 250px;
    background-color: #c6dbff;
    /* padding-top: 100px; */
}
</style>