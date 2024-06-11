<template>
  <nav class="bg-gray-800 p-4">
    <!-- Left side - Menu icon -->
    <div class="flex items-center justify-start">
      <button @click="toggleMenu" class="text-white focus:outline-none lg:hidden">
        <span class="block w-6 h-1 bg-white mb-1"></span>
        <span class="block w-6 h-1 bg-white mb-1"></span>
        <span class="block w-6 h-1 bg-white"></span>
      </button>
    </div>

    <!-- Right side - Icons -->
    <div class="flex items-center justify-end">
      <button class="text-white mr-4">
        <i class="fas fa-search"></i>
      </button>
      <button class="text-white mr-4">
        <i class="fas fa-user"></i>
      </button>
      <button class="text-white">
        Sign In
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      // Implement logic to toggle menu
    }
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
