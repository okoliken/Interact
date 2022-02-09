<script setup>
import Reply from "./Reply.vue";
import LikeVue from "./Like.vue";
import AddCommentVue from "./AddComment.vue";
import ReuseableBtnVue from "./ReuseableBtn.vue";
import { ref } from "@vue/reactivity";

const nestedCommentComponent = ref(false);

const shownestedCommentComponent = () => {
  nestedCommentComponent.value = !nestedCommentComponent.value;
};
</script>
<template>
  <div class="ml-12">
    <div
      class="p-3 md:p-4 bg-white rounded-md mb-2 md:flex md:flex-row space-x-3 comment-reply"
    >
      <LikeVue
        class="hidden md:flex md:flex-col items-center md:space-x-0 py-2 px-5 space-y-5 h-24"
      />
      <!-- USER INFO -->
      <div>
        <div class="flex items-center justify-between space-x-4">
          <div class="flex items-center space-x-4">
            <img
              src="../assets/images/avatars/image-juliusomo.png"
              alt=""
              class="w-8 h-8 rounded-full object-contain"
            />
            <p class="space-x-3">
              <span class="font-semibold text-gray-800">Jeffery</span>
              <span class="font-light text-gray-500">1 month ago</span>
            </p>
          </div>
          <span class="hidden md:block">
            <Reply @click="shownestedCommentComponent" />
          </span>
        </div>
        <!-- END -->
        <!-- COMMENTS -->
        <div>
          <p class="text-gray-500 text-md my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            corrupti explicabo reiciendis nostrum minus amet, nemo saepe placeat
            nisi porro atque suscipit illum distinctio ipsam repellendus
            facilis. Cumque,
          </p>
        </div>
        <!-- END -->
      </div>
      <!-- bottom section in mobile view -->
      <div class="flex items-center justify-between md:hidden">
        <!-- LIKE BTN -->
        <LikeVue class="flex items-center space-x-3 py-2 px-5 md:hidden" />
        <!-- END -->
        <!-- REPLY -->
        <span class="block md:hidden">
          <Reply @click="shownestedCommentComponent" />
        </span>

        <!-- END -->
      </div>
      <!-- END -->
    </div>
    <AddCommentVue class="mb-5" v-if="nestedCommentComponent === true">
      <!-- desktop Btn -->
      <template v-slot:desktopbtn>
        <ReuseableBtnVue class="hidden md:block h-12"> Reply </ReuseableBtnVue>
      </template>
      <!-- END -->
      <!-- mobile Btn -->
      <template v-slot:mobilebtn>
        <ReuseableBtnVue> Reply </ReuseableBtnVue>
      </template>
      <!-- END -->
    </AddCommentVue>
  </div>
</template>
