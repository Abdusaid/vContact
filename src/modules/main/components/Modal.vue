<script setup lang="ts">
import { ModalIcon, ModalCloseIcon } from '../../../assets/svg';
const props = defineProps<{
    index: number|undefined 
}>()
const emit = defineEmits<{
    (e:"deleteContact", index):void
}>()

const deleteContact = ()=> {
    emit("deleteContact", props.index)
}
</script>
<template>
  <div
    id="popup-modal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          data-modal-hide="popup-modal"
        >
          <ModalCloseIcon class="w-3 h-3" />
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-6 text-center">
          <ModalIcon 
            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" 
          />
          <h3 class="mb-5 text-lg font-normal text-gray-500">
            Are you sure you want to delete this contact?
          </h3>
          <button
            data-modal-hide="popup-modal"
            @click="deleteContact"
            type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Yes
          </button>
          <button
            data-modal-hide="popup-modal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
