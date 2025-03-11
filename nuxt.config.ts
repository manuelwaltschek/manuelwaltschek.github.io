// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  
  // App configuration
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Manuel Waltschek - Senior Software Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Senior Software Developer specializing in full-stack development, e-mobility applications, and domain-driven design.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // CSS and styling
  css: ['~/assets/css/main.css'],

  // Modules configuration
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],

  // Content configuration
  content: {
    highlight: {
      theme: 'github-dark'
    },
    markdown: {
      remarkPlugins: ['remark-mermaid'],
      toc: { depth: 2, searchDepth: 2 },
      anchorLinks: true
    }
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#2962B3',
            secondary: '#1e4c8a'
          }
        }
      }
    }
  },

  // Nitro configuration for GitHub Pages
  nitro: {
    preset: 'github-pages'
  }
})
