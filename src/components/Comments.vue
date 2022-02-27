<script setup>
import Reply from "./Reply.vue";
import LikeVue from "./Like.vue";
import { ref } from "@vue/reactivity";
import AddCommentVue from "./AddComment.vue";
import ReuseableBtnVue from "./ReuseableBtn.vue";
import RepliesVue from "./Replies.vue";

defineProps({
  comments:Array,
  replies:Array
})

const isReplyComponent = ref(false);
const isCommentReply = ref(false);

const showReplyComponent = () => {
  isReplyComponent.value = !isReplyComponent.value;
};
const showReplies = () => {
  isCommentReply.value = !isCommentReply.value;
};
</script>
<template>
  <div>
    <div
        v-for="comment in comments"
        :key="comment.id"
      class="p-3 bg-white rounded-md mb-2 md:flex md:flex-row space-x-3 comments"
    >
      <!-- DESKTOP LIKE -->
      <LikeVue
        class="hidden md:flex md:flex-col items-center md:space-x-0 py-2 px-5 space-y-5 h-24"
      />
      <!-- END -->
      <!-- USER INFO -->
      <div class="w-full">
        <div class="flex items-center justify-between space-x-4 w-full">
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
          <!-- DESKTOP REPLY BTN -->
          <span class="hidden md:block">
            <Reply @click="showReplyComponent" />
          </span>
          <!-- END -->
        </div>
        <!-- END -->
        <!-- COMMENTS -->
        <div>
          <p class="text-gray-500 text-md my-5">
           {{comment.content}}
          </p>
        </div>
        <!-- END -->
      </div>
      <!-- bottom section in mobile view -->
      <div class="flex items-center justify-between md:hidden">
        <!-- LIKE MOBLIE BTN -->
        <LikeVue class="flex items-center space-x-3 py-2 px-5 md:hidden" />
        <!-- END -->

        <!-- REPLY MOBILE -->
        <span class="block md:hidden">
          <Reply @click="showReplyComponent" />
        </span>

        <!-- END -->
      </div>
      <!-- END -->
    </div>
    <AddCommentVue class="mb-5" v-if="isReplyComponent === true">
      <!-- desktop Btn -->
      <template v-slot:desktopbtn>
        <ReuseableBtnVue @click="showReplies" class="hidden md:block h-12">
          Reply
        </ReuseableBtnVue>
      </template>
      <!-- END -->
      <!-- mobile Btn -->
      <template v-slot:mobilebtn>
        <ReuseableBtnVue> Reply </ReuseableBtnVue>
      </template>
      <!-- END -->
    </AddCommentVue>
    <RepliesVue v-for="reply in replies" :key="reply.id" :reply="reply"/>
  </div>
</template>
