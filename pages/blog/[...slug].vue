<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with Blog Title -->
    <ClientOnly>
      <section 
        class="relative overflow-hidden"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 600 } }"
        v-if="post"
      >
      <!-- Hero Image -->
      <div 
        v-if="post.image"
        class="relative h-[400px] bg-gray-100"
      >
        <img 
          :src="post.image" 
          :alt="post.title"
          class="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          onerror="this.src='/images/blog/default.jpg'"
        />
        <div 
          class="absolute inset-0" 
          :class="{
            'bg-gradient-to-b from-black/50 via-black/25 to-transparent': post.image,
            'bg-gradient-to-b from-primary/10 to-transparent': !post.image
          }"
        ></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="relative">
        <div class="max-w-4xl mx-auto px-4 pt-8 pb-4">
          <div class="flex items-center gap-4 text-gray-800 mb-6">
            <NuxtLink 
              to="/blog"
              class="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </NuxtLink>
            <span class="text-gray-500">|</span>
            <time class="text-gray-800">{{ formatDate(post.date) }}</time>
            <span class="text-gray-500">|</span>
            <span class="text-gray-800">{{ post.readingTime }}</span>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="flex flex-col gap-4">
          <h1 
            class="text-4xl md:text-5xl font-bold text-gray-900"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          >
            {{ post.title }}
          </h1>

          <div 
            class="flex items-center gap-4 text-gray-800"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 600, delay: 400 } }"
          >
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ post.author }}
            </div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ClientOnly>

    <!-- Blog Content -->
    <ClientOnly>
      <section 
        class="py-12"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
      >
        <div class="max-w-3xl mx-auto px-4">
          <article class="prose prose-slate max-w-none prose-pre:border prose-pre:border-slate-200 prose-pre:p-4 prose-pre:my-6 prose-pre:rounded-lg prose-code:text-primary prose-code:bg-slate-50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
            <ContentDoc :path="`/blog/${route.params.slug}`">
              <template #not-found>
                <div class="text-center py-12">
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">Post not found</h2>
                  <p class="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
                  <NuxtLink 
                    to="/blog"
                    class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <span class="text-white">Return to Blog</span>
                  </NuxtLink>
                </div>
              </template>
              <template #empty>
                <div class="animate-pulse">
                  <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div class="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div class="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                </div>
              </template>
            </ContentDoc>
          </article>
        </div>
      </section>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  title: string
  description: string
  date: string
  tags: string[]
  image: string
  author: string
  readingTime: string
}

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug
const { data: post } = await useAsyncData('post', () => queryContent<BlogPost>('/blog').where({ _path: `/blog/${slug}` }).findOne())

// Disable SSR for animations
const isClient = ref(false)
onMounted(() => {
  isClient.value = true
})

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style>
/* Code block overrides */
.prose pre.shiki {
  background-color: transparent !important;
  border: 1px solid #e5e7eb;
  border-left: 3px solid #2962B3;
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.prose pre.shiki code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875rem;
  line-height: 1.7142857;
  display: inline-block;
  min-width: 100%;
  background-color: transparent;
  padding: 0;
  color: inherit;
}

/* Custom components */
.prose :where(.info, .tip):not(:where([class~="not-prose"] *)) {
  background-color: rgba(41, 98, 179, 0.05);
  border: 1px solid rgba(41, 98, 179, 0.1);
  border-left: 4px solid #2962B3;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #1e293b;
}

.prose :where(.info, .tip):not(:where([class~="not-prose"] *)) p {
  margin: 0.75rem 0;
}

.prose :where(.info, .tip):not(:where([class~="not-prose"] *)) p:first-child {
  margin-top: 0;
  font-weight: 500;
  color: #2962B3;
}

.prose :where(.info, .tip):not(:where([class~="not-prose"] *)) p:last-child {
  margin-bottom: 0;
}

/* Future goals section */
.prose :where(.future-goals):not(:where([class~="not-prose"] *)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.prose :where(.future-goals h4):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Section titles */
.prose :where(.section-title):not(:where([class~="not-prose"] *)) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

/* Horizontal rule */
.prose :where(hr):not(:where([class~="not-prose"] *)) {
  margin: 3rem 0;
  border: none;
  height: 1px;
  background: linear-gradient(to right, #2962B3 0%, transparent 100%);
  opacity: 0.15;
}
</style>
