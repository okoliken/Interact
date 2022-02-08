<template>
  <main class="flex items-center justify-center w-full overflow-y-hidden py-56">
    <div class="text-center">
      <h1 class="text-3xl md:text-4xl text-gray-700 font-bold lg:font-semibold">
        <span class="capitalize border-b-4 border-cyan-300 rounded-lg"
          >Interact</span
        >
        freely with People Around the Globe
      </h1>
      <router-link :to="{ name: 'Signin' }" class="get-started-btn"
        >Get Started</router-link
      >
    </div>
  </main>
</template>
