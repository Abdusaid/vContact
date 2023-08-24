<script setup lang="ts">
import {
  ContactsMenuIcon,
  FavoritesMenuIcon,
  SignOutMenuIcon,
  AddNewMenuIcon
} from "../assets/svg";
import {RouterLink} from "vue-router"
</script>
<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink
            to="/add"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <AddNewMenuIcon
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
            />
            <span class="ml-3">Create New</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <ContactsMenuIcon
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
            />
            <span class="ml-3"> Contacts </span>
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/favorites"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <FavoritesMenuIcon
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Favorites</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            >
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/login"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <SignOutMenuIcon
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
