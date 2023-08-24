<script setup lang="ts">
import ContactsTable from "./components/ContactsTable.vue"
import useModule from "./useModule";

const {
    redirectTo, 
    deleteContact,
    contactsStore
} = useModule()
</script>
<template>
    <div>
        <ContactsTable 
            :contactsStore="contactsStore"
            @redirectTo="redirectTo" 
            @deleteContact="deleteContact" />
    </div>
</template>