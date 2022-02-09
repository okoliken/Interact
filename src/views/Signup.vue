<script setup>
import AssetsVue from "../components/Assets.vue";
import ButtonVue from "../components/Button.vue";
import useVuelidate from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
import { reactive } from "@vue/reactivity";

const account = reactive({
  email: "",
  username: "",
  password: "",
  confirmpassword: "",
});
</script>

<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an Account
        </h2>
      </div>
      <form class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div>
          <label for="profile" class="sr-only">Profile</label>
          <input
            type="file"
            class="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Profile Picture"
          />
        </div>
        <div>
          <label for="username" class="sr-only">username</label>
          <input
            type="email"
            v-model="account.username"
            class="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username"
          />
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            type="email"
            autocomplete="email"
            v-model="account.email"
            class="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            autocomplete="current-password"
            v-model="account.password"
            class="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            autocomplete="confimpassword"
            v-model="account.confirmpassword"
            class="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confim password"
          />
        </div>

        <div>
          <ButtonVue>
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <AssetsVue />
            </span>
            Sign up
          </ButtonVue>
        </div>
        <p class="text-slate-600 text-center border p-2 rounded-xl">
          If you already have an account
          <router-link
            :to="{ name: 'Signin' }"
            class="text-cyan-600 font-semibold"
            >Login Here</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<style></style>
