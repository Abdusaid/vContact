<script setup lang="ts">
import ContactsTable from "./components/ContactsTable.vue"
import useModule from "./useModule";

const {
    redirectTo, 
    deleteContact,
    addFav,
    contactsStore
} = useModule()
</script>
<template>
    <div>
        <ContactsTable 
            :contactsStore="contactsStore"
            @addFav="addFav"
            @redirectTo="redirectTo" 
            @deleteContact="deleteContact" />
    </div>
</template>