<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-primary text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Manuel Waltschek</NuxtLink>
        <div class="space-x-4">
          <NuxtLink to="/" class="hover:text-gray-200">Home</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-gray-200">Blog</NuxtLink>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Manuel Waltschek. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Similar to Angular's component class
// You can add component logic here
</script>

<!-- No local styles needed, using global styles from main.css -->
