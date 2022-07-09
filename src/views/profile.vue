<script setup>
import { ref } from "vue-demi";
import ButtonVue from "../components/Button.vue";

const username = ref('@')
const profileUrl = ref('')
const getUserProfile = (e) => {
  profileUrl.value = e.target.files[0]
};


</script>

<template>
  <div>
    <h3 class="text-center font-semibold text-xl transform translate-y-10">
      Set up your Profile
    </h3>
    <div class="flex items-center justify-center flex-col w-full mt-20">
      <form>
        <label
          for="user-profile"
          class="flex items-center justify-center cursor-pointer"
        >
          <div class="relative">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              class="rounded-full relative"
            />

            <div
              class="w-7 h-7 bg-slate-800 absolute right-4 bottom-1 rounded-full flex items-center justify-center cursor-pointer"
            >
              <font-awesome-icon class="text-white" icon="fa-solid fa-pencil" />
            </div>
          </div>
          <input
            @change="getUserProfile"
            hidden
            type="file"
            name=""
            id="user-profile"
          />
        </label>

        <div class="my-4 flex flex-col">
          <label for="username">UserName</label>
          <input type="text" v-model="username" class="py-2 px-3 w-full" />
        </div>
        <ButtonVue> Set Profile </ButtonVue>
      </form>
    </div>
  </div>
</template>
