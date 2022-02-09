<script setup>
import ReuseableBtnVue from "./ReuseableBtn.vue";
</script>

<template>
  <div class="">
    <div class="p-3 md:p-4 bg-white rounded-md">
      <div class="md:flex justify-between md:space-x-4">
        <img
          src="../assets/images/avatars/image-maxblagun.png"
          alt=""
          class="w-10 h-10 rounded-full object-contain hidden md:block"
        />
        <textarea
          cols="3"
          rows="3"
          class="border w-full p-3 outline-none focus-within:border-slate-700 rounded-lg text-slate-700 resize-none"
          placeholder="Add a Comment..."
        ></textarea>

        <slot name="desktopbtn"></slot>
      </div>

      <div class="flex items-center justify-between md:hidden">
        <img
          src="../assets/images/avatars/image-maxblagun.png"
          alt=""
          class="w-8 h-8 rounded-full"
        />
        <slot name="mobilebtn"> </slot>
      </div>
    </div>
  </div>
</template>
