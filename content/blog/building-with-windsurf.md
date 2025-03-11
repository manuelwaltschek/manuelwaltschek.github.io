---
title: 'Building with Windsurf - A Software Engineer''s AI Journey'
description: 'Exploring agentic AI development with Windsurf - from static site to dynamic blog, with insights and learnings along the way.'
date: '2025-03-11'
tags: ['AI', 'Development', 'Windsurf', 'Vue.js']
image: '/images/blog/ai-coding.jpg'
author: 'Manuel Waltschek'
readingTime: '6 min'
---

:::lead
As a software engineer fascinated by AI technologies, I've been exploring various AI-powered development tools. This is the story of my first practical project with Windsurf, an agentic AI assistant, and what I learned along the way.
:::

## The Path to Agentic AI

My journey into AI-assisted development started with familiar tools like GitHub Copilot and ChatGPT. While exploring AI initiatives for my employer and researching the possibility of implementing an AI code pilot trained on company data, I discovered Codeium and their innovative Windsurf IDE.

To build a solid foundation, I invested time in understanding the underlying technologies. Google's Machine Learning crash course and their YouTube series on LLMs, embeddings, RAGs, and agentic AI provided valuable insights into the technology I was about to work with.

## From Static to Dynamic: A Website's Evolution

:::info
What started as a simple CV-based landing page evolved into something much more interesting through collaborative iteration with Windsurf.
:::

The journey began with a simple prompt:

```
User: I have a CV in PDF format. Can you help me create a modern, professional website based on its content?

Cascade: I'll help you create a modern website. First, let's set up a Nuxt.js project for a clean, component-based architecture. Here's what we'll do:

npm create nuxt@latest
npm install @nuxtjs/tailwindcss @vueuse/motion @nuxt/content

This will give us a solid foundation with Tailwind CSS for styling and smooth animations.
```

The initial implementation was straightforward but static. Here's where things got interesting - Windsurf started suggesting improvements:

```
Cascade: I notice we could make this more dynamic. Instead of hardcoding your CV content, we could use Nuxt Content to manage it as markdown files. This would make updates easier and allow us to add a blog section. Here's the structure I propose:

/content
  /blog        # Blog posts in markdown
  /cv          # CV sections as structured content
/components    # Reusable Vue components
/pages         # Route components
/layouts       # Page layouts
```

:::info
Working with Windsurf feels like pair programming with a very methodical partner - one that's happy to restart the dev server multiple times until everything works just right.
:::

The transition to a dynamic site wasn't without its challenges. Here's a typical debugging session:

```
Error: Cannot find module '@nuxt/content'

Cascade: Let's fix this error:
1. First, let's check if the module is properly installed
2. Then, we need to add it to the Nuxt config

npm install @nuxt/content

// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})

Let me restart the dev server to apply these changes...
```

What impressed me was how Windsurf handled the iterative process. Instead of just throwing code at the problem, it would:
1. Analyze error messages
2. Propose specific fixes
3. Verify the changes worked
4. Suggest improvements proactively

## Working with Windsurf: A Practical Assessment

One thing I quickly learned is that Windsurf appreciates precision in prompts. Here's an example of refining a request:

```
User: Can you add some animations to the page?

Cascade: I'll need more specifics. What kind of animations are you looking for? I could add:
- Fade-in effects on scroll
- Hover transitions
- Page transitions
- Loading animations

User: Let's start with fade-in effects on scroll.

Cascade: Perfect! I'll use @vueuse/motion for smooth, performant animations:

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0 }"
    :when-in-view="{ amount: 0.2 }"
  >
    <!-- Content here -->
  </div>
</template>
```

The accept/dismiss workflow makes it easy to guide the development. When Windsurf suggests a change, you can:
1. Accept it as is
2. Request modifications
3. Dismiss it entirely

This iterative process helped refine the site's design and functionality. For example, here's how we handled the blog post styling:

```
User: The blog post headings need better spacing.

Cascade: I'll adjust the typography scale and margins:

.prose h1 { margin-top: 0; margin-bottom: 2.5rem; }
.prose h2 { margin-top: 4rem; margin-bottom: 2rem; }
.prose h3 { margin-top: 3rem; margin-bottom: 1.5rem; }

This creates a clear visual hierarchy while maintaining readability.
```

The tool showed particular strength in documentation. Here's an example of its Makefile generation:

```makefile
# Development
.PHONY: dev
dev:
    npm run dev

# Build for production
.PHONY: build
build:
    npm run build

# Preview production build
.PHONY: preview
preview:
    npm run preview

# Deploy to GitHub Pages
.PHONY: deploy
deploy: build
    # Add deployment commands here
```

## Critical Analysis

For smaller projects or proofs of concept, Windsurf proves to be a capable partner. Here's a breakdown of its strengths and limitations:

### Strengths
```plaintext
✓ Quick Project Setup
  - Suggests best practices
  - Handles dependency management
  - Creates sensible project structure

✓ Iterative Development
  - Maintains context across sessions
  - Provides clear explanations
  - Offers multiple solutions

✓ Documentation
  - Generates comprehensive README files
  - Creates useful Makefiles
  - Documents code clearly
```

### Areas for Improvement
```plaintext
△ Tool Precision
  - Sometimes misinterprets complex requirements
  - May need multiple iterations for exact implementation
  - Tool calling can be inconsistent

△ Enterprise Readiness
  - Iteration times could be challenging at scale
  - May struggle with complex architectural decisions
  - Limited understanding of enterprise patterns
```

> Here's a funny but telling anecdote: While building this site, I realized that even though some actions seemed to fail due to incorrect tool calling, Windsurf was still a pleasant tool to work with. It helped create this simple project quite effectively - or rather, it created what it thought it should be. And you know what? Sometimes its ideas were better than my original plans! 😉

For example, when I asked for a simple landing page, it suggested adding subtle geometric animations in the background:

```vue
<!-- Decorative background with dynamic shapes -->
<div class="absolute inset-0 opacity-10">
  <div class="absolute top-10 left-1/4 w-64 h-64 border-2 border-primary rounded-full transform rotate-45"></div>
  <div class="absolute -bottom-10 right-1/4 w-72 h-72 border-2 border-secondary rounded-lg transform -rotate-12"></div>
  <!-- More shapes... -->
</div>
```

This wasn't something I had considered, but it added a subtle, professional touch to the design.

## Looking Forward

This project is just the beginning of my journey with AI-powered development. My next steps involve creating applications that themselves use AI, with a particular focus on Spring AI - a framework I'm very familiar with. I'm especially interested in developing tools that enhance developer productivity and documenting the entire process.

The experience with Windsurf has shown me both the current capabilities and limitations of agentic AI in software development. While we're not quite at the point where AI can handle enterprise-scale applications independently, tools like Windsurf are already valuable additions to a developer's toolkit.

Curious about how it all came together? Check out the [source code](https://github.com/manuelwaltschek/personal-website) and stay tuned for more posts about AI-powered development!
