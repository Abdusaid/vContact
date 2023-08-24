<script setup lang="ts">
import { onMounted } from "vue"
import { MainModule } from "../../modules/main"
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <MainModule />
</template>