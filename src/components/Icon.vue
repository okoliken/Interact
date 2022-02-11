<script>
export default {
  props: {
    editComment: Function,
    deleteComment: Function,
  },
};
</script>
<template>
  <div class="flex items-center space-x-4">
    <div class="flex items-center space-x-2 cursor-pointer">
      <img src="../assets/images/icon-delete.svg" alt="" />
      <span
        @click="deleteComment"
        class="text-red-400 text-sm sm:text-md hover:text-opacity-30"
      >
        Delete</span
      >
    </div>
    <div class="flex items-center space-x-2 cursor-pointer">
      <img src="../assets/images/icon-edit.svg" alt="" />
      <span
        @click="editComment"
        class="text-interactBlue text-sm sm:text-md hover:text-opacity-30"
        >Edit</span
      >
    </div>
  </div>
</template>
