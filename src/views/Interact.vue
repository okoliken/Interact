<script setup>
import { ref } from "@vue/reactivity";
import AddCommentVue from "../components/AddComment.vue";
import CommentsVue from "../components/Comments.vue";
import ReuseableBtnVue from "../components/ReuseableBtn.vue";
import commentsFrame from "@/components/commentsFrame.vue";
import { onMounted } from "vue";


const messages = ref([]);


const comments = ref([]);
const replies = ref([]);

const addComment = ref("");
const isLoading = ref(false);
const isSending = ref(false);

const sendComment = () => {
  if (addComment.value === "") {
    alert("value should not be empty");
  } else {
    console.log("sent");
  }
};
</script>

<template>
  <div>
    <div
      class="mt-5 flex justify-center flex-col items-center mx-3 relative min-h-screen"
    >
      <div
        class="md:transform-none h-auto mx-14 w-full sm:w-4/5 lg:w-7/12 mb-60 md:mb-44"
      >
        <!-- <commentsFrame v-if="isLoading === true" /> -->
        <CommentsVue />
      </div>
      <AddCommentVue
        v-model="addComment"
        class="h-auto mx-14 w-full sm:w-4/5 lg:w-7/12 absolute bottom-10"
      >
        <template v-slot:desktopbtn>
          <!-- DESKTOP BTN WITH CONDITIONAL RENDERING -->
          <ReuseableBtnVue
            :class="{ 'bg-opacity-30': isSending }"
            v-if="isSending"
            :disabled="isSending"
            class="hidden md:block h-12"
          >
            Sending...
          </ReuseableBtnVue>
          <ReuseableBtnVue
            @click="sendComment()"
            v-else
            class="hidden md:block h-12"
          >
            Send
          </ReuseableBtnVue>
          <!-- END -->
        </template>
        <!-- MOBILE BTN WITH CONDITIONAL RENDERING -->
        <template v-slot:mobilebtn>
          <ReuseableBtnVue
            :class="{ 'bg-opacity-30': isSending }"
            v-if="isSending"
            :disabled="isSending"
          >
            Sending...
          </ReuseableBtnVue>
          <ReuseableBtnVue @click="sendComment()" v-else>
            Send
          </ReuseableBtnVue>
        </template>
        <!-- END -->
      </AddCommentVue>
    </div>
  </div>
</template>
