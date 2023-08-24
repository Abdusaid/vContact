<script setup lang="ts">
import ContactsTable from "./components/ContactsTable.vue"
import useModule from "./useModule";

const { contactsStore } = useModule()
</script>
<template>
    <ContactsTable :contactsStore="contactsStore" />
</template>