# Personal Website

A modern, professional portfolio website built with Vue.js and Nuxt.js. Features a responsive design, animated sections, and a blog system with markdown support.

## Features

- 🎨 Modern UI with professional animations
- 📱 Fully responsive design
- 📝 Blog system with markdown support
- 🎯 Clear separation of HTML, script, and styles
- 🎭 Dynamic content loading
- 🌈 Primary color scheme (#2962B3)

## Technology Stack

- **Framework**: Vue.js with Nuxt.js
- **Styling**: Tailwind CSS
- **Content**: Nuxt Content for blog posts
- **Animations**: Vue Motion
- **Type Safety**: TypeScript

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Blog Posts

Blog posts are written in Markdown and stored in `content/blog/`. Each post should include:

```markdown
---
title: Post Title
date: YYYY-MM-DD
image: /images/blog/image.jpg
description: Brief description of the post
---

Post content here...
```

## Deployment

### Understanding GitHub Pages and Jekyll

GitHub Pages is GitHub's static site hosting service. By default, it processes sites through Jekyll, a static site generator. However, since we're using Nuxt.js, we need to bypass Jekyll processing:

- The `.nojekyll` file in our build output tells GitHub Pages to skip Jekyll processing
- Without this file, Jekyll might ignore files/folders starting with underscores (like `_nuxt`)

### Repository Structure

This project uses a dual-repository setup:

1. **Development Repository** (`modern-personal-portfolio`)
   - Private repository containing source code
   - Maintains development history
   - Contains Vue.js components, blog content, and assets

2. **Production Repository** (`manuelwaltschek.github.io`)
   - Public repository for GitHub Pages
   - Contains only the built static files
   - Branch `main` is automatically served at https://manuelwaltschek.github.io

### Deployment Process

This project uses GitHub Actions for automated deployments. The workflow is triggered when you run:

```bash
make gh-pages
```

This command will:
1. Stage your changes
2. Create a commit with your primary color (#2962B3) in the message
3. Push to the private repository
4. Trigger the GitHub Actions workflow

The workflow (`deploy.yml`) then:
1. Sets up Node.js and installs dependencies
2. Builds the site using `npm run generate`
3. Creates the `.nojekyll` file
4. Deploys to your public GitHub Pages repository

You can monitor the deployment status at:
https://github.com/manuelwaltschek/modern-personal-portfolio/actions

### GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml`, which:

1. Triggers on pushes to the `master` branch
2. Sets up the build environment with Node.js
3. Installs project dependencies
4. Generates the static site with Nuxt
5. Creates `.nojekyll` file to bypass Jekyll processing
6. Deploys to your public GitHub Pages repository

This automated process ensures consistent deployments and maintains the separation between your development environment and the public site.

### Technical Details

1. **Nuxt Configuration**
   - Uses `nitro.preset: 'github-pages'` for GitHub Pages compatibility
   - Configures `app.baseURL` for proper asset paths
   - Enables SSR for better SEO and performance

2. **Build Output**
   - Static files in `.output/public`
   - Includes `.nojekyll` to bypass Jekyll
   - Preserves asset paths with `buildAssetsDir: 'assets'`

3. **GitHub Pages Setup**
   - Uses the `main` branch of `manuelwaltschek.github.io`
   - Serves content from the root directory
   - No need for `gh-pages` branch since this is a user/organization site

## Project Structure

```
├── assets/          # Global assets (CSS)
├── components/      # Vue components
├── content/         # Blog posts and content
├── layouts/         # Page layouts
├── pages/           # Vue pages
├── public/          # Static files
└── types/           # TypeScript types
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this code for your own projects!
