<script setup lang="ts">
import { onMounted } from "vue"
import { OperationModule } from "@/modules/operation"
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <OperationModule />
</template>