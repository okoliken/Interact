<script setup>
// IMPORTS
import Reply from "./Reply.vue";
import LikeVue from "./Like.vue";
import AddCommentVue from "./AddComment.vue";
import ReuseableBtnVue from "./ReuseableBtn.vue";
import { ref } from "@vue/reactivity";
import IconVue from "./Icon.vue";
import ModalVue from "./Modal.vue";
// END

// REACTIVE VARIABLES
const nestedCommentComponent = ref(false);
const name = ref("Jeffery");
const isAuthenticated = ref(false);
const EditMyComment = ref(false);
const DeleteMyComment = ref(false);
const closeModal = ref(false);
// END

// FUNCTIONS
const editComment = () => {
  EditMyComment.value = !EditMyComment.value;
};
const deleteComment = () => {
  DeleteMyComment.value = !DeleteMyComment.value;
};
const shownestedCommentComponent = () => {
  nestedCommentComponent.value = !nestedCommentComponent.value;
};
const cancelDelete = () => {
  closeModal.value = true;
};
// END
</script>
<template>
  <div class="md:ml-5 px-4 md:px-8 border-l-2 sm:border-0 lg:border-l-2 py-2">
    <div
      class="p-3 md:p-4 bg-white rounded-md mb-2 md:flex md:flex-row space-x-3 comment-reply"
    >
      <LikeVue
        class="hidden md:flex md:flex-col items-center md:space-x-0 py-2 px-5 space-y-5 h-24"
      />
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
              <span class="font-semibold text-gray-800">{{ name }}</span>
              <!-- SHOW IF USER IS LOGGEDIN -->
              <span
                v-if="isAuthenticated"
                class="py-1 px-2 text-xs rounded-md bg-interactBlue text-white"
                >You</span
              >
              <!-- END -->
              <span class="font-light text-gray-500">1 month ago</span>
            </p>
          </div>
          <span class="hidden md:block">
            <!-- SHOW IF USER IS LOGGEDIN -->
            <IconVue
              v-if="isAuthenticated === true"
              :editComment="editComment"
              :deleteComment="deleteComment"
            />
            <!-- END -->
            <Reply v-else @click="shownestedCommentComponent" />
          </span>
        </div>
        <!-- END -->
        <!-- COMMENTS -->

        <!-- Render this if user clicks on edit -->
        <div v-if="EditMyComment === true" class="mx-3 mb-10 md:mb-0">
          <textarea
            class="border my-4 w-full p-3 outline-none focus-within:border-slate-700 rounded-lg text-slate-700 resize-none"
            cols="3"
            rows="3"
          ></textarea>
          <ReuseableBtnVue
            class="float-right text-sm capitalize md:uppercase md:text-base"
          >
            Update
          </ReuseableBtnVue>
        </div>
        <!-- end -->
        <div v-else>
          <p class="text-gray-500 text-md my-5">
            <span class="text-interactBlue font-bold">@Jeffery</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id.
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
          <!-- SHOW IF USER IS LOGGEDIN -->
          <IconVue
            v-if="isAuthenticated === true"
            :editComment="editComment"
            :deleteComment="deleteComment"
          />
          <!-- END -->
          <Reply v-else @click="shownestedCommentComponent" />
        </span>
        <!-- END -->
      </div>
      <!-- END -->
    </div>
    <AddCommentVue
      :name="name"
      class="mb-5"
      v-if="nestedCommentComponent === true"
    >
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
  <ModalVue v-if="DeleteMyComment" :cancelDelete="cancelDelete" />
</template>
