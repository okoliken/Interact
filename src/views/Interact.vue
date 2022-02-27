<script setup>
import { ref } from "@vue/reactivity";
import AddCommentVue from "../components/AddComment.vue";
import CommentsVue from "../components/Comments.vue";
import ReuseableBtnVue from "../components/ReuseableBtn.vue";
import commentsFrame from "@/components/commentsFrame.vue";

import { onMounted } from "@vue/runtime-core";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const comments = ref([])
const replies = ref([])

const addComment = ref("");
const isloading = ref(false);
const sendComment = () => {
  if (addComment.value === "") {
    alert("value should not be empty");
  } else {
    error.value = true;
    console.log(addComment.value);
  }
};

const db = getFirestore();
const colref = collection(db, "comments");
const colrefreplies = collection(db, "replies");

onMounted(() => {
  isloading.value = true
  getDocs(colref).then((snapshot) => {
    snapshot.docs.forEach((items => {
        comments.value.push({...items.data(), id: items.id})
    }))
    isloading.value = false
   return comments.value
  });

  getDocs(colrefreplies).then((snapshot) => {
    snapshot.docs.forEach((items => {
        replies.value.push({...items.data(), id: items.id})
    }))
   return replies.value
  });
});
</script>

<template>
  <div>
    <div
      class="mt-5 flex justify-center flex-col items-center mx-3 relative min-h-screen"
    >
      <div
        class="md:transform-none h-auto mx-14 w-full sm:w-4/5 lg:w-7/12 mb-60 md:mb-44"
      >
        <commentsFrame v-if="isloading === true" />
        <CommentsVue v-else  :comments="comments" :replies="replies"/>
      </div>
      <AddCommentVue
        v-model="addComment"
        class="h-auto mx-14 w-full sm:w-4/5 lg:w-7/12 absolute bottom-10"
      >
        <template v-slot:desktopbtn>
          <ReuseableBtnVue @click="sendComment()" class="hidden md:block h-12">
            Send
          </ReuseableBtnVue>
        </template>
        <template v-slot:mobilebtn>
          <ReuseableBtnVue @click="sendComment()"> Send </ReuseableBtnVue>
        </template>
      </AddCommentVue>
    </div>
  </div>
</template>
