<template>
  <div class="max-w-4xl mx-auto">
    <h1 
      class="text-4xl font-bold text-primary mb-12"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      Blog
    </h1>

    <div class="grid gap-8">
      <article 
        v-for="post in posts" 
        :key="post._path"
        class="bg-white rounded-lg shadow-md overflow-hidden"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
      >
        <NuxtLink :to="post._path" class="block">
          <div class="relative h-48 bg-gray-100 overflow-hidden group">
            <img 
              :src="post.image || '/images/blog/default.jpg'" 
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onerror="this.src='/images/blog/default.jpg'"
            />
            <div 
              class="absolute inset-0" 
              :class="{
                'bg-gradient-to-b from-black/10 to-black/30': post.image,
                'bg-gradient-to-b from-primary/5 to-primary/20': !post.image
              }"
            ></div>
          </div>
        </NuxtLink>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-primary mb-2">
            <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
          </h2>
          <div class="text-gray-600 mb-4">
            <span>{{ formatDate(post.date) }}</span>
            <span v-if="post.tags" class="ml-4">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm mr-2"
              >
                {{ tag }}
              </span>
            </span>
          </div>
          <p class="text-gray-700">{{ post.description }}</p>
          <NuxtLink 
            :to="post._path"
            class="inline-block mt-4 text-primary hover:text-secondary transition"
          >
            Read more →
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
// Similar to Angular's component class
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').sort({ date: -1 }).find())

// Similar to Angular's pipes
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Similar to Angular's component styles */
article {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

article:hover {
  transform: translateY(-0.25rem);
}
</style>
