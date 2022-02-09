<script setup>
import AddCommentVue from "../components/AddComment.vue";
import CommentsVue from "../components/Comments.vue";
import ReuseableBtnVue from "../components/ReuseableBtn.vue";
</script>

<template>
  <div class="">
    <div
      class="mt-5 flex justify-center flex-col items-center mx-3 relative min-h-screen"
    >
      <div
        class="md:transform-none h-auto mx-14 w-full sm:w-7/12 mb-60 md:mb-44"
      >
        <CommentsVue />
      </div>
      <AddCommentVue class="h-auto mx-14 w-full sm:w-7/12 absolute bottom-10">
        <template v-slot:desktopbtn>
          <ReuseableBtnVue class="hidden md:block h-12"> Send </ReuseableBtnVue>
        </template>
        <template v-slot:mobilebtn>
          <ReuseableBtnVue> Send </ReuseableBtnVue>
        </template>
      </AddCommentVue>
    </div>
  </div>
</template>
