<script setup>
import AssetsVue from "../components/Assets.vue";
import ButtonVue from "../components/Button.vue";
</script>

<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Signin to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 mb-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <ButtonVue>
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <AssetsVue />
            </span>
            Signin
          </ButtonVue>
        </div>
        <p class="text-slate-600 text-center border p-2 rounded-xl">
          Create a free Account
          <router-link
            :to="{ name: 'Signup' }"
            class="text-cyan-600 font-semibold"
            >Here</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<style></style>
