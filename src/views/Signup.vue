<script setup>
import AssetsVue from "../components/Assets.vue";
import ButtonVue from "../components/Button.vue";
import useVuelidate from "@vuelidate/core";
import { minLength, required, email, sameAs } from "@vuelidate/validators";
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

import { useStore } from "vuex";

// REACTIVE FORM DATA
const store = useStore();

const account = reactive({
  email: "",
  password: "",
});

// VLIDATING REACTIVE FORM DATA
const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },
    password: { required, minLength: minLength(6) },
  };
});
const v$ = useVuelidate(rules, account);
// END

// ASYNC FUNCTION THAT MAKES REQUEST TO BACKEND
const handleSubmit = async () => {
  // INSTANTIATE VUELIDATE
  v$.value.$validate();
  // END

  // VALIDATE DATA BEFORE IT IS SENT TO BACKEND
  if (v$.value.$error) {
    return false;
  } else {
    try {
      await store.dispatch("signup", {
        email: account.email,
        password: account.password,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // END
};

const checkIfUserTouched = () => {
  if (v$.value.$touch) {
    return true;
  } else return false;
};
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
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            type="email"
            autocomplete="email"
            :class="[v$.email.$error ? 'ring-2 ring-red-400 border-2' : '']"
            v-model="account.email"
            class="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          <span v-if="v$.email.$error" class="text-red-400 font-semibold">
            {{ v$.email.$errors[0].$message }}
          </span>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            :class="[v$.password.$error ? 'ring-2 ring-red-400 border-2' : '']"
            autocomplete="current-password"
            v-model="account.password"
            class="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          <span v-if="v$.password.$error" class="text-red-400 font-semibold">
            {{ v$.password.$errors[0].$message }}
          </span>
        </div>

        <div>
          <ButtonVue
            :disabled="v$.$error"
          >
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
