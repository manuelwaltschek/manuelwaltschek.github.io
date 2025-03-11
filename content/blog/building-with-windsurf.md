---
title: 'Building with Windsurf - A Software Engineer''s AI Journey'
description: 'Exploring agentic AI development with Windsurf - from static site to dynamic blog, with insights and learnings along the way.'
date: '2025-03-11'
tags: ['AI Development', 'Windsurf', 'Vue.js']
image: '/images/blog/ai-coding.jpg'
author: 'Manuel Waltschek'
readingTime: '6 min'
---

:::lead
As an experienced web developer, I recently embarked on a journey with Windsurf, an agentic AI assistant, to transform my PDF CV into a modern website. This is the story of how we went from a basic static page to a fully deployed Vue.js application, and what I learned along the way.
:::

## Phase 1: From CV to First Static Site

The journey began with a simple PDF CV and a vision for a professional website. Here's how Windsurf helped bootstrap the project:

> **User**: I have my CV in PDF format. Can you help create a website that matches its style?

> **Cascade**: I notice your CV uses #2962B3 as the primary color. Let's start with a basic HTML structure that maintains your brand identity:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manuel Waltschek - Software Engineer</title>
  <style>
    :root { --primary: #2962B3; }
    body { font-family: system-ui, sans-serif; }
    .header { color: var(--primary); }
  </style>
</head>
<body>
  <!-- Basic content structure from CV -->
</body>
</html>
```

:::info
While functional, this initial static site lacked modern features and maintainability. We needed a more robust solution that could handle blog content and future scalability.
:::

## Phase 2: Choosing the Right Stack

Coming from an Angular background, I wanted a framework that would offer similar component organization and type safety:

> **User**: The static site works, but I want to add a blog and make it more maintainable. What would you recommend?

> **Cascade**: Given your Angular experience, I'd suggest Vue.js with Nuxt.js. Here's why:
1. Component-based architecture similar to Angular
2. TypeScript support out of the box
3. Built-in static site generation
4. Great markdown support via @nuxt/content

This aligned perfectly with my preference for clean code organization and type safety.

## Phase 3: The Technical Migration

With the stack decided, we began the transformation process:

```bash
# Initial project setup
npx nuxi init personal-website
cd personal-website

# Essential dependencies
npm install @nuxt/content @nuxtjs/tailwindcss
npm install --save-dev typescript @nuxt/types
```

We immediately hit our first technical challenge:

> **User**: Getting a TypeScript error about missing types

> **Cascade**: Let's fix that by updating tsconfig.json:

```json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "types": ["@nuxt/types", "@nuxt/content"]
  }
}
```

## Phase 4: Building the Blog

:::info
The blog implementation revealed Windsurf's ability to handle complex features while maintaining clean code organization.
:::

We started with the content structure:

```bash
content/
  blog/
    welcome-to-my-blog.md
    building-with-windsurf.md
  cv/
    experience.md
    skills.md
```

Then came the markdown rendering challenges:

> **User**: The code blocks aren't rendering properly, and the syntax highlighting is missing

> **Cascade**: We'll update the Nuxt Content configuration:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['typescript', 'vue', 'bash']
    },
    markdown: {
      remarkPlugins: ['remark-gfm'],
      rehypePlugins: ['rehype-slug']
    }
  }
})
```

After fixing the content rendering, we tackled the blog layout:

```vue
<!-- pages/blog/[...slug].vue -->
<template>
  <article class="prose mx-auto">
    <ContentDoc />
  </article>
</template>
```

## Working with Windsurf: A Practical Assessment

One of the most interesting aspects was how Windsurf adapted to my Angular-style component organization. Here's how we structured the hero section:

> **User**: I want the hero section to be a separate component with clean separation of template, script, and styles.

> **Cascade**: Perfect, let's create a modular hero component with animations. Here's the structure:

```vue
<!-- components/sections/HeroSection.vue -->
<template>
  <section class="hero-section">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="hero-content"
    >
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped>
.hero-section {
  @apply min-h-screen relative overflow-hidden;
}

.hero-content {
  @apply max-w-4xl mx-auto px-4 py-32;
}

.hero-title {
  @apply text-4xl md:text-6xl font-bold text-gray-900;
}

.hero-subtitle {
  @apply text-xl text-gray-600 mt-6;
}
</style>
```

This component structure follows familiar Angular patterns, maintaining the clean separation of concerns I value while leveraging Vue's modern features.

## Phase 5: Styling and Typography

With components in place, we focused on consistent styling. A key challenge was the blog typography:

> **User**: The blog post headings need work. Can we make them match the CV's style?

> **Cascade**: Let's use your brand color and create a clean hierarchy:

```javascript
// tailwind.config.js
typography: {
  css: {
    h1: { 
      color: '#2962B3',  // Primary brand color
      borderBottom: '3px solid #2962B3',
      paddingBottom: '0.5rem',
      display: 'inline-block'
    },
    h2: { 
      color: '#2962B3',
      borderBottom: '2px solid rgba(41, 98, 179, 0.7)',
      paddingBottom: '0.5rem'
    }
  }
}
```

This maintained visual consistency with my CV while providing clear content hierarchy.

## Phase 6: Development Workflow

To streamline the development process, we set up proper tooling:

### Local Development

First, a Makefile for common tasks:

```makefile
# Makefile
.PHONY: dev build preview deploy

dev:        ## Start development server
	npm run dev

build:      ## Build for production
	npm run build

preview:    ## Preview production build
	npm run preview

deploy: build   ## Deploy to GitHub Pages
	@echo "Deploying to GitHub Pages..."
```

### Automated Deployment

Next, GitHub Actions for continuous deployment:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Technical Challenges

Throughout development, we tackled several key challenges:

1. **Component Architecture**
   - Challenge: Maintaining Angular-like structure in Vue
   - Solution: Clear separation of template, script, and styles

2. **Type Safety**
   - Challenge: TypeScript integration
   - Solution: Proper type declarations and strict mode

3. **Build Process**
   - Challenge: Static site generation issues
   - Solution: Configured Nuxt SSG and base URL

4. **Content Management**
   - Challenge: Markdown processing and highlighting
   - Solution: Optimized Nuxt Content configuration

## Phase 7: Final Deployment

With the site polished and tested, we tackled deployment:

### GitHub Pages Configuration

The first challenge was configuring Nuxt for GitHub Pages:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/personal-website/',
    head: {
      title: 'Manuel Waltschek',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  // Ensure proper static generation
  ssr: true,
  target: 'static'
})
```

### Documentation

Finally, we documented the project setup:

```markdown
# Personal Website

Modern personal website built with Vue.js/Nuxt.js, featuring:
- Component-based architecture
- TypeScript integration
- Markdown blog with syntax highlighting
- Automated GitHub Pages deployment

## Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
make dev

# Build and preview
make build
make preview
\`\`\`
```

## Looking Forward

This project demonstrated how AI can enhance development while respecting engineering best practices. Starting from a PDF CV, we:

1. Analyzed the existing design
2. Created a static prototype
3. Migrated to Vue.js with TypeScript
4. Implemented a component-based architecture
5. Set up automated deployment

Key takeaways:
- Clean separation of concerns is crucial
- Type safety improves maintainability
- Automated deployment saves time
- Brand consistency matters

In future posts, I'll share insights about:
- Enterprise Java development
- Modern web development with Vue.js
- GIS solutions and mobility services
- AI integration in development

Stay tuned as I continue exploring the intersection of enterprise development and emerging technologies!
