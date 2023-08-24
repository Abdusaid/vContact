<script setup lang="ts">
import AppSideBar from "../components/AppSideBar.vue"
</script>
<template>
    <AppSideBar>
        <template #table>
            <router-view />
        </template>
    </AppSideBar>
</template>