<script setup lang="ts">

// import TheWelcome from '../components/TheWelcome.vue'
import header_ from '@/components/header_short.vue'
import classssitem from '@/components/classitem.vue'
// import background from '@/components/background.vue'
import box from '@/components/box.vue'
import doce from '@/components/doce.vue'
import bottom from '@/components/bottom.vue'
import datelist from '@/components/datelist.vue'


import { ref } from 'vue'

const list = ref( )


</script>



<template>
    <header_ />
    <div calss="ArchiveDirectoryFrame">
        <classssitem :items="list"></classssitem>

    </div>
</template>





<style scoped>
.ArchiveDirectoryFrame {
    /* left: 0px; */
    height: 100%;
    position: fixed;
    /* height:700px; */
    width: 250px;
    background-color: #c6dbff;
    /* padding-top: 100px; */
    padding: 5px;
    overflow: auto;
    padding-bottom: 120px;
}
</style>    