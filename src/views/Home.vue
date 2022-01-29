<script setup></script>

<template>
  <main
    class="flex items-center justify-center bg-slate-700 h-screen w-full overflow-y-hidden"
  >
    <div class="text-center">
      <h1 class="text-3xl lg:text-4xl font-bold lg:font-semibold text-white">
        Interact freely with Developers Around the Globe
      </h1>
      <router-link :to="{ name: 'Signin' }" class="get-started-btn"
        >Get Started</router-link
      >
    </div>
  </main>
</template>

<style></style>
