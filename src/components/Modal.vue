<script setup>
import ConfirmBtnVue from "./ConfirmBtn.vue";
const close = defineProps({
  deleteComment: Function,
});
</script>
<template>
  <teleport to=".entryModalcontainer">
    <div
      class="bg-black bg-opacity-80 h-screen w-full fixed top-0 left-0 flex items-center justify-center px-5 sm:px-12 md:px-0"
    >
      <div class="bg-white p-5 w-4/5 md:w-96 rounded-lg">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-5">
            Delete comment
          </h2>
          <p class="text-gray-500">
            Are you sure you want to delete this comment? This will remove the
            and can't be undone
          </p>

          <div class="flex items-center py-5 space-x-4">
            <ConfirmBtnVue class="bg-gray-600" @click="deleteComment"
              >no, cancel
            </ConfirmBtnVue>
            <ConfirmBtnVue class="bg-red-500">yes, delete </ConfirmBtnVue>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
