<script setup lang="ts">
import type { IContacts } from "../../../shared/types";
import {ref, watch} from "vue"
import {
  ContactIcon,
  SearchIcon,
} from "../../../assets/svg.tsx";

const props = defineProps<{
  contactsStore:{
    mockContacts: IContacts[]
  }
}>()
const emit = defineEmits<{
    (e:"redirectTo", contact):void,
    (e:"deleteContact", index):void
}>()

const editContact = (index) => {
  emit("redirectTo", index)
}
const deleteContact = (index) => {
  emit("deleteContact", index)
  searchItem.value = ''
  filteredContacts.value = props.contactsStore?.mockContacts
}


const searchItem = ref<string>()
const filteredContacts = ref()
watch(searchItem, async (searchText) => {
    filteredContacts.value = props.contactsStore?.mockContacts.filter((item) => {
      return searchText != undefined || searchText == ' '
        ? item.firstName.toLowerCase().includes(searchText as string) ||
          item.lastName.toLowerCase().includes(searchText as string) ||
          item.phone.includes(searchText as string) ||
          item.tag.toLowerCase().includes(searchText as string) 
        : props.contactsStore?.mockContacts
    })
},{ immediate: true })
  

</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4 bg-white">
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative m-3">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <SearchIcon class="w-4 h-4 text-gray-500" />
        </div>
        <input
          v-model="searchItem"
          type="text"
          id="table-search-users"
          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
    
    <table 
      v-if="filteredContacts.length" 
      class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Full Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Tag</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      
      <tbody>
        <tr 
          v-for="contact, index in filteredContacts"
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
          <td class="px-6 py-4 whitespace-nowrap">
            <button
              @click="editContact(contact.index)"
              class="font-medium pr-8 text-blue-600 dark:text-blue-500 hover:underline"
              >Edit
            </button>
            <button
              class="font-medium text-red-600 dark:text-blue-500 hover:underline"
              @click="deleteContact(contact.index)"
              >Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div v-else class="text-2xl text-center p-16 text-gray-300">
      No contacts found
    </div>
  </div>
</template>
