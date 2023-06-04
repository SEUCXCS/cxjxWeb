<template>
    <ul>
        <li v-for="i in props.items">
            <div class="p">
                <a v-if="i.link != undefined" :href="`/knowledgebase/` + i.linkID">
                    <p>{{ i.text }}</p>
                </a>
                <p v-else class="a">
                    {{ i.text }}
                </p>
            </div>

            <classssitem v-if="i.items == undefined || i.items.length > 0" :items="i.items" class="items" />
        </li>
    </ul>
</template>

<script setup lang="ts">
interface Items {
    text: string,// 菜单名称
    collapsible: boolean,// 是否是一个可以折叠的组
    link?: string,//    显示的文章
    items: Items[]//    下拉菜单列表
}
const props = defineProps(['items'])

console.log("props.items[0]", props.items)
import classssitem from './classitem.vue'

</script>


<style scoped>
.items {
    margin-left: 20px;
}

.p {
    /* list-style: none;
    margin: 0;
    padding: 0; */
    border: 1px solid rgb(150, 150, 150);
    border-radius: 5px;

}


a {
    height: 100%;
    width: 100%;

    /* padding: 5px; */
}

a:link,
a:visited {
    /* color: #000000; */
    background-color: #c6dbff00;
}

a:hover,
a:active {
    /* 修改背景色 */
    background: #006eff;

    /* background-color: #006eff; */

    /* color: #FF00FF; */
}


p {
    padding: 5px;
}



/* ul {
    display: -webkit-flex;
    display: flex;
} */
li {
    margin-top: 3px;
}
</style>