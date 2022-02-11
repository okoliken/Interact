<template>
  <teleport to=".entryModalcontainer">
    <div
      class="bg-black bg-opacity-80 h-screen w-full fixed top-0 left-0 flex items-center justify-center px-5 sm:px-12 md:px-0"
    >
      <div class="bg-white p-4">
        <div>
          <h2 class="text-xl font-semibold">Delete comment</h2>
          <p>
            Are you sure you want to delete this comment? This will remove the
            and can't be undone
          </p>
        </div>
      </div>
    </div>
  </teleport>
</template>
