<script setup lang="ts">
import type { IContacts } from "../../../shared/types";
import {ref} from "vue"
import {
  ContactIcon,
} from "../../../assets/svg.tsx";

const props = defineProps<{
  contactsStore:{
    mockContacts: IContacts[]
  }
}>()
const favContacts = ref()
favContacts.value = props.contactsStore.mockContacts.filter((contact) => {
    return contact.fav
})
// const emit = defineEmits<{
//     (e:"redirectTo", contact):void,
//     (e:"deleteContact", index):void,
//     (e:"addFav", index):void
// }>()

// const editContact = (index) => {
//   emit("redirectTo", index)
// }
// const addFav = (index) => {
//   emit("addFav", index)
// }
// const deleteContact = (index) => {
//   emit("deleteContact", index)
//   searchItem.value = ''
//   filteredContacts.value = props.contactsStore?.mockContacts
// }


// const searchItem = ref<string>()
// const filteredContacts = ref()
// watch(searchItem, async (searchText) => {
//     filteredContacts.value = props.contactsStore?.mockContacts.filter((item) => {
//       return searchText != undefined || searchText == ' '
//         ? item.firstName?.toLowerCase().includes(searchText as string) ||
//           item.lastName?.toLowerCase().includes(searchText as string) ||
//           item.phone?.includes(searchText as string) ||
//           item.tag?.toLowerCase().includes(searchText as string) 
//         : props.contactsStore?.mockContacts
//     })
// },{ immediate: true })
  

</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table 
      v-if="favContacts.length" 
      class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Full Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Tag</th>
        </tr>
      </thead>
      
      <tbody>
        <tr 
          v-for="contact, index in favContacts"
          :key="index"
          class="bg-white border-b hover:bg-gray-50"
        >
          <th
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
          >
            <ContactIcon class="w-10 h-10 rounded-full" />
            <div class="pl-3">
              <div class="text-base font-semibold">
                {{contact.firstName}} {{ contact.lastName }}
              </div>
              <div class="font-normal text-gray-500">
                {{contact.phone}}
              </div>
            </div>
          </th>
          <td class="px-6 py-4">
            {{contact.mail}}
          </td>
          <td class="px-6 py-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                {{contact.tag}}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div v-else class="text-2xl text-center p-16 text-gray-300">
      No Favorite Contacts
    </div>
  </div>
</template>
