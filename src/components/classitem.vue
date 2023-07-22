<template>
    <ul>
        <li v-for="i in props.items">
            <div :class="i.resourceId ? `item_p` : `item_a`">
                <a v-if="i.resourceId != undefined" :href="`/knowledgebase/` + i.resourceId" class="p">
                    {{ i.text }}
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

import { type KonwledgeBaseConfig } from '@/api/KonwledgeBaseConfig'
const props = defineProps(['items']) as { items: KonwledgeBaseConfig[] }

console.log("props", props)
import classssitem from './classitem.vue'

</script>


<style scoped>
.items {
    margin-left: 20px;
}

.item_p {
    border: 1px solid rgb(150, 150, 150);
    border-radius: 5px;
}

.item_a {
    border: 1px solid rgb(59, 59, 59);
    border-radius: 5px;
    padding: 5px;

}

a {
    height: 100%;
    width: 100%;
}

p,
a.p {
    padding: 5px;
}

li {
    margin-top: 5px;
}
</style>