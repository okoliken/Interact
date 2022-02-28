<script setup>


defineProps({
  like:Number
})


</script>

<template>
  <span class="bg-softblue rounded-xl">
    <button @click="likeComment()">
      <img src="../assets/images/icon-plus.svg" alt="" />
    </button>
    <span class="font-semibold text-interactBlue">{{ like }}</span>
    <button @click="disLikeComment()">
      <img src="../assets/images/icon-minus.svg" alt="" />
    </button>
  </span>
</template>
