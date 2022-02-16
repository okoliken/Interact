<template>
  <div>
    <div
      class="p-3 bg-gray-50 rounded-md mb-2 md:flex md:flex-row space-x-3 comments animate-pulse"
    >
      <!-- DESKTOP LIKE -->
      <div
        class="hidden md:flex md:flex-col items-center md:space-x-0 animate-pulse py-2 px-5 space-y-5 h-24 bg-gray-200 rounded-xl"
      ></div>
      <!-- END -->
      <!-- USER INFO -->
      <div class="w-full">
        <div class="flex items-center justify-between space-x-4 w-full">
          <div class="flex items-center space-x-4">
            <div
              class="img w-10 h-10 bg-gray-200 rounded-full animate-pulse"
            ></div>
            <div class="flex space-x-2">
              <div class="bg-gray-200 w-10 h-3 animate-pulse"></div>
              <div class="bg-gray-200 w-20 h-3 animate-pulse"></div>
            </div>
          </div>
          <!-- DESKTOP REPLY BTN -->
          <span class="hidden md:block">
            <div class="reply bg-gray-200 w-16 h-3 animate-pulse"></div>
          </span>
          <!-- END -->
        </div>
        <!-- END -->
        <!-- COMMENTS -->
        <div>
          <p class="bg-gray-200 my-2 w-7/4 h-6 animate-pulse"></p>
          <p class="bg-gray-200 my-2 w-4/6 h-6 animate-pulse"></p>
        </div>
        <!-- END -->
      </div>
      <!-- bottom section in mobile view -->
      <div class="flex items-center justify-between md:hidden">
        <!-- LIKE MOBLIE BTN -->
        <div class="like"></div>
        <!-- END -->

        <!-- REPLY MOBILE -->
        <span class="block md:hidden">
          <div class="reply"></div>
        </span>

        <!-- END -->
      </div>
      <!-- END -->
    </div>
  </div>
</template>
