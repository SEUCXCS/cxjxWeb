<template>




</template>

<script setup lang="ts">
interface items {
    text: string,
    collapsible: boolean,
    items: items[]
}
defineProps({
  title: String,
  likes: Number
})


</script>